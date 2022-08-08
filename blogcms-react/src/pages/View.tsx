import { Grid, Modal, ScrollArea } from "@mantine/core";
import React, { Suspense, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { sb } from "../services/sb";
import type { Post, PostResolved, PostRejected } from "../services/sb";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

function View() {
  const [viewId, setViewId] = useState<number>(0);
  const { data, status } = useQuery(["prefetchPosts"], sb.getAllPosts);

  function handleView(postId: number){
    setViewId(postId)
    //TODO: VIEW BLOGPOST
    postId === 0 ? null : null
  }
  return (
    <ScrollArea style={{ height: "80vh" }}>
      <Grid>
        {data &&
          data.map((post) => {
            return (
              <Grid.Col span={4}>
                <PostCard
                  title={post.post_title}
                  description={post.post_text}
                  isPreview={false}
                  imageUrl={post.card_image}
                  tags={post.tags}
                  id={post.id}
                />
              </Grid.Col>
            );
          })}
      </Grid>
      <Modal
        opened={viewId !== 0}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
     {/*    <ViewPost  /> */}
      </Modal>
    </ScrollArea>
  );
}

export default View;
