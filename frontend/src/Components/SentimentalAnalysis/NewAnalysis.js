import axios from "axios";
import React, { useState } from "react";
import { API } from "../Constants";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const NewAnalysis = () => {
  const [sentiments, setSentiments] = useState("");
  const [noOfTweets, setNoOfTweets] = useState(1);
  const [date, setDate] = useState("");

  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("authToken"),
    },
  };
  const getSentiments = async (formData) => {
    try {
      const res = await axios.post(
        API + "/api/user/sentiments",
        formData,
        config
      );
      window.location.href = "/Sentiments";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Start a New Analysis</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputUsername1">Twitter Topic</label>
                        <input
                          type="text"
                          class="form-control"
                          value={sentiments}
                          onChange={(e) => setSentiments(e.target.value)}
                          id="exampleInputUsername1"
                          placeholder="Twitter topic"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Number of Tweets</label>
                        <input
                          type="number"
                          value={noOfTweets}
                          min={1}
                          max={100}
                          onChange={(e) => {
                            setNoOfTweets(e.target.value);
                          }}
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="No. of Tweets"
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleInputConfirmPassword1">Date</label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            alert(e.target.value);
                          }}
                          class="form-control"
                          id="exampleInputConfirmPassword1"
                          placeholder="Date"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          getSentiments({ sentiments, noOfTweets, date });
                        }}
                        class="btn btn-primary mr-2"
                      >
                        Submit
                      </button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
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

export default NewAnalysis;
