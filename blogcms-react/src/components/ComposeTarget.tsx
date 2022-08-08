import { Group } from '@mantine/core'
import React from 'react'
import { theme } from '../styles/theme'
import TargetsForCompose from './targets/TargetsForCompose'
import { IconBrandGithub } from '@tabler/icons'
import { IconPencil } from '@tabler/icons'
import { IconNotebook } from '@tabler/icons'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import NewNote from './targets/NewNote'
import NewBlogpost from './targets/NewBlogpost'
import NewProject from './targets/NewProject'
const targetArr = [
    {
        bg: theme.colors.primary[3], 
        title: 'Blog Post',
        linkto: '/compose/new/blogpost',
        icon: <IconPencil width={128} height={128} color="black" style={{
            textAlign: "center",
        }}/>
    },
    {
        bg: theme.colors.secondary[3], 
        title: 'Projects',
        linkto: '/compose/new/project',
        icon: <IconBrandGithub width={128} height={128} color="black" style={{
            textAlign: "center",
        }}/>
    },
    {
        bg: theme.colors.important[3], 
        title: 'Notes',
        linkto: '/compose/new/note',
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
    <>
    <Group position={'apart'} spacing={12} m={30}>
        {targetArr.map((target) => {
            return (
                <Link to={target.linkto} style={{
                    textDecoration: "none",
                }}>
                <TargetsForCompose bg={target.bg} title={target.title} icon={target.icon}/>
             
        </Link>
        )})}
  </Group>
        </>
  )
}

export default ComposeTarget