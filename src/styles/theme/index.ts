import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bgColor: 'marine.800',
        color: 'marine.200',
        fontSize: 'md',
        lineHeight: 'tall',
      },
    },
  },
  fonts: {
    body: 'Nunito, sans-serif',
    heading: 'Nunito, sans-serif',
  },
  colors: {
    babyblue: {
      500: '#3294f8',
    },
    marine: {
      50: '#e7edf4',
      100: '#c4d4e3',
      200: '#afc2d4',
      300: '#7b96b2',
      400: '#3a536b',
      500: '#1c2f41',
      600: '#112131',
      700: '#0b1b2b',
      800: '#071422',
      900: '#040f1a',
    },
  },
})
