import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import SinglebookComponent from "./SinglebookComponent";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class Booklist extends Component {
  state = {
    books: this.props.books,
    search: "",
  };

  render() {
    return (
      <>
        <Container>
          <Row className=" justify-content-center m-2">
            <Col xs={6} md={4} lg={3}>
              <Form>
                <div className="d-flex justify-content-center align-content-center align-items-center">
                  <Form.Group className="me-2" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      value={this.state.search}
                      onChange={(e) =>
                        this.setState({
                          search: e.target.value,
                          books: this.props.books.filter((book) =>
                            book.title
                              .toLowerCase()
                              .includes(e.target.value.toLowerCase())
                          ),
                        })
                      }
                    />
                  </Form.Group>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="g-3 justify-content-around m-2">
            {this.state.books.map((book) => (
              <SinglebookComponent key={book.asin} books={book} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Booklist;
