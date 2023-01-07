import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigator = useNavigate();
  return (
    <Container className="cont-home">
      <Row className="row-home">
        <Col className="col-left-row-home">
          <h4 style={{ color: "gray" }}>MAKE YOURSELF</h4>
          <h1>A CHAMPION</h1>
          <p style={{ margin: "10px 0 20px 0", color: "gray" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>

          <Button onClick={() => navigator("/login")} style={{ width: "20%" }}>
            Login
          </Button>
        </Col>
        <Col className="col-rigth-row-home">
          <img src="https://neweraschool.co.in/wp-content/uploads/2019/10/2526035.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
