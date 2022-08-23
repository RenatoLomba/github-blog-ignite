import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import { Box, Flex, Heading, Icon, Spinner, Text } from '@chakra-ui/react'
import { Link as LocationLink, useMatch } from '@tanstack/react-location'
import { useQuery } from '@tanstack/react-query'

import { api, githubRepo, username } from '../App'
import { FaArrowUpRightFromSquare } from '../components/fa-arrow-up-right-from-square'
import { Link } from '../components/link'

type IssueData = {
  html_url: string
  user: {
    login: string
  }
  body: string
  title: string
  created_at: string
  comments: number
}

function useIssue() {
  const { params } = useMatch()
  const issueNumber = Number(params.issueNumber)

  return useQuery(
    ['issue', issueNumber],
    async () => {
      const { data } = await api.get<IssueData>(
        `/repos/${username}/${githubRepo}/issues/${issueNumber}`,
      )

      return {
        html_url: data.html_url,
        user: data.user,
        body: data.body,
        title: data.title,
        created_at: formatDistanceToNow(new Date(data.created_at), {
          addSuffix: true,
          locale: ptBR,
        }),
        comments: data.comments,
      }
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  )
}

export function IssuePage() {
  const { data, isLoading } = useIssue()

  if (!data || isLoading) return <Spinner />

  return (
    <Box>
      <HeaderCard />

      <Box px="8" py="10">
        <Text>{data.body}</Text>
      </Box>
    </Box>
  )
}

function HeaderCard() {
  const { data } = useIssue()

  return (
    <Box w="100%" bg="marine.700" p="8" borderRadius="10px">
      <Flex justify="space-between" mb={5}>
        <LocationLink to="/">
          <Link as="span" leftIcon={FaChevronLeft}>
            Voltar
          </Link>
        </LocationLink>

        <Link
          target="_blank"
          href={data?.html_url}
          rightIcon={FaArrowUpRightFromSquare}
        >
          Ver no Github
        </Link>
      </Flex>
      <Heading fontSize="2xl" color="marine.50">
        {data?.title}
      </Heading>

      <Flex columnGap={8} rowGap={2} flexWrap="wrap" mt={[8, 2]}>
        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaGithub} />
          <Box color="marine.300">{data?.user.login}</Box>
        </Flex>

        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaCalendarDay} />
          <Box color="marine.300">{data?.created_at}</Box>
        </Flex>

        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaComment} />
          <Box color="marine.300">{data?.comments} comentários</Box>
        </Flex>
      </Flex>
    </Box>
  )
}
