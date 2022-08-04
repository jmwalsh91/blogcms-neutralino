import { Container } from '@mantine/core'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NewBlogpost from './NewBlogpost'
import NewNote from './NewNote'
import NewProject from './NewProject'

type Props = {}

function ComposeNew({}: Props) {
  return (
    <Container>

    <Outlet/>
    </Container>
  )
}

export default ComposeNew