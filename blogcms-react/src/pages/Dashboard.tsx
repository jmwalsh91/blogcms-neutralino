import { Grid, Paper } from '@mantine/core'
import React from 'react'
import { DashStats } from '../components/DashStats'

type Props = {}
const statsData = [
    {
        title: 'Unique Views',
        stats: '1000',
        description: 'This is how many unique views, congrats!'
},
{
    title: 'Posts this week',
    stats: '7',
    description: 'Up 700% from last week!'
}
,
{
title:'Another Metric',
stats: 'Number',
description: 'Another Metric Description would go here.'
}]
function Dashboard({}: Props) {
  return (
    <Paper>
        <DashStats data={statsData}/>
    </Paper>
    
  )
}

export default Dashboard