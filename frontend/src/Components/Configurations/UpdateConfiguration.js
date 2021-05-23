import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const UpdateConfiguration = () => {
  return (
    <>
      <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Update Configuration</h4>
                      <div class="template-demo">
                        <form id="editable-form" class="editable-form">
                          <div class="form-group row">
                            <label class="col-6 col-lg-4 col-form-label">
                              Consumer Key
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                value="ChOVckIoiSDAegrpxUqAnsvYz"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-6 col-lg-4 col-form-label">
                              Consumer Secret
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                value="KFpCu7ozK6wLkry0NCoQbn5bIBydriwrvLw71f9hHAKPWJQnAy"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-6 col-lg-4 col-form-label">
                              Consumer Access Token
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                value="1361310618863636487-BpimTTfY3EF2EtAJujtcpSn4pUX1mT"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-6 col-lg-4 col-form-label">
                              Consumer Token Secret
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                value="uyxjvXcAK3kZoqFp3cULewi5AhC8UjcWjKktJLjGFES6G"
                                disabled
                              />
                            </div>
                          </div>

                          <button type="submit" class="btn btn-primary mr-2">
                            Submit
                          </button>
                          <button class="btn btn-light">Cancel</button>
                        </form>
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
    </>
  );
};

export default UpdateConfiguration;
