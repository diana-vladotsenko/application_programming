import { Box, Button, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Typography variant="h2">Home</Typography>
      <Box>
        <Button>
          <Link to="/about">About Me</Link>
        </Button>
        <Button>
          <Link to="/dice">Dice</Link>
        </Button>
        <Button>
          <Link to="/counter">Counter</Link>
        </Button>
        <Outlet />
      </Box>
    </>
  );
}
