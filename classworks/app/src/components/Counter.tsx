import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import createHashRouter from "react-router-dom"

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increaseCounter(amount: number) {
    setCount((count) => count + amount);
  }

  function decreaseCounter(amount: number) {
    setCount((count) => count - amount);
  }

  return (
    <>
      <Typography variant="h2">Dice</Typography>
      <Box>
        Number is:
        <Typography variant="body1">{count}</Typography>
      </Box>

      <Box>
        <Box className="card">
          Increase By (+):
          <Button variant="outlined" onClick={() => increaseCounter(1)}>
            1
          </Button>
          <Button variant="outlined" onClick={() => increaseCounter(25)}>
            25
          </Button>
          <Button variant="outlined" onClick={() => increaseCounter(50)}>
            50
          </Button>
          <Button variant="outlined" onClick={() => increaseCounter(100)}>
            100
          </Button>
        </Box>
      </Box>

      <Box>
        <Box className="card">
          Decrease By (-):
          <Button variant="outlined" onClick={() => decreaseCounter(1)}>
            1
          </Button>
          <Button variant="outlined" onClick={() => decreaseCounter(25)}>
            25
          </Button>
          <Button variant="outlined" onClick={() => decreaseCounter(50)}>
            50
          </Button>
          <Button variant="outlined" onClick={() => decreaseCounter(100)}>
            100
          </Button>
        </Box>
      </Box>
    </>
  );
}
