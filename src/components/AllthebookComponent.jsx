import Books from "../data/history.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";

class Allthebook extends Component {
  render() {
    return (
      <Container>
        <Row className="g-3 justify-content-center m-2">
          <h1 id="allbook" className="text-center">
            All the books
          </h1>
          {Books.map((book) => (
            <Col xs={6} md={4} lg={3} key={book.asin}>
              <Card className="h-100">
                <Card.Img
                  style={{ height: "350px" }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center flex-grow-1 ">
                    {book.title}
                  </Card.Title>
                  <hr />
                  <ListGroup.Item>Prezzo: {book.price} €</ListGroup.Item>
                  <hr />
                  <ListGroup.Item>Categoria: {book.category}</ListGroup.Item>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <Button
                      className="text-center"
                      style={{ height: "40px" }}
                      variant="success"
                    >
                      <i class="bi bi-card-text"></i>
                    </Button>
                    <Button
                      className="text-center"
                      style={{ height: "40px" }}
                      variant="warning"
                    >
                      <i class="bi bi-star"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Allthebook;
