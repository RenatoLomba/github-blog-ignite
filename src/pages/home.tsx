import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { api, githubRepo, useUser } from '../App'
import { Card } from '../components/card'
import { FaArrowUpRightFromSquare } from '../components/fa-arrow-up-right-from-square'
import { Link } from '../components/link'
import { TextInput } from '../components/text-input'

type GithubIssuesResponse = {
  total_count: number
  items: {
    id: number
    number: number
    title: string
    body: string
    created_at: string
  }[]
}

function useIssues(searchText: string, username?: string) {
  return useQuery(
    ['issues', searchText, username],
    async () => {
      if (!username) return null

      const { data } = await api.get<GithubIssuesResponse>(
        `/search/issues?q=${searchText}%20repo:${username}/${githubRepo}`,
      )

      return {
        ...data,
        items: data.items.map((item) => ({
          ...item,
          created_at: new Date(item.created_at),
        })),
      }
    },
    {
      staleTime: 1000 * 60 * 2,
    },
  )
}

export function HomePage() {
  const { data: user, isLoading: isLoadingUser } = useUser()

  const [searchText, setSearchText] = useState('')

  const { data: issues, isLoading: isLoadingIssues } = useIssues(
    searchText,
    user?.login,
  )

  function onSearchFormSubmit(inputText: string) {
    setSearchText(inputText)
  }

  function onCleanSearchForm() {
    setSearchText('')
  }

  return (
    <Box>
      <HeaderCard />

      <Box mt="72px">
        {!isLoadingUser && user ? (
          <>
            <SearchForm
              searchText={searchText}
              onSubmit={onSearchFormSubmit}
              onClean={onCleanSearchForm}
            />

            {!isLoadingIssues && issues ? (
              <Flex gap={['4', '8']} flexWrap="wrap" pb={['4', '8']}>
                {issues.items.map((issue) => (
                  <Card
                    key={issue.id}
                    title={issue.title}
                    description={issue.body}
                    createdAt={issue.created_at}
                  />
                ))}
              </Flex>
            ) : (
              <Spinner />
            )}
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    </Box>
  )
}

function SearchForm({
  searchText = '',
  onSubmit,
  onClean,
}: {
  searchText?: string
  onSubmit: (inputText: string) => void
  onClean: () => void
}) {
  const { data: user } = useUser()
  const { data: issues } = useIssues(searchText, user?.login!)

  const { register, handleSubmit, reset } = useForm<{ searchText: string }>()

  return (
    <Box
      as="form"
      onSubmit={handleSubmit((data) => onSubmit(data.searchText))}
      mb={12}
    >
      <Flex w="100%" justify="space-between" align="flex-start">
        <Heading fontSize="lg" color="marine.100">
          Publicações
        </Heading>
        <Box as="span" fontSize="sm" color="marine.300">
          {issues?.total_count} publicações
        </Box>
      </Flex>

      <HStack align="flex-end" spacing={4}>
        <TextInput
          flex="1"
          {...register('searchText')}
          mt="3"
          placeholder="Buscar conteúdo"
        />

        <Button
          colorScheme="marine"
          onClick={() => {
            onClean()
            reset()
          }}
        >
          Limpar
        </Button>
      </HStack>
    </Box>
  )
}

function HeaderCard() {
  const { data: user } = useUser()

  return (
    <Box w="100%" bg="marine.700" py="8" pr="8" pl="10" borderRadius="10px">
      <Flex
        align={['center', 'flex-start']}
        flexDir={['column', 'row']}
        w="100%"
        gap="8"
      >
        <Avatar
          src={user?.avatar_url}
          name={user?.name}
          w="148px"
          h="148px"
          borderRadius="lg"
        />

        <Box flex="1">
          <Flex
            w="100%"
            justify="space-between"
            align="flex-start"
            mb={2}
            gap={2}
          >
            <Heading fontSize="2xl" color="marine.50">
              {user?.name}
            </Heading>

            <Link
              rightIcon={FaArrowUpRightFromSquare}
              href={`https://github.com/${user?.login}`}
              target="_blank"
            >
              Github
            </Link>
          </Flex>

          <Text mb={6}>{user?.bio}</Text>

          <Flex columnGap={6} rowGap={2} flexWrap="wrap">
            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaGithub} />
              <span>{user?.login}</span>
            </Flex>

            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaBuilding} />
              <span>{user?.company || '-'}</span>
            </Flex>

            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaUsers} />
              <span>{user?.followers} seguidores</span>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
