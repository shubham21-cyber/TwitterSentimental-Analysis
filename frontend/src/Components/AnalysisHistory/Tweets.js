import React, { useState } from "react";
import Moment from "react-moment";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Tweets = () => {
  const [tweets, setTweets] = useState(
    JSON.parse(localStorage.getItem("tweets")) || []
  );
  return (
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Tweets on {localStorage.getItem("topicName")}
                </h4>
                <div class="row">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table id="order-listing" class="table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Tweet Time</th>
                            <th>Tweets</th>
                            <th>Retweets</th>
                            {/* <th>Favourite</th> */}
                            <th>Score</th>
                            <th>Sentiment</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tweets.map((tweet, i) => {
                            return (
                              <tr>
                                <td>{i + 1}</td>
                                <td>
                                  <Moment format="DD/MM/YYYY hh:mm:ss">
                                    {tweet.tweetDate}
                                  </Moment>
                                </td>
                                <td>{tweet.text}</td>
                                <td>{tweet.retweet}</td>
                                {/* <td>{tweet.favourite}</td> */}
                                <td>{tweet.score.toFixed(2)}</td>
                                <td>
                                  {tweet.sentiments == "Neutral" ? (
                                    <label class="badge badge-info">
                                      Neutral
                                    </label>
                                  ) : tweet.sentiments == "Positive" ? (
                                    <label class="badge badge-success">
                                      Positive
                                    </label>
                                  ) : (
                                    <label class="badge badge-danger">
                                      Negaitve
                                    </label>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tweets;
