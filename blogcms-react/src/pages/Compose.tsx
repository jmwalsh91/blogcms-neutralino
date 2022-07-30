import { Button, Container, MultiSelect, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { sb } from "../services/sb";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

const tags = [
  {value: 'tutorial' ,
    label: 'tutorial'},
    {value: 'React' ,
      label: 'React'},
      {value: 'Typescript' ,
        label: 'Typescript'},
        {value: 'Storybook',
          label: 'Storybook'},
          {value: 'Remix',
            label: 'Remix'},
            {value: 'Vercel',
              label: 'Vercel'},
              {value: 'React Query' ,
                label: 'React Query'},
                {value: 'SWR' ,
                  label: 'SWR'},
                  {value: 'MUI',
                    label: 'MUI'},
                    {value: 'Chrome MV3',
                      label: 'Chrome MV3'},
                    
                  
                
              
            
        ]
function Compose() {
  const [value, onChange] = useState<string>(initialValue);
  const [title, setTitle] = useState<string>("Title");

  function handleSubmitPost() {
    sb.createNewPost(title, value);
  }

  return (
    <Container>
      <Routes>
      </Routes>
      <TextInput
        placeholder="Title"
        label="Post Title"
        onChange={(e) => setTitle(e.currentTarget.value)}
        required
      />
      <RichTextEditor value={value} sx={{
        minHeight: "50vh",
        maxHeight: "85vh"
      }} onChange={onChange} />
          <MultiSelect
      data={tags}
      label="Tags"
      placeholder="Add tags to blogpost"
    />
      <Button onClick={() => handleSubmitPost()}></Button>
    </Container>
  );
}

export default Compose;
