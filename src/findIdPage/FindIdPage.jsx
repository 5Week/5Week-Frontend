import React, { useState } from "react";
import "./FindIdPage.css";

const FindIdPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이곳에서 아이디 찾기 처리 로직을 추가해주세요
    console.log("이름:", name, "이메일:", email);
  };
  
  return (
    <div className="find-id-container">
      <h1>아이디 찾기</h1>
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
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">완료</button>
      </form>
    </div>
  );
};

export default FindIdPage;
