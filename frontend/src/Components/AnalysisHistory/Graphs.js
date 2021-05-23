import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Graphs = () => {
  return (
    <div class="container-scroller">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <h4 class="card-title">
              Graphs & Charts on {localStorage.getItem("topicName")}
            </h4>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      Line chart on {localStorage.getItem("topicName")}
                    </h4>
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      Bar chart on {localStorage.getItem("topicName")}
                    </h4>
                    <canvas id="barChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      Doughnut chart on {localStorage.getItem("topicName")}
                    </h4>
                    <canvas id="doughnutChart"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      Pie chart on {localStorage.getItem("topicName")}
                    </h4>
                    <canvas id="pieChart"></canvas>
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

export default Graphs;
