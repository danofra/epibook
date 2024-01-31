
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Component } from "react";

class Search extends Component {
  state = {
    books: [],
    search: "",
  };
  render() {
    return (
      <Container>
        <Row className=" justify-content-center m-2">
          <Col xs={6} md={4} lg={3}>
            <Form>
              <div className="d-flex justify-content-center align-content-center align-items-center">
                <Form.Group className="me-2" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    onChange={(e) =>
                      this.setState({
                        search: e.target.value,
                        books: this.props.books.filter((book) =>
                          book.title
                            .toLowerCase()
                            .includes(this.state.search.toLowerCase())
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
    );
  }
}

export default Search;
