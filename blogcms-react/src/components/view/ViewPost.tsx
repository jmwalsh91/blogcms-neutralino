import { Badge, CloseButton, Group, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import { Post } from '../../services/sb'

type Props = {
    post: Post,
    setView: React.SetStateAction<number>
}
//FIXME: FIX
function ViewPost({post, setView}: Props) {
  return (
    <Paper shadow='xl'>
        <CloseButton onClick={setView(0)}/>
        <Title>{post.post_title}</Title>
        
        <Group position="right" mt="md" mb="xs">
        {/* TODO: placeholder and badge component */}
        {
      post.tags? post.tags.map((tag)=> <Badge>{tag}</Badge>)
    : null}
      </Group> 
      <Text>{post.post_text}</Text>
        
    </Paper>
  )
}

export default ViewPost