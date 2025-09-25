import { Route, Routes } from "react-router";
import AboutMe from "./components/AboutMe";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import { HashRouter } from "react-router";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dice" element={<Dice />} />
        </Routes>
      </HashRouter>
    </>
  );
}
