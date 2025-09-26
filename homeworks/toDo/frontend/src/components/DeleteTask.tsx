import { Box, Button } from "@mui/material";
import React from "react";
import { GeneralSnackbar } from "./GeneralSnackbar";
import { useSnackbar } from "../hooks/useSnackbar";

type DeleteTaskProps = {
  id: string;
  fetchTasks: () => void;
};

const DeleteTask = ({ id, fetchTasks }: DeleteTaskProps) => {
  const { open, message, severity, showSnackbar, handleClose } = useSnackbar();

  const deleteTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        fetchTasks();
        showSnackbar("Task Deleted!", "success");
      } else {
        showSnackbar("Error deleting the task", "error");
      }
    } catch {
      showSnackbar("Something went wrong", "error");
    }
  };

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();
    deleteTask();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
      }}
    >
      <Button variant="outlined" color="error" onClick={handleDelete}>
        Remove
      </Button>

      <GeneralSnackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
    </Box>
  );
};

export default DeleteTask;
