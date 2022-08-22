import { Box, Flex, Image } from '@chakra-ui/react'
import { ReactLocation, Router } from '@tanstack/react-location'

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

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/issue', element: <IssuePage /> },
]

const location = new ReactLocation()

export function App() {
  return (
    <Box>
      <Header />

      <Box as="main" w="100%" maxWidth="1344px" mx="auto" mt="-92px" px="4">
        <Router location={location} routes={routes} />
      </Box>
    </Box>
  )
}
