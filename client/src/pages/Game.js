import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

class Cards extends Component {
  state = {
    cards: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Cards Should I Read?</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cards On My List</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
