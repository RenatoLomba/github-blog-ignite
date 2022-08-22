import { FaGithub, FaBuilding, FaUsers } from 'react-icons/fa'

import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'

import { Card } from '../components/card'
import { FaArrowUpRightFromSquare } from '../components/fa-arrow-up-right-from-square'
import { Link } from '../components/link'
import { TextInput } from '../components/text-input'

export function HomePage() {
  return (
    <Box>
      <HeaderCard />

      <Box mt="72px">
        <SearchForm />

        <Flex gap={['4', '8']} flexWrap="wrap" mt="12" pb={['4', '8']}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Box>
  )
}

function SearchForm() {
  return (
    <Box as="form">
      <Flex w="100%" justify="space-between" align="flex-start">
        <Heading fontSize="lg" color="marine.100">
          Publicações
        </Heading>
        <Box as="span" fontSize="sm" color="marine.300">
          6 publicações
        </Box>
      </Flex>

      <TextInput mt="3" placeholder="Buscar conteúdo" />
    </Box>
  )
}

function HeaderCard() {
  return (
    <Box w="100%" bg="marine.700" py="8" pr="8" pl="10" borderRadius="10px">
      <Flex
        align={['center', 'flex-start']}
        flexDir={['column', 'row']}
        w="100%"
        gap="8"
      >
        <Image
          src="https://github.com/RenatoLomba.png"
          alt="Renato Lomba"
          w="148px"
          h="148px"
          borderRadius="lg"
        />

        <Box flex="1">
          <Flex
            w="100%"
            justify="space-between"
            align="flex-start"
            mb={2}
            gap={2}
          >
            <Heading fontSize="2xl" color="marine.50">
              Renato Lomba
            </Heading>

            <Link rightIcon={FaArrowUpRightFromSquare}>Github</Link>
          </Flex>

          <Text mb={6}>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Text>

          <Flex columnGap={6} rowGap={2} flexWrap="wrap">
            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaGithub} />
              <span>renatolomba20</span>
            </Flex>

            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaBuilding} />
              <span>Rocketseat</span>
            </Flex>

            <Flex align="center" gap={2}>
              <Icon color="marine.400" as={FaUsers} />
              <span>32 seguidores</span>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
