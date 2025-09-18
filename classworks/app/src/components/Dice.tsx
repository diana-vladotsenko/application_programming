import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Dice() {
  const [number, setNumber] = useState(0);
  const min = 1;
  const max = 6;

  function randomNumber() {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(random);
  }

  return (
    <>
      <Typography variant="h2">Dice</Typography>
      <Typography variant="h5">Game With Dice</Typography>
      <Button variant="outlined" onClick={() => randomNumber()}>
        Generate
      </Button>
      <Box>
        <Typography variant="body2">Your number is {number}</Typography>
      </Box>
    </>
  );
}
