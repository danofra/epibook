import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";

class Singlebook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col id="col"
        xs={6}
        md={4}
        lg={3}
        onClick={() => {
          this.setState({
            selected: this.state.selected ? false : true,
          });
        }}
      >
        <Card className={this.state.selected ? "h-100 select" : "h-100"}>
          <Card.Img
            style={{ height: "350px" }}
            variant="top"
            src={this.props.books.img}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center flex-grow-1">
              {this.props.books.title}
            </Card.Title>
            <hr />
            <ListGroup.Item>Prezzo: {this.props.books.price} €</ListGroup.Item>
            <hr />
            <ListGroup.Item>
              Categoria: {this.props.books.category}
            </ListGroup.Item>
            <hr />
            <div className="d-flex justify-content-around">
              <Button
                className="text-center"
                style={{ height: "40px" }}
                variant="success"
              >
                <i className="bi bi-card-text"></i>
              </Button>
              <Button
                className="text-center"
                style={{ height: "40px" }}
                variant="warning"
              >
                <i className="bi bi-star"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Singlebook;
