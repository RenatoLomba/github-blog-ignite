import { FC } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Card: FC = () => {
  return (
    <Box
      maxWidth="416px"
      w="100%"
      h="260px"
      bgColor="marine.600"
      borderRadius="10px"
      p={['6', '8']}
    >
      <Flex as="header" gap={['2', '4']} flexDir={['column', 'row']}>
        <Heading fontSize="xl">
          JavaScript data types and data structures
        </Heading>
        <Text as="span" color="marine.300" fontSize="sm" whiteSpace="pre">
          Há 1 dia
        </Text>
      </Flex>

      <Text
        mt="5"
        overflow="hidden"
        text-overflow="ellipsis"
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
        }}
      >
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo; // foo is now a string fo //
        foo is now a boolean
      </Text>
    </Box>
  )
}
