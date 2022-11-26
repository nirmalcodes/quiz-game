import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

// import { CommonButton } from "./components";
import { Home, Quiz } from "./pages";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "./constants";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(43, 19, 93, 0.75), rgba(43, 43, 43, 0.75)), url(${images.back01}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
