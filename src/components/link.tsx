import { FC } from 'react'

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
} from '@chakra-ui/react'

import { FaArrowUpRightFromSquare } from './fa-arrow-up-right-from-square'

type LinkProps = ChakraLinkProps

export const Link: FC<LinkProps> = ({ children }) => {
  return (
    <ChakraLink
      width="fit-content"
      fontSize="xs"
      fontWeight="bold"
      color="babyblue.500"
      textTransform="uppercase"
      borderBottom="1px solid transparent"
      _hover={{
        borderColor: 'babyblue.500',
      }}
      display="flex"
      alignItems="center"
      gap="2"
    >
      <span>{children}</span>
      <Icon fill="babyblue.500" as={FaArrowUpRightFromSquare} />
    </ChakraLink>
  )
}
