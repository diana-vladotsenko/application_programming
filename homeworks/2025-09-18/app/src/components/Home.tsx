import api from "../lib/axios";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import type { Message } from "../types/Message.ts";

export default function Home() {
  const [message, setMessage] = useState<Message | null>(null);
  const [postMessage, setPostMessage] = useState<Message | null>(null);
  const [updatedMessage, setUpdatedMessage] = useState<Message | null>(null);

  function handlePost() {
    api.post<Message>("/message").then((res) => {
      setPostMessage(res.data);
    });
  }

  function handlePut() {
    api
      .put<Message>("/message/2", { message: "Updated from client" })
      .then((res) => {
        setUpdatedMessage(res.data);
      })
      .catch(console.error);
  }

  function handleDelete() {
    api
      .delete<{ success: boolean; id: string; message: string }>("/message/2")
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    api.get<Message>("/message").then((res) => {
      setMessage(res.data);
    });
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h4">Home</Typography>
        <Box sx={{ margin: "20px" }}>
          <Button color="primary" variant="contained" size="large">
            Primary Button
          </Button>
          <Button color="secondary" variant="outlined" size="large">
            Secondary Button
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Messages </Typography>
          <Typography>
            Message from Backend (GET) is: {message ? message.message : "...."}
          </Typography>
          <Typography>
            Message from Backend (POST) is:
            {postMessage ? postMessage.message : "...."}
          </Typography>
          <Typography>
            Message from Backend (PUT) is:
            {updatedMessage ? updatedMessage.message : "...."}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={handlePost}
            >
              POST message
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={handlePut}
            >
              PUT message
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={handleDelete}
            >
              Delete message
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
