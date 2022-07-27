import { Grid } from '@mantine/core'
import React, { Suspense, useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { sb } from '../services/sb'
import type {Post, PostResolved, PostRejected} from '../services/sb'


function View() {
    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        console.log('hello')
       const retrievedPosts = sb.getAllPosts()
       .then((retrievedPosts) => {
        console.log(retrievedPosts)
        setPosts(retrievedPosts)
       })
       .catch((error) => (console.log(error)))
    }, [])

   
 

  return (
    <Grid>

{posts && posts.map((post) => {
        return (
            <Grid.Col span={4}>

            <PostCard 
                title={post.post_title}
                description={post.post_text}
                />
                </Grid.Col>
        )
    })}

  </Grid>
  )
}

export default View