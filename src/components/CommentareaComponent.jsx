import Form from "react-bootstrap/Form";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class Commentarea extends Component {
  /*   fetchCommentarea = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((arrayOfReservations) => {
        this.setState({
          reservations: arrayOfReservations,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  }; */
  render() {
    return (
      <Col xs={6} md={4} lg={3}>
        <Form className="d-flex flex-column align-content-center align-content-center">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Commenti</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" size="lg" active>
            Invia
          </Button>
        </Form>
      </Col>
    );
  }
}
export default Commentarea;
