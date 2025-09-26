import { AppBar, Container, Toolbar, Box, Button } from "@mui/material";
import { Link, Outlet, Route, Routes } from "react-router";
import "./App.css";
import Admin from "./components/Admin";
import List from "./components/List";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box>
              <Button sx={{ background: "white", marginRight: "10px" }}>
                <Link to="/">Home</Link>
              </Button>
              <Button sx={{ background: "white" }}>
                <Link to="/admin">Admin Panel</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<List />} />
        <Route path="/*" element={"404_NOT_FOUND"} />
      </Routes>
    </>
  );
}

export default App;
