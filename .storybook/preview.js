import React from 'react'
import { addDecorator } from '@storybook/react'

import {
  createTheme,
  ThemeProvider,
} from '../src'

const theme = createTheme()

addDecorator(story => (
    <ThemeProvider theme={theme} >
      {story()}
    </ThemeProvider >
))
