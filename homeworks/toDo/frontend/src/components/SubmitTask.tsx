import { Box, Button, Alert, Stack, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useSnackbar } from "./useSnackbar"; // adjust path

type SubmitTasksProps = {
  fetchTasks: () => void;
};

const SubmitTask = ({ fetchTasks }: SubmitTasksProps) => {
  const [newTask, setNewTask] = useState("");
  const { open, message, severity, showSnackbar, handleClose } = useSnackbar();

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });

      if (response.ok) {
        showSnackbar("Task added!", "success");
      } else {
        showSnackbar("Error adding task", "error");
      }
    } catch {
      showSnackbar("Something went wrong", "error");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    submitCat();
    setTimeout(fetchTasks, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Add task.."
            onChange={(event) => setNewTask(event.target.value)}
          />
          <Button disabled={!newTask.trim()} variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} onClose={handleClose} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SubmitTask;
