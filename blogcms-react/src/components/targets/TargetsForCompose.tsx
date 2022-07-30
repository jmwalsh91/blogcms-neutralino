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
        height: 250,
        width: 250,
        backgroundColor: bg,
    }}>
{icon}
    </Container>
    {title}
  </Stack>
  )
}

export default TargetsForCompose