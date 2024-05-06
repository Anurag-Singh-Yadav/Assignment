import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div className="App py-1 font-manrope">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration-form" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
