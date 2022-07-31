import { Button, Container, Tabs, Title, useMantineTheme } from '@mantine/core'
import React from 'react'

type Props = {
    title: string,
    content: string,
}

function PreviewModalContent({title, content}: Props) {

    const theme = useMantineTheme()
  return (
    <Tabs defaultValue="post">
    <Tabs.List>
    <Tabs.Tab value="post">Post</Tabs.Tab>
    <Tabs.Tab value="card">Card</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="post">
    <Title color="primary"> {title} </Title>
    <div dangerouslySetInnerHTML={{__html: content}}/>
    </Tabs.Panel>
    <Tabs.Panel value="card">
        This be card
    </Tabs.Panel>
    <Button color="important">Submit</Button>
    
    </Tabs>
  )
}

export default PreviewModalContent