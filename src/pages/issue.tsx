import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'

import { FaArrowUpRightFromSquare } from '../components/fa-arrow-up-right-from-square'
import { Link } from '../components/link'

export function IssuePage() {
  return (
    <Box>
      <HeaderCard />

      <Box px="8" py="10">
        <Text>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>{' '}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
          <br />
          <br />
          <Heading
            as="h2"
            size="sm"
            fontWeight="regular"
            textDecor="underline"
            color="babyblue.500"
          >
            Dynamic typing
          </Heading>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </Text>
      </Box>
    </Box>
  )
}

function HeaderCard() {
  return (
    <Box w="100%" bg="marine.700" p="8" borderRadius="10px">
      <Flex justify="space-between" mb={5}>
        <Link leftIcon={FaChevronLeft}>Voltar</Link>
        <Link rightIcon={FaArrowUpRightFromSquare}>Ver no Github</Link>
      </Flex>
      <Heading fontSize="2xl" color="marine.50">
        JavaScript data types and data structures
      </Heading>

      <Flex columnGap={8} rowGap={2} flexWrap="wrap" mt={2}>
        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaGithub} />
          <Box color="marine.300">renatolomba20</Box>
        </Flex>

        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaCalendarDay} />
          <Box color="marine.300">Há 1 dia</Box>
        </Flex>

        <Flex align="center" gap={2}>
          <Icon color="marine.400" as={FaComment} />
          <Box color="marine.300">5 comentários</Box>
        </Flex>
      </Flex>
    </Box>
  )
}
