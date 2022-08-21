import { Box, Flex, Image } from '@chakra-ui/react'

import { HomePage } from './pages/home'

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

export function App() {
  return (
    <Box>
      <Header />

      <Box as="main" w="100%" maxWidth="1312px" mx="auto" mt="-92px">
        <HomePage />
      </Box>
    </Box>
  )
}
