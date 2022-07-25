import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Shell from './components/Shell'
import { Button, Header, MantineProvider, Paper } from '@mantine/core'
import { theme } from './styles/theme'

function App() {


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme
    }>
   <Shell>
    <Paper style={{
      width: 300,
      height: 300
    }}>

  <Header height={'3rem'}>Hello </Header>
    <Button>Submit</Button>
    <Button color="secondary">Secondary</Button>
    
    </Paper>
   </Shell>
    </MantineProvider>
  )
}

export default App
