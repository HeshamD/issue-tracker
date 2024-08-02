"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="pl-5 max-w-xl space-y-4">
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
