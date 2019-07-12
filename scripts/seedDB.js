const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds247637.mlab.com:47637/heroku_l274z5fq",
  { useNewUrlParser: true }
);

const cardSeed = [
  {
    name: "apple",
    image: "./fruit/apple.gif",
    clicked: false
  },
  {
    name: "banana",
    image: "./fruit/banana.gif",
    clicked: false
  },
  {
    name: "blackcurrant",
    image: "./fruit/blackcurrant.gif",
    clicked: false
  },
  {
    name: "cantaloupe",
    image: "./fruit/cantaloupe.gif",
    clicked: false
  },
  {
    name: "durian",
    image: "./fruit/durian.gif",
    clicked: false
  },
  {
    name: "fig",
    image: "./fruit/fig.gif",
    clicked: false
  },
  {
    name: "grapefruit",
    image: "./fruit/grapefruit.gif",
    clicked: false
  },
  {
    name: "lemon",
    image: "./fruit/lemon.gif",
    clicked: false
  },
  {
    name: "longan",
    image: "./fruit/longan.gif",
    clicked: false
  },
  {
    name: "mango",
    image: "./fruit/mango.gif",
    clicked: false
  },
  {
    name: "mangosteen",
    image: "./fruit/mangosteen.gif",
    clicked: false
  },
  {
    name: "plum",
    image: "./fruit/plum.gif",
    clicked: false
  }
];

db.Card.deleteMany({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
