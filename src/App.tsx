import axios from 'axios'

import { Box, Flex, Image } from '@chakra-ui/react'
import { ReactLocation, Router } from '@tanstack/react-location'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import { HomePage } from './pages/home'
import { IssuePage } from './pages/issue'

function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="296px"
      justify="center"
      pt="16"
      pb="134px"
      backgroundImage="url('/cover.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Image w="148px" h="98px" src="/logo.svg" alt="" />
    </Flex>
  )
}

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

type GithubUsersResponse = {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string | null
  followers: number
}

export const username = 'renatolomba'

export function useUser() {
  return useQuery(
    ['user'],
    async () => {
      return (await api.get<GithubUsersResponse>(`/users/${username}`)).data
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  )
}

export const githubRepo = 'github-blog-ignite'

const location = new ReactLocation()

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/issue/:issueNumber', element: <IssuePage /> },
]

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Box as="main" w="100%" maxWidth="1344px" mx="auto" mt="-92px" px="4">
        <Router location={location} routes={routes} />
      </Box>
    </QueryClientProvider>
  )
}
