import React, { useState } from "react";
import "./FindPwPage.css";

const FindPasswordPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이곳에서 비밀번호 찾기 처리 로직을 추가해주세요
    console.log("이름:", name, "아이:", id);
  };

  return (
    <div className="find-password-container">
      <h1>비밀번호 찾기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button type="submit">완료</button>
      </form>
    </div>
  );
};

export default FindPasswordPage;
