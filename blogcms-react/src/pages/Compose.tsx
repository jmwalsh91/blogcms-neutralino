import { Button, Container, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import React, { useState } from "react";
import { sb } from "../services/sb";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function Compose() {
  const [value, onChange] = useState<string>(initialValue);
  const [title, setTitle] = useState<string>("Title");

  function handleSubmitPost() {
    sb.createNewPost(title, value);
  }

  return (
    <Container>
      <TextInput
        placeholder="Title"
        label="Post Title"
        onChange={(e) => setTitle(e.currentTarget.value)}
        required
      />
      <RichTextEditor value={value} onChange={onChange} />
      <Button onClick={() => handleSubmitPost()}></Button>
    </Container>
  );
}

export default Compose;
