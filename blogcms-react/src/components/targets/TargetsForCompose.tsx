import { Container, Stack } from '@mantine/core'
import React from 'react'

type Props = {
    bg: string,
    title: string,
    icon: any
}

function TargetsForCompose({bg, title, icon}: Props) {
  return (
    <Stack>
        <Container sx={{
        borderRadius: 24,
        backgroundColor: bg,
       
    }}>
{icon}
    </Container>
    {title}
  </Stack>
  )
}

export default TargetsForCompose