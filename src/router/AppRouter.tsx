import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { Projects } from "../pages/Projects.tsx";
import { About } from "../pages/About.tsx";
import { Resume } from "../pages/Resume.tsx";

export function AppRouter(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume/>} />
    </Routes>
  );
};
