import { Box, Typography, Button } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorage() {
  const [count, setCount] = useLocalStorage<number>("count", 0);

  return (
    <>
      <Box>
        <Typography variant="h4">Try Local Storage</Typography>
        <Typography variant="h5"> Value: {count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          Clear storage
        </Button>
      </Box>
    </>
  );
}
