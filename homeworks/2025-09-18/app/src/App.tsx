import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router";
import Home from "./components/Home";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";
import LocalStorage from "./components/LocalStorage";

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
                <Link to="/localstorage">Local Storage</Link>
              </Button>
              <Button>
                <Link to="/card">Card</Link>
              </Button>
              <Button>
                <Link to="/aboutme">About Me</Link>
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
        <Route path="/localstorage" element={<LocalStorage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
