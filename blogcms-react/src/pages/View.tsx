import { Grid } from '@mantine/core'
import React from 'react'

type Props = {}

function View({}: Props) {
  return (
    <Grid>
    <Grid.Col span={4}>1</Grid.Col>
    <Grid.Col span={4}>2</Grid.Col>
    <Grid.Col span={4}>3</Grid.Col>
  </Grid>
  )
}

export default View