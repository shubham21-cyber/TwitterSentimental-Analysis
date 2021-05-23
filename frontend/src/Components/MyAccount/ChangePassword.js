import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const ChangePassword = () => {
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
                    <h4 class="card-title">Change Password</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputUsername1">Old Password</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername1"
                          placeholder="Old Password"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">New Password</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="New Password"
                        />
                      </div>

                      <div class="form-group">
                        <label for="exampleInputConfirmPassword1">
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputConfirmPassword1"
                          placeholder="Confirm Password"
                        />
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
