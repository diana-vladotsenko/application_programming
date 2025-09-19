import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router";
import Home from "./components/Home";
import Something from "./components/Something";
import Card from "./components/Card";

function App() {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "pink" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box>
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/something">Something</Link>
              </Button>
              <Button>
                <Link to="/card">Card</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/something" element={<Something />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
