import './TTCommons/TTCommons.css'
import classes from './Demo.module.css'
import InputClasses from './Input.module.css'

import { createTheme, Button, TextInput, Title, Input } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'TTCommons-normal, sans-serif',

  defaultRadius: 'md',

  components: {
    Title: Title.extend({
      classNames: {
        root: classes.heading,
      },
    }),

    TextInput: TextInput.extend({
      classNames: {
        label: 'text-[#9DA5B2]',
      },
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    }),

    Button: Button.extend({
      classNames: classes,
      defaultProps: {
        variant: 'primary',
        radius: 'md',
        size: 'md',
      },
    }),

    Input: Input.extend({
      classNames: InputClasses,
      defaultProps: {
        size: 'c',
        radius: 'md',
      },
    }),
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
})

export const selectStyles = {
  item: (provided: any) => ({ ...provided }),
  input: {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '20px',
  },
}
