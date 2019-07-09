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
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Card
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cards On My List</h1>
            </Jumbotron>
            {this.state.cards.length ? (
              <List>
                {this.state.cards.map(card => (
                  <ListItem key={card._id}>
                    <Link to={"/cards/" + card._id}>
                      <strong>
                        {card.title} by {card.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCard(card._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
