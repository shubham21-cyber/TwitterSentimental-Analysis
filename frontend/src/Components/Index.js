import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import politicsImage from "./Images/politics.png";
import MNCImage from "./Images/enterprise.png";
import PublicImage from "./Images/public.png";
import ReporterImage from "./Images/reporter.png";
import SalesImage from "./Images/sales.png";

const Index = () => {
  return (
    <>
      <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                {/* <div class="col-lg-8 grid-margin d-flex flex-column">
                  <div class="row">
                    <div class="col-md-3 grid-margin stretch-card">
                      <div class="card">
                        <div class="card-body text-center">
                          <div class="text-primary mb-4">
                            <i class="mdi mdi-account-multiple mdi-36px"></i>
                            <p class="font-weight-medium mt-2">Customers</p>
                          </div>
                          <h1 class="font-weight-light">45679</h1>
                          <p class="text-muted mb-0">Increase by 20%</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 grid-margin stretch-card">
                      <div class="card">
                        <div class="card-body text-center">
                          <div class="text-danger mb-4">
                            <i class="mdi mdi-chart-pie mdi-36px"></i>
                            <p class="font-weight-medium mt-2">Orders</p>
                          </div>
                          <h1 class="font-weight-light">80927</h1>
                          <p class="text-muted mb-0">Increase by 60%</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 grid-margin stretch-card">
                      <div class="card">
                        <div class="card-body text-center">
                          <div class="text-info mb-4">
                            <i class="mdi mdi-car mdi-36px"></i>
                            <p class="font-weight-medium mt-2">Delivery</p>
                          </div>
                          <h1 class="font-weight-light">22339</h1>
                          <p class="text-muted mb-0">Decrease by 2%</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 grid-margin stretch-card">
                      <div class="card">
                        <div class="card-body text-center">
                          <div class="text-success mb-4">
                            <i class="mdi mdi-verified mdi-36px"></i>
                            <p class="font-weight-medium mt-2">Users</p>
                          </div>
                          <h1 class="font-weight-light">+1900</h1>
                          <p class="text-muted mb-0">Steady growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row flex-grow-1">
                    <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div class="card">
                        <div class="card-body">
                          <h4 class="card-title">Product categories</h4>
                          <canvas id="sales-status-chart"></canvas>
                          <div
                            id="sales-status-chart-legend"
                            class="mt-3 chartjs-legend"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 stretch-card">
                      <div class="card">
                        <div class="card-body d-flex flex-column justify-content-between">
                          <div class="d-flex justify-content-between align-items-start">
                            <h4 class="card-title">Product visits</h4>
                            <div class="dropdown">
                              <button
                                class="btn btn-sm btn-outline-secondary btn-rounded dropdown-toggle text-black"
                                type="button"
                                id="dropdownMenuButton2"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                This week
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton2"
                              >
                                <a class="dropdown-item" href="#">
                                  This day
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                  This month
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                  This week
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                  This year
                                </a>
                              </div>
                            </div>
                          </div>
                          <canvas id="sales-chart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="col-lg-4 grid-margin stretch-card">
                  <div class="card d-flex flex-column justify-content-between">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-start">
                        <h4 class="card-title">
                          <b>Twitter Sentimental Analysis</b>
                        </h4>
                        <div class="dropdown mb-4">
                          {/* <button
                            class="btn btn-sm btn-outline-secondary btn-rounded dropdown-toggle text-black"
                            type="button"
                            id="dropdownMenuButton1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            This week
                          </button> */}
                          {/* <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <a class="dropdown-item" href="#">
                              This day
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              This month
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              This week
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                              This year
                            </a>
                          </div> */}
                        </div>
                      </div>
                      {/* <h1 class="font-weight-normal">36568</h1> */}
                      <h4 class="font-weight-light mb-0">Analyse Sentiments</h4>
                      <div class="d-md-flex justify-content-start mt-4">
                        <div class="mb-3 mb-lg-0">
                          <h4
                            class="font-weight-light text-primary"
                            style={{ textAlign: "center" }}
                          >
                            🡹
                          </h4>
                          <p class="text-primary mb-0">Positive</p>
                        </div>
                        <div class="mb-3 mb-lg-0 ml-md-4">
                          <h4
                            class="font-weight-light text-danger"
                            style={{ textAlign: "center" }}
                          >
                            🡻
                          </h4>
                          <p class="text-danger mb-0">Negative</p>
                        </div>
                        <div class="ml-md-4">
                          <h4
                            class="font-weight-light text-info"
                            style={{ textAlign: "center" }}
                          >
                            <b>⬌</b>
                          </h4>
                          <p class="text-info mb-0">Neutral</p>
                        </div>
                      </div>
                      <p class="mt-3 mb-0 text-muted">
                        Twitter sentiment analysis provides many exciting
                        opportunities. Being able to analyze tweets in
                        real-time, and determine the sentiment that underlies
                        each message, adds a new dimension to social media
                        monitoring.
                      </p>
                    </div>
                    <div class="card-body px-0 pb-0 d-flex flex-column justify-content-between">
                      <canvas id="statistics-chart" class="mt-auto"></canvas>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Generally Used by</h4>
                      <div class="d-flex border-bottom pb-3">
                        <img
                          src={politicsImage}
                          alt="profile"
                          class="img-xs rounded-circle"
                        />
                        <div class="flex-grow-1 ml-3">
                          <p>Political Parties</p>
                          <div class="d-flex text-muted">
                            <p class="mb-0">for election purpose</p>
                            {/* <p class="ml-auto mb-0">12:45</p> */}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex border-bottom py-3">
                        <img
                          src={MNCImage}
                          alt="profile"
                          class="img-xs rounded-circle"
                        />
                        <div class="flex-grow-1 ml-3">
                          <p>Multinational Companies</p>
                          <div class="d-flex text-muted">
                            <p class="mb-0">before launching a product</p>
                            {/* <p class="ml-auto mb-0">10:33</p> */}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex border-bottom py-3">
                        <img
                          src={PublicImage}
                          alt="profile"
                          class="img-xs rounded-circle"
                        />
                        <div class="flex-grow-1 ml-3">
                          <p>Public Actions</p>
                          <div class="d-flex text-muted">
                            <p class="mb-0">
                              for monitor and analyse social phenomena
                            </p>
                            {/* <p class="ml-auto mb-0">11:10</p> */}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex border-bottom py-3">
                        <img
                          src={SalesImage}
                          alt="profile"
                          class="img-xs rounded-circle"
                        />
                        <div class="flex-grow-1 ml-3">
                          <p>Business</p>
                          <div class="d-flex text-muted">
                            <p class="mb-0">To Increasing Sales Revenue</p>
                            {/* <p class="ml-auto mb-0">11:10</p> */}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex pt-3">
                        <img
                          src={ReporterImage}
                          alt="profile"
                          class="img-xs rounded-circle"
                        />
                        <div class="flex-grow-1 ml-3">
                          <p>Journalists</p>
                          <div class="d-flex text-muted">
                            <p class="mb-0">To Improve Media Perceptions</p>
                            {/* <p class="ml-auto mb-0">13:20</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Calendar</h4>
                      <div
                        id="inline-datepicker-example"
                        class="datepicker"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-lg-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <h4 class="card-title">Statistics</h4>
                      <div>
                        <h1 class="font-weight-normal">87659</h1>
                        <h4 class="font-weight-light mb-0">
                          Last month Tweets
                        </h4>
                      </div>
                      <canvas id="orders-chart"></canvas>
                      <div
                        id="orders-chart-legend"
                        class="chartjs-legend orders-legend"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Best sellers</h4>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Sales</th>
                              <th>Stock</th>
                              <th>Category</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Moon Fever</td>
                              <td>42070</td>
                              <td>801</td>
                              <td>Cynthialand</td>
                            </tr>
                            <tr>
                              <td>Dude You Re Getting A Telescope</td>
                              <td>38667</td>
                              <td>882</td>
                              <td>West Janie</td>
                            </tr>
                            <tr>
                              <td>Telescopes 101</td>
                              <td>12467</td>
                              <td>181</td>
                              <td>Harrisport</td>
                            </tr>
                            <tr>
                              <td>Asteroids</td>
                              <td>8118</td>
                              <td>336</td>
                              <td>West Furmanstad</td>
                            </tr>
                            <tr>
                              <td>The Glossary Of Telescopes</td>
                              <td>21136</td>
                              <td>979</td>
                              <td>Lake Berenice</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div class="row">
                <div class="col-lg-4 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Activity timeline</h4>
                      <ul class="bullet-line-list">
                        <li>
                          <p class="text-muted mb-2">24 May 2018</p>
                          <p>Vacation Home Rental Success</p>
                        </li>
                        <li>
                          <p class="text-muted mb-2">25 May 2018</p>
                          <p>Online Games How To Play To Win</p>
                        </li>
                        <li>
                          <p class="text-muted mb-2">26 May 2018</p>
                          <p>Big Savings On Gas</p>
                        </li>
                        <li>
                          <p class="text-muted mb-2">27 May 2018</p>
                          <p class="mb-0">A Time Travel Postcard</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
             */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
