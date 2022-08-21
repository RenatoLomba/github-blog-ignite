import { FaChevronLeft } from 'react-icons/fa'

import { Box, Flex } from '@chakra-ui/react'

import { Card } from './components/card'
import { FaArrowUpRightFromSquare } from './components/fa-arrow-up-right-from-square'
import { Link } from './components/link'
import { TextInput } from './components/text-input'

export function App() {
  return (
    <Flex w="100%" maxWidth="1312px" mx="auto" pt="10" gap="4" flexDir="column">
      <TextInput placeholder="Buscar conteúdo" />

      <Box>
        <Link rightIcon={FaArrowUpRightFromSquare}>Github</Link>
        <Link leftIcon={FaChevronLeft}>Voltar</Link>
      </Box>

      <Flex w="100%" flexWrap="wrap" gap="8">
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  )
}
