import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FC } from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

type CardProps = {
  title: string
  description: string
  createdAt: Date
}

export const Card: FC<CardProps> = ({ title, description, createdAt }) => {
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
        <Heading fontSize="xl">{title}</Heading>
        <Text as="span" color="marine.300" fontSize="sm" whiteSpace="pre">
          {formatDistanceToNow(createdAt, {
            addSuffix: true,
            locale: ptBR,
          })}
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
        {description}
      </Text>
    </Box>
  )
}
