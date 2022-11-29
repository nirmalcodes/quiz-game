import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { images } from "./constants";
import Home from "./pages/Home/Home";
import GettingStart from "./pages/GettingStart/GettingStart";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(43, 19, 93, 0.75), rgba(43, 43, 43, 0.75)), url(${images.back01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routes>
        <Route path="/" element={<GettingStart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
