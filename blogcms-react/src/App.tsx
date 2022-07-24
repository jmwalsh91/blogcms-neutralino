import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Shell from './components/Shell'
import { Header, Paper } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Shell>
    <Paper style={{
      width: 300,
      height: 300
    }}>

  <Header height={'2rem'}> Hello </Header>

    </Paper>
   </Shell>
    </div>
  )
}

export default App
