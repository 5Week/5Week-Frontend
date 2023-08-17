import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">꿈나눔testtest</Link>
      <Link to="/login" className="login-button">로그인</Link>
    </div>
  );
};

export default NavigationBar;