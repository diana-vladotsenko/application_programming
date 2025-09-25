import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateCatsProps = {
  fetchCats: () => void;
};

const DeleteCat = ({ fetchCats }: UpdateCatsProps) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const deleteCat = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.status === 204) fetchCats();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    deleteCat();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleUpdate}>
        <Stack>
          <TextField
            label="Specify cat ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            label="Cat name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" color="error" type="submit">
            Delete
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DeleteCat;
