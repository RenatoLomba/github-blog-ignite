import { Box, Flex } from '@chakra-ui/react'

import { Link } from './components/link'
import { TextInput } from './components/text-input'

export function App() {
  return (
    <Flex w="100%" padding={6} gap="4" flexDir="column">
      <TextInput placeholder="Buscar conteúdo" />

      <Box>
        <Link>Github</Link>
      </Box>
    </Flex>
  )
}
