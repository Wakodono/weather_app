import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row, Card, Form, InputGroup, FormControl } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col sm={10} md={8}>
          <Card className="bg-dark text-white text-center border-0">
            <Card.Img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzODgwMTQ3Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
              alt="Card image"
            />
            <Card.ImgOverlay>
                <div>
                    <InputGroup className="mx-3 w-75 mx-auto">
                      <FormControl
                        placeholder="Enter a city here..."
                        aria-label="Search City"
                        aria-describedby="basic-addon2"
                      />
                      <Button type="submit" variant="outline-secondary" id="button-addon2">
                        <i className="fas fa-search"></i>
                      </Button>
                    </InputGroup>
                </div>
              <div className="bg-dark bg-opacity-50 py-3">
                  <Card.Title>Aberdeen</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
