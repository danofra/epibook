import Books from "../data/history.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
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
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  style={{ height: "350px" }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="text-center">{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Prezzo: {book.price} €</ListGroup.Item>
                  <ListGroup.Item>Categoria: {book.category}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Dettagli</Card.Link>
                  <Card.Link href="#">Preferiti</Card.Link>
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
