import { FC, SVGProps } from 'react'

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
} from '@chakra-ui/react'

type LinkProps = {
  leftIcon?: FC<SVGProps<SVGSVGElement>>
  rightIcon?: FC<SVGProps<SVGSVGElement>>
} & ChakraLinkProps

export const Link: FC<LinkProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
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
      {...props}
    >
      {leftIcon && <Icon fill="babyblue.500" as={leftIcon} />}
      <span>{children}</span>
      {rightIcon && <Icon fill="babyblue.500" as={rightIcon} />}
    </ChakraLink>
  )
}
