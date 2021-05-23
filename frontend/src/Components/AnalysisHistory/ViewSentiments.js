import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constants";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const ViewSentiments = () => {
  const [tweets, setTweets] = useState([]);
  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("authToken"),
    },
  };

  const getTweets = async () => {
    try {
      const res = await axios.get(API + "/api/user/allAnalysis", config);
      if (res.data.length > 0) {
        setTweets(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTweetByID = async (id) => {
    try {
      const res = await axios.get(API + "/api/user/tweet/" + id, config);
      localStorage.setItem("tweets", JSON.stringify(res.data.tweet.tweet));

      localStorage.setItem("positive", res.data.noOfPositiveSentiments);
      localStorage.setItem("neutral", res.data.noOfNeutralSentiments);
      localStorage.setItem("negative", res.data.noOfNegativeSentiments);
      localStorage.setItem("topicName", res.data.tweet.keyWords);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteSentiments = async (id) => {
    try {
      const res = await axios.delete(
        API + "/api/user/tweet/delete/" + id,
        config
      );
      alert(res.data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTweets();
  });
  return (
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Twitter Sentimental Analysis</h4>
                <p class="card-description">Analysed Tweets</p>
                <div class="row">
                  <div class="col-12">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Analysis Date</th>
                            <th>Tweet Title</th>
                            <th>No. of Tweets</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!Array.isArray(tweets) ? (
                            <p>No Analysis Created Yet</p>
                          ) : (
                            tweets.map((tweet, i) => {
                              return (
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>2012/08/03</td>
                                  <td>{tweet.keyWords}</td>
                                  <td>{tweet.tweet.length}</td>
                                  <td>
                                    <a
                                      onClick={async () => {
                                        await getTweetByID(tweet._id);
                                        window.location.href = "/Tweets";
                                      }}
                                    >
                                      <button class="btn btn-outline-primary">
                                        Tweets
                                      </button>
                                    </a>{" "}
                                    <a
                                      onClick={async () => {
                                        await getTweetByID(tweet._id);
                                        window.location.href = "/Graphs";
                                      }}
                                    >
                                      <button class="btn btn-outline-primary">
                                        Graphs
                                      </button>
                                    </a>{" "}
                                    <button
                                      onClick={() => {
                                        deleteSentiments(tweet._id);
                                      }}
                                      class="btn btn-outline-primary"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )}
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

export default ViewSentiments;
