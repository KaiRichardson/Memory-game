import React, { Component } from "react";
import Main from "../components/Main";
import API from "../utils/API";
import Card from "../components/Card";

import Nav from "../components/Nav";
import Header from "../components/Header";

class Cards extends Component {
  state = {
    cards: [],
    score: 0,
    highscore: 0,
    guess: "Click an image to begin!"
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res => this.setState({ cards: res.data }))
      .catch(err => console.log(err));
    console.log("imhere");

    // console.log(state.cards);
  };

  imageClick = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (!cards[i].clicked) {
          cards[i].count = cards[i].count + 1;

          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });

          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }

    this.state.cards.forEach(card => {
      card.count = 0;
    });

    alert(`Game Over :( \nscore: ${this.state.score}`);

    this.setState({ score: 0 });
    
    return true;
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <div>
        <Nav
          guess={this.state.guess}
          score={this.state.score}
          topScore={this.state.highscore}
        />
        <Header />
        <Main>
          {this.state.cards.map(card => (
            <Card
              imageClick={this.imageClick}
              id={card.id}
              key={card.id}
              alt={card.name}
              image={card.image}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default Cards;
