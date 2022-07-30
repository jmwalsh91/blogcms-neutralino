import { Group } from '@mantine/core'
import React from 'react'
import { theme } from '../styles/theme'
import TargetsForCompose from './targets/TargetsForCompose'
import { IconBrandGithub } from '@tabler/icons'
import { IconPencil } from '@tabler/icons'
import { IconNotebook } from '@tabler/icons'
const targetArr = [
    {
        bg: theme.colors.primary[3], 
        title: 'Blog Post',
        icon: <IconPencil width={128} height={128} color="black" style={{
            textAlign: "center",
        }}/>
    },
    {
        bg: theme.colors.secondary[3], 
        title: 'Projects',
        icon: <IconBrandGithub width={128} height={128} color="black" style={{
            textAlign: "center",
        }}/>
    },
    {
        bg: theme.colors.important[3], 
        title: 'Notes',
        icon: <IconNotebook width={128} height={128} color="black" style={{
            textAlign: "center",
        }}/>
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