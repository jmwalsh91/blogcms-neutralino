import React from 'react'

import { Card, Image, Text, Badge, Button, Group, Title } from '@mantine/core';
type Props = {
    title: string,
    description: string
    imageUrl?: string
}

function PostCard({title, description, imageUrl}: Props) {
  return (
<Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={
            imageUrl? imageUrl : "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          }
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}> <Title>{title}</Title></Text>
        {/* TODO: placeholder and badge component */}
        <Badge color="pink" variant="light">
          New!
        </Badge>
      </Group>  

      <Text size="sm" color="dimmed">
      {(description.substring(0, 255)) + '...'}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Action!
      </Button>
    </Card>
  );
}

export default PostCard


    