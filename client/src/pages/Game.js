import React, { Component } from "react";
import Main from "../components/Main";
import API from "../utils/API";
import Card from "../components/Card";

import Nav from "../components/Nav";
import Header from "../components/Header";

let highscore = 0;

class Cards extends Component {
  state = {
    cards: [],
    score: 0,
    highscore: highscore,
    status: "Click an image to begin!"
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res => this.setState({ cards: res.data }))
      .catch(err => console.log(err));

    // console.log(state.cards);
  };

  //shuffle the fruit cards in the browser when clicked
  imageClick = id => {
    let clickedIds = this.state.cards;
    let Index = clickedIds.indexOf(id);

    if (id.clicked) {
      this.setState({
        highscore: highscore,
        score: 0,
        status: "You guessed incorrectly!"
      });

      this.loadCards();
    } else {
      clickedIds[Index].clicked = true;
      highscore++;

      this.setState({
        highscore: highscore,
        score: this.state.score + 1,
        status: "You guessed correctly!"
      });

      for (let i = clickedIds.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [clickedIds[i], clickedIds[j]] = [clickedIds[j], clickedIds[i]];
      }
    }
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <div>
        <Nav
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.highscore}
        />
        <Header />
        <Main>
          {this.state.cards.map(card => (
            <Card
              onClick={() => this.imageClick(card)}
              key={card._id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default Cards;
