import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
        <ul class="navbar-nav mr-lg-2 d-none d-lg-flex">
          <li class="nav-item nav-toggler-item">
            <button
              class="navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </li>
        </ul>
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo" href="index.html">
            <h1>Tweezer</h1>
            {/* <img src="../../images/logo.svg" alt="logo" /> */}
          </a>
          <a class="navbar-brand brand-logo-mini" href="index.html">
            <h3>TSA</h3>
            {/* <img src="../../images/logo-mini.svg" alt="logo" /> */}
          </a>
        </div>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a
              class="nav-link "
              href="#"
              data-toggle="dropdown"
              id="profileDropdown"
            >
              <img src="../../images/faces/face123.jpg" alt="profile" />
              <span class="nav-profile-name">
                {localStorage.getItem("userName")}
              </span>
            </a>
          </li>
          {/* <li class="nav-item nav-settings d-none d-lg-flex">
            <a class="nav-link" href="#">
              <i class="mdi mdi-dots-horizontal"></i>
            </a>
          </li> */}

          <li class="nav-item nav-toggler-item-right d-lg-none">
            <button
              class="navbar-toggler align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
