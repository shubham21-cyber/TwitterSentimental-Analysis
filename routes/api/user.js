const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Tweet = require("../../models/Tweet");
const router = require("express").Router();
var sentimental = require("Sentimental");
var twit = require("twit");
var config = require("../../config");
require("dotenv").config();

const sentimentScore = (sentimentText) => {
  var resultss = {};
  var results = 0;
  var sentiments = "";
  var key = "tweetList";
  var tweet, retweet, favorite;
  resultss[key] = [];
  for (var i = 0; i < sentimentText.length; i++) {
    tweet = sentimentText[i]["text"]; //text of tweets
    tweet = tweet.replace("#", ""); //remove hashtag
    retweet = sentimentText[i]["retweet_count"];
    favorite = sentimentText[i]["favorite_count"];
    tweetDate = sentimentText[i]["created_at"];
    var score = sentimental.analyze(tweet)["score"];

    // Algorithm for get the sentiments
    results += score;
    if (score > 0) {
      if (retweet > 0) {
        results += Math.log(retweet) / Math.log(2);
      }
      if (favorite > 0) {
        results += Math.log(favorite) / Math.log(2);
      }
    } else if (score < 0) {
      if (retweet > 0) {
        results -= Math.log(retweet) / Math.log(2);
      }
      if (favorite > 0) {
        results -= Math.log(favorite) / Math.log(2);
      }
    } else {
      results += 0;
    }
    if (results > 0) {
      sentiments = "Positive";
    } else if (results == 0) {
      sentiments = "Neutral";
    } else {
      sentiments = "Negative";
    }

    var data = {
      text: tweet,
      score: results,
      retweet: retweet,
      favorite: favorite,
      tweetDate: tweetDate,
      sentiments: sentiments,
    };
    resultss[key].push(data);
    results = 0;
  }

  return resultss[key];
};

//@POST Route
//@DESC Signup Route
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    var user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "User with Same Email Already Exists!" });
    }
    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      {
        expiresIn: 360000000,
      },
      (err, token) => {
        if (err) throw err;
        return res.json({ msg: "User Created Successfully!", token: token });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
});

//@GET Routes
//@DESC Get all the Tweets of Logged in User
router.get("/tweets", auth, async (req, res) => {
  try {
    const tweets = await Tweet.find({ user: req.user.id });
    if (tweets.length == 0) {
      return res.json({ msg: "No Tweets Searched by the User" });
    }
    res.json(tweets);
  } catch (error) {
    console.log(error.message);
  }
});

//@GET Tweet by ID
router.get("/tweet/:id", auth, async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    var results = tweet.tweet;
    var positiveArr = results.filter((res) => {
      return res.sentiments == "Positive";
    });

    var negativeArr = results.filter((res) => {
      return res.sentiments == "Negative";
    });

    var neutralArr = results.filter((res) => {
      return res.sentiments == "Neutral";
    });
    res.json({
      tweet,
      noOfPositiveSentiments: positiveArr.length,
      noOfNeutralSentiments: neutralArr.length,
      noOfNegativeSentiments: negativeArr.length,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/sentiments", auth, async (req, res) => {
  var twitter = new twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
  });

  var query = `${req.body.sentiments} since:${req.body.date}`;
  twitter.get(
    "search/tweets",
    {
      q: `${req.body.sentiments} since:${req.body.date}`,
      count: req.body.noOfTweets,
    },
    async (err, data, response) => {
      var results = sentimentScore(data.statuses);
      var tweetFields = {
        tweet: [],
      };
      tweetFields.user = req.user.id;
      tweetFields.tweet = results;

      var positiveArr = results.filter((res) => {
        return res.sentiments == "Positive";
      });

      var negativeArr = results.filter((res) => {
        return res.sentiments == "Negative";
      });

      var neutralArr = results.filter((res) => {
        return res.sentiments == "Neutral";
      });

      tweetFields.searchedDate = req.body.date;
      tweetFields.keyWords = req.body.sentiments;
      var tweet = new Tweet(tweetFields);
      await tweet.save();
      return res.json({
        results,
        noOfPositiveSentiments: positiveArr.length,
        noOfNeutralSentiments: neutralArr.length,
        noOfNegativeSentiments: negativeArr.length,
      });
    }
  );
});

router.get("/allAnalysis", auth, async (req, res) => {
  try {
    const tweets = await Tweet.find({ user: req.user.id });
    if (tweets.length == 0) {
      return res.json({ msg: "No Analysis created!" });
    }

    res.json(tweets);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/tweet/delete/:id", auth, async (req, res) => {
  try {
    await Tweet.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
