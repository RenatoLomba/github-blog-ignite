import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'

import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react'

import { useUser } from '../App'
import { Card } from '../components/card'
import { FaArrowUpRightFromSquare } from '../components/fa-arrow-up-right-from-square'
import { Link } from '../components/link'
import { TextInput } from '../components/text-input'

export function HomePage() {
  const { data: user, isLoading } = useUser()

  return (
    <Box>
      <HeaderCard />

      <Box mt="72px">
        {!isLoading && user ? (
          <>
            <SearchForm />

            <Flex gap={['4', '8']} flexWrap="wrap" mt="12" pb={['4', '8']}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Flex>
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    </Box>
  )
}

function SearchForm() {
  return (
    <Box as="form">
      <Flex w="100%" justify="space-between" align="flex-start">
        <Heading fontSize="lg" color="marine.100">
          Publicações
        </Heading>
        <Box as="span" fontSize="sm" color="marine.300">
          6 publicações
        </Box>
      </Flex>

      <TextInput mt="3" placeholder="Buscar conteúdo" />
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
