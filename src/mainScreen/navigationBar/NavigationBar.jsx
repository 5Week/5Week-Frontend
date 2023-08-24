// NavigationBar.jsx 파일 수정
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = ({ isLoggedIn, userId, onLogout }) => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">
        꿈나눔
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/mypage" className="mypage-button">
            마이페이지
          </Link>
          <button onClick={onLogout} className="logout-button">
            로그아웃
          </button>
        </>
      ) : (
        <Link to="/login" className="login-button">
          로그인
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
