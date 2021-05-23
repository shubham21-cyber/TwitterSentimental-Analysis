import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="d-sm-flex justify-content-center justify-content-sm-between">
        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright © 2021 <a href="">Twitter Sentimental Analysis</a>. All
          rights reserved.
        </span>
        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Made By Rahul, Shubham, Pragati{" "}
          <i class="mdi mdi-heart text-danger"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
