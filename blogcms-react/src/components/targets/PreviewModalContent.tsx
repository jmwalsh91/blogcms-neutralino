import { Button, Container, Loader, Tabs, Title, TypographyStylesProvider, useMantineTheme } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/types';
import React, { Suspense } from 'react'
import { FormValues } from '../../pages/Compose';
import PostCard from '../PostCard';

type Props = {
    form: UseFormReturnType<FormValues>
}

function PreviewModalContent({form}: Props) {
    const theme = useMantineTheme()
    const img = form.values.cardImage
  return (
    <Tabs defaultValue="post">
    <Tabs.List>
    <Tabs.Tab value="post">Post</Tabs.Tab>
    <Tabs.Tab value="card">Card</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="post">
    <Title color="primary"> {form.values.title} </Title>
    <TypographyStylesProvider>
    <div dangerouslySetInnerHTML={{__html: form.values.postText}}/>
    </TypographyStylesProvider>
    </Tabs.Panel>
    <Tabs.Panel value="card">
        <Suspense fallback={<Loader variant="bars"/>}>
        <PostCard title={form.values.title} description={form.values.cardText} imageUrl={img} />
        </Suspense>
    </Tabs.Panel>
    <Button color="important">Submit</Button>
    
    </Tabs>
  )
}

export default PreviewModalContent