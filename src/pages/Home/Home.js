import React, { useEffect } from "react";
import "./Home.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (qId) => {
    navigate(`/quiz?qId=${qId}`);
  };

  const myFunctionA = () => {
    // your logic here
    navigate("/quiz?qId=1");
    // console.log("pressed Enter ✅");
  };
  const myFunctionB = () => {
    // your logic here
    navigate("/quiz?qId=2");
    // console.log("pressed Enter ✅");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "1") {
        event.preventDefault();

        // 👇️ your logic here
        myFunctionA();
      }

      if (event.key === "2") {
        event.preventDefault();

        // 👇️ your logic here
        myFunctionB();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div
      className="vh_100 flex align_center content_cente"
      style={{ position: "relative" }}
    >
      <Container>
        <Row className="align_center content_cente">
          <Col md={6}>
            <img src={images.nanotekLogo} alt="" />
          </Col>
        </Row>
        <Row className="align_center content_cente" hidden>
          <Col md={4}>
            <Button variant="primary" size="lg" block className="p-4">
              <h4
                style={{
                  margin: 0,
                  fontSize: "2em",
                }}
                onClick={() => handleButtonClick(1)}
              >
                A
              </h4>
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" size="lg" block className="p-4">
              <h4
                style={{
                  margin: 0,
                  fontSize: "2em",
                }}
                onClick={() => handleButtonClick(2)}
              >
                B
              </h4>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
