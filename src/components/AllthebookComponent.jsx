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
        <Row className="justify-content-center m-2">
          <h1 className="text-center">All the books</h1>
          {Books.map((book) => (
            <Col xs={6} md={4} lg={3} xl={2} key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-center">{book.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Prezzo: {book.price}</ListGroup.Item>
                  <ListGroup.Item>Categoria: {book.category}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Visualizza dettagli</Card.Link>
                  <Card.Link href="#">Aggiungi alla lista preferiti</Card.Link>
                </Card.Body>
              </Card>{" "}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Allthebook;
