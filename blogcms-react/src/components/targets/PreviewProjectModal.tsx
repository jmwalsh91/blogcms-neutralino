import { Button, Container, Loader, Tabs, Title, TypographyStylesProvider, useMantineTheme } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/types';
import React, { Suspense } from 'react'
import { FormValues } from '../../pages/NewProject';
import { Project } from '../../services/sb';
import PostCard from '../PostCard';
import { ProjectCard } from '../ProjectCard';
import ProjTemplatePreview from './ProjTemplatePreview';

type Props = {
    form: UseFormReturnType<FormValues>
}

function PreviewProjectModal({form}: Props) {
    const theme = useMantineTheme()
    const img = form.values.mockup
    const project = form.values as Project
/*     const project: Project = {
        project_name: form.values.project_name,
        mockup: form.values.mockup,
        card_text: form.values.card_text,
        description: form.values.description,
        stack_badges: form.values.stack_badges,
        card_image: form.values.card_image,
    } */
  return (
    <Tabs defaultValue="project">
    <Tabs.List>
    <Tabs.Tab value="project">Project</Tabs.Tab>
    <Tabs.Tab value="card">Card</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="project">

    <ProjTemplatePreview {...project}/>

    </Tabs.Panel>
    <Tabs.Panel value="card">
        <Suspense fallback={<Loader variant="bars"/>}>
        <ProjectCard {...project}/>
        </Suspense>
    </Tabs.Panel>
    <Button color="important">Submit</Button>
    
    </Tabs>
  )
}

export default PreviewProjectModal