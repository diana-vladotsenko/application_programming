import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { GeneralSnackbar } from "./GeneralSnackbar";
import { useSnackbar } from "../hooks/useSnackbar";

type UpdateTasksProps = {
  fetchTasks: () => void;
};

const UpdateTask = ({ fetchTasks }: UpdateTasksProps) => {
  const [id, setId] = useState("");
  const [content, setContent] = useState("");
  const { open, message, severity, showSnackbar, handleClose } = useSnackbar();

  const updateTasks = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setId("");
        setContent("");
        fetchTasks();
        showSnackbar("Task updated!", "success");
      } else {
        showSnackbar("Error updating the task", "error");
      }
    } catch {
      showSnackbar("Something went wrong", "error");
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    updateTasks();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleUpdate}>
        <Stack>
          <TextField
            label="Specify id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            label="Update the task.."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            disabled={!content.trim() || !id.trim()}
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </Stack>
      </form>

      <GeneralSnackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
    </Box>
  );
};

export default UpdateTask;
