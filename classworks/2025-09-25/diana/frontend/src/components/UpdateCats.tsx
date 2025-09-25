import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type UpdateCatsProps = {
  fetchCats: () => void;
};

const UpdateCats = ({ fetchCats }: UpdateCatsProps) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const updateCats = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setId("");
        setName("");
        fetchCats();
        console.log("Success", response);
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    updateCats();
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
            label="Update the cat name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Update
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateCats;
