import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Home from "./components/home/Home";
import Storage from "../src/components/storage/Storage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </div>
  );
}

export default App;
