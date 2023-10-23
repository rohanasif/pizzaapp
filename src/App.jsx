import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Base from "./routes/Base";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
      </Routes>
    </>
  );
}

export default App;
