const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  tweet: {
    type: [Object],
  },
  keyWords: {
    type: String,
  },
  searchedDate: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Tweet = mongoose.model("Tweets", TweetSchema);
