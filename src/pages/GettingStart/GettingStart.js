import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";

const GettingStart = () => {
  const [modalShow, setModalShow] = useState(false);
  const [getStart, setGetStart] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};

  return (
    <>
      {getStart ? (
        <div className="vh_100 flex align_center">
          <Container className="txt_white">
            <Row className="mb-4">
              <Col>
                <h3 className="txt_center">Welcome to Quiz World!</h3>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="txt_center">
                <Button variant="primary" size="lg">
                  Get Start
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className="vh_100 flex align_center relative">
          <Container className="txt_white">
            <Row className="content_cente">
              <Col md={6}>
                <h3>Lets Start</h3>
                <div>
                  <Form.Group controlId="quizName">
                    <Form.Label>Quiz Name</Form.Label>
                    <Form.Control type="text" placeholder="History Quiz" />
                  </Form.Group>
                  <Form.Group controlId="quizCsvFile">
                    <Form.Label>Select Quiz File</Form.Label>
                    <Form.File
                      id="quizCsv"
                      label={
                        isFilePicked
                          ? selectedFile.name
                          : "Select Quiz CSV file"
                      }
                      custom
                      onChange={changeHandler}
                      accept=".csv"
                    />
                  </Form.Group>
                  <Button
                    className="mt-4"
                    block
                    variant="primary"
                    type="button"
                    onClick={handleSubmission}
                  >
                    Create Quiz
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <Modal centered size="lg" show={modalShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome</Modal.Title>
            </Modal.Header>
            <Modal.Body>To get start Entre Quiz settion Name</Modal.Body>
          </Modal>
          <div
            className="help_button"
            onClick={handleShow}
            style={{
              position: "absolute",
              right: "24px",
              bottom: "24px",
            }}
          >
            <BiHelpCircle />
          </div>
        </div>
      )}
    </>
  );
};

export default GettingStart;
