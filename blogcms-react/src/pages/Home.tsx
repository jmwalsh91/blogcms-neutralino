import { Button, Header, Paper } from '@mantine/core'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  
  return (
    <Paper style={{
        width: 300,
        height: 300
      }}>
  
    <Header height={'3rem'}>Hello </Header>
      <Button>Submit</Button>
      <Button color="secondary">Secondary</Button>
      
      </Paper>
  )
}

