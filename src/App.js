import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Media from "./pages/Media";
import Partnership from "./pages/Partnership";
import Network from "./pages/Network";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Career from "./pages/Career";
import ZkVM from "./pages/zkVM";
import Research from "./pages/Research";
import Docs from "./pages/Docs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/network" element={<Network />} />
        <Route path="/partner" element={<Partnership />} />
        <Route path="/media" element={<Media />} />
        <Route path="/career" element={<Career />} />
        <Route path="/zkVM" element={<ZkVM />} />
        <Route path="/research" element={<Research />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
