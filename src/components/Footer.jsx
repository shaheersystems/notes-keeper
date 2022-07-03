import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>
        Made with <span style={{ color: "red" }}>❤</span> by Shaheer
      </p>
      <div className="social">
        <a href="https://github.com/shaheersystems">
          <i className="fa fa-github-square"></i>
        </a>
        <a href="https://twitter.com/shaheerdevr">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-shaheer-a28994242/">
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
}
export default Footer;
