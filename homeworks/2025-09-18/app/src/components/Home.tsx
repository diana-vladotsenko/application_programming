import { Box, Button, Typography } from "@mui/material";

export default function Home() {
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
      </Box>
    </>
  );
}
