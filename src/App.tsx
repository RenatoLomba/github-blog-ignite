import { Flex } from '@chakra-ui/react'

import { TextInput } from './components/text-input'

export function App() {
  return (
    <Flex w="100%" padding={6}>
      <TextInput placeholder="Buscar conteúdo" />
    </Flex>
  )
}
