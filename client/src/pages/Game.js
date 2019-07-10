import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardItem } from "../components/Card";

class Cards extends Component {
  state = {
    cards: [],
    title: "",
    picture: "",
    clicked: false
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({
          cards: res.data,
          title: "",
          picture: "",
          clicked: false
        })
      )
      .catch(err => console.log(err));
  };

  // handleCardClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Clicky Game!</h1>
              <h3>
                Click on an image to earn points, but don't click on any more
                than once!
              </h3>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron>
                {this.state.cards.map(card => (
                  <Card key={card._id}>
                    <a href={"/cards/" + card._id} />
                  </Card>
                ))}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
