import { Grid } from '@mantine/core'
import React from 'react'
import PostCard from '../components/PostCard'

type Props = {}

function View({}: Props) {
  return (
    <Grid>
    <Grid.Col span={4}><PostCard/></Grid.Col>
    <Grid.Col span={4}><PostCard/></Grid.Col>
    <Grid.Col span={4}><PostCard/></Grid.Col>
    <Grid.Col span={4}><PostCard/></Grid.Col>
    <Grid.Col span={4}><PostCard/></Grid.Col>
    <Grid.Col span={4}><PostCard/></Grid.Col>
  </Grid>
  )
}

export default View