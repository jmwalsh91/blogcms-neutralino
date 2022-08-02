import { Badge, Group, Paper, Text, Title } from '@mantine/core'
import React from 'react'
import { Post } from '../../services/sb'

type Props = {
    post: Post
}

function ViewPost({post}: Props) {
  return (
    <Paper shadow='xl'>
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