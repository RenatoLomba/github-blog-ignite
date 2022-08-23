import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { Box, chakra, Flex, Heading, Text } from '@chakra-ui/react'

type CardProps = {
  title: string
  description: string
  createdAt: Date
}

const MarkdownContainer = chakra(Box, {
  baseStyle: {
    mt: '5',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: ['6', '4'],
    WebkitBoxOrient: 'vertical',
    fontSize: ['xs', 'md'],
  },
})

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

      <MarkdownContainer>
        <ReactMarkdown>{description}</ReactMarkdown>
      </MarkdownContainer>
    </Box>
  )
}
