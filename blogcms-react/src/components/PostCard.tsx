import React from 'react'

import { Card, Image, Text, Badge, Button, Group, Title, Chip, Modal } from '@mantine/core';
import { IconTags } from '@tabler/icons';
import { Link } from 'react-router-dom';
import ViewPost from './view/ViewPost';
type Props = {
    title: string,
    description: string
    imageUrl?: string
    isPreview: boolean
    tags?: string[]
    id?: string | number
}
//TODO: ARIA AND ALT
function PostCard({title, description, imageUrl, isPreview, tags, id}: Props) {
  return (
<Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        
        <Image
          src={
            imageUrl? imageUrl : "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          }
          height={160}
          fit={'cover'}
          alt="descriptive alt text...todo"
        />
      </Card.Section>

        <Text weight={500}> <Title>{title}</Title></Text>
      <Group position="right" mt="md" mb="xs">
        {/* TODO: placeholder and badge component */}
        {
      tags? tags.map((tag)=> <Badge>{tag}</Badge>)
    : null}
      </Group>  
    

      <Text size="sm" color="dimmed">
      {(description.substring(0, 255)) + '...'}
      </Text>

    
      <Button 
      variant="light" color="blue" fullWidth mt="md" radius="md" disabled={isPreview? true : false}>
        View
      </Button>
    </Card>
  );
}

export default PostCard


    