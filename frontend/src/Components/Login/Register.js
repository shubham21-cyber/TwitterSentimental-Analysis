import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constants";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (formData) => {
    try {
      const res = await axios.post(API + "/api/user", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      window.location.href = "/Index";
    }
  });

  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div class="row flex-grow">
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div class="auth-form-transparent text-left p-3">
                <div class="brand-logo">
                  {/* <img src="../../../../images/logo.svg" alt="logo" /> */}
                  <h3 style={{ color: "purple" }}>
                    Twitter Sentimental Analysis
                  </h3>
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">
                  Join us today! It takes only few steps
                </h6>
                <form class="pt-3">
                  <div class="form-group">
                    <label>Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="form-control form-control-lg border-left-0"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-email-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="form-control form-control-lg border-left-0"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control form-control-lg border-left-0"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  {/* <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />I
                        agree to all Terms & Conditions
                      </label>
                    </div>
                  </div> */}
                  <div class="mt-3">
                    <a
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {
                        registerUser({ name, email, password });
                      }}
                    >
                      SIGN UP
                    </a>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <a href="/" class="text-primary">
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 register-half-bg d-flex flex-row">
              <p class="text-white font-weight-medium text-center flex-grow align-self-end">
                Copyright &copy; 2021 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
