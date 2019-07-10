const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/clickygame"
);

const cardSeed = [
  {
    title: "apple",
    picture: "./fruit/apple.gif",
    clicked: false
  },
  {
    title: "banana",
    picture: "./fruit/banana.gif",
    clicked: false
  },
  {
    title: "blackcurrant",
    picture: "./fruit/blackcurrant.gif",
    clicked: false
  },
  {
    title: "cantaloupe",
    picture: "./fruit/cantaloupe.gif",
    clicked: false
  },
  {
    title: "durian",
    picture: "./fruit/durian.gif",
    clicked: false
  },
  {
    title: "fig",
    picture: "./fruit/fig.gif",
    clicked: false
  },
  {
    title: "grapefruit",
    picture: "./fruit/grapefruit.gif",
    clicked: false
  },
  {
    title: "lemon",
    picture: "./fruit/lemon.gif",
    clicked: false
  },
  {
    title: "longan",
    picture: "./fruit/longan.gif",
    clicked: false
  },
  {
    title: "mango",
    picture: "./fruit/mango.gif",
    clicked: false
  },
  {
    title: "mangosteen",
    picture: "./fruit/mangosteen.gif",
    clicked: false
  },
  {
    title: "plum",
    picture: "./fruit/plum.gif",
    clicked: false
  }
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
