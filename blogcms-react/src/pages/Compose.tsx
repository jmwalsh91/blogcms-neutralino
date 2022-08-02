import {
  Button,
  Container,
  Modal,
  MultiSelect,
  TextInput,
  Text,
  Grid,
  Textarea,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import RichTextEditor from "@mantine/rte";
import { sanitize } from "dompurify";
import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { FileUpload } from "../components/FileUpload";
import PreviewModalContent from "../components/targets/PreviewModalContent";
import { sb, UploadImageResponse } from "../services/sb";
import { sanitizeRichText } from "../utils/rte/handleText";

export interface FormValues {
  title: string;
  postText: string;
  cardText: string;
  cardImage: string;
  tags: string[];
}

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const tags = [
  { value: "tutorial", label: "tutorial" },
  { value: "React", label: "React" },
  { value: "Typescript", label: "Typescript" },
  { value: "Storybook", label: "Storybook" },
  { value: "Remix", label: "Remix" },
  { value: "Vercel", label: "Vercel" },
  { value: "React Query", label: "React Query" },
  { value: "SWR", label: "SWR" },
  { value: "MUI", label: "MUI" },
  { value: "Chrome MV3", label: "Chrome MV3" },
];

function Compose() {
  const [value, onChange] = useState<string>(initialValue);
  const [title, setTitle] = useState<string>("Title");
  const [open, setOpen] = useState<boolean>(false);
  const [preview, setPreview] = useState({
    title: "title",
    postText: initialValue,
  });
  const newLocal = '<pre spellcheck="false" class="ql-syntax">';
  const newLocal2 = "</pre>";
  const form = useForm<FormValues>({
    initialValues: {
      title: "title",
      postText: "example",
      cardText: "click to see more",
      cardImage:
        "https://images.unsplash.com/photo-1621237023000-6a628c285938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["untagged"],
    },
  });
  async function prismify(content: string) {
    content.replace(newLocal, "<Prism language='tsx'>");
    content.replace(newLocal2, "</Prism>");
    console.log(content);
    return content;
  }

  async function handleDrop (files: File[]){
    const imgUrl = await sb.files.upload(files[0], title)
    .then(imgUrl => form.setFieldValue('cardImage', imgUrl as string))
    .catch((error) => console.log(error))
    
    console.log(imgUrl)
  }

  function handleSubmitPost() {
    sb.createNewPost(title, value);
  }

  async function handlePreview() {
    console.log(form.values);
    setOpen(true);
  }

  return (
    <Container>
      <TextInput
        placeholder="Title"
        label="title"
        required
        onChange={(e) => form.setFieldValue(title, e.currentTarget.value)}
        {...form.getInputProps("title")}
      />
      <Grid>
        <Grid.Col span={6}>
          <FileUpload onDrop={(files) => handleDrop(files)}/>
        </Grid.Col>
        <Grid.Col span={6}>
          <Textarea
            size="xl"
            label="Card Description"
            minRows={8}
            {...form.getInputProps("cardText")}
          />
        </Grid.Col>
      </Grid>
      <RichTextEditor
        value={value}
        sx={{
          minHeight: "50vh",
          maxHeight: "85vh",
        }}
        onChange={onChange}
        {...form.getInputProps('postText')}
      />
      <MultiSelect
        data={tags}
        label="tags"
        placeholder="Add tags to blogpost"
        {...form.getInputProps("tags")}
      />
      <Button onClick={() => handlePreview()}>Preview</Button>
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Preview"
        size="80%"
      >
        <PreviewModalContent form={form} />
        <Button>Submit</Button>
      </Modal>
    </Container>
  );    
}

export default Compose;
