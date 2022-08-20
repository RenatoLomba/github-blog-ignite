import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Input, InputProps } from '@chakra-ui/react'

type TextInputProps = InputProps

const BaseTextInput: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (props, ref) => {
  return (
    <Input
      ref={ref}
      borderColor="marine.500"
      focusBorderColor="babyblue.500"
      py="3"
      px="4"
      _hover={{
        borderColor: 'none',
      }}
      _placeholder={{
        color: 'marine.400',
      }}
      {...props}
    />
  )
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  BaseTextInput,
)
