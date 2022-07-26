import React from 'react'

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
type Props = {}

function PostCard({}: Props) {
  return (
<Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Blog Post</Text>
        {/* TODO: placeholder and badge component */}
        <Badge color="pink" variant="light">
          New!
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro perspiciatis pariatur, fuga hic ut magni fugit nostrum dolores repellendus quod nihil corporis aliquid! Velit delectus deserunt id placeat error dolorem!
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Action!
      </Button>
    </Card>
  );
}

export default PostCard


    