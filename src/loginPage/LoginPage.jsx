import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 백엔드에 로그인 요청을 전송
    // 이 예시를 위해 더미 로그인 처리를 합니다.
    if (id && password) {
      onLogin(id); // 이 부분을 통해 로그인이 성공했다면 App.js의 상태를 업데이트합니다.
    } else {
      alert("아이디와 비밀번호를 입력하세요.");
    }
  };

  return (
    <div className="login-container">
      <h1>꿈나눔 로그인</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
      <div className="login-links">
        <Link to="/find-id">아이디 찾기</Link>
        <Link to="/find-password">비밀번호 찾기</Link>
        <Link to="/signup" className="signup-button">회원가입</Link> 
      </div>
    </div>
  );
};

export default LoginPage;
