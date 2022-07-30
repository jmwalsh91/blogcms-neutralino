import { Group } from '@mantine/core'
import React from 'react'
import { theme } from '../styles/theme'
import TargetsForCompose from './targets/TargetsForCompose'

const targetArr = [
    {
        bg: theme.colors.primary[3], 
        title: 'Blog Post',
        icon: 'string'
    },
    {
        bg: theme.colors.secondary[3], 
        title: 'Projects',
        icon: 'string'
    },
    {
        bg: theme.colors.important[3], 
        title: 'Notes',
        icon: 'notes'
    },
]
type Props = {}
/**
 * Component renders options for where composition will be published.
 * 
 * @returns 
 */
function ComposeTarget({}: Props) {
  return (
    <Group position={'apart'} spacing={12} m={30}>
        {targetArr.map((target) => {
            return (
                <TargetsForCompose bg={target.bg} title={target.title} icon={target.icon}/>)
        })}
  </Group>
  )
}

export default ComposeTarget