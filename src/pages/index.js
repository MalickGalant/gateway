import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>
          This is an example site integrating Netlify’s form handling with Gatway
        </p>

        <ul>
          <li><Link to="/contact/">Contact</Link></li>
          <li><Link to="/file-upload/">Sign Up</Link></li>
          <li><Link to="/recaptcha/">reCAPTCHA</Link></li>
        </ul>
      </div>
    );
  }
}
