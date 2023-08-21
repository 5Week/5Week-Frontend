import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    // 작성하신 회원가입 처리 로직을 여기에 추가해주세요.
    console.log('회원가입 데이터:', { name, email, username, password, passwordConfirmation });
  };

  return (
    <div className="SignUpPage">
      <h1>회원가입</h1>
      <form onSubmit={onFormSubmit}>
        <div className="input-group">
          <label htmlFor="name">이름</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="password-confirmation">비밀번호 확인</label>
          <input
            type="password"
            id="password-confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>
        <button type="submit">완료</button>
      </form>
    </div>
  );
};

export default SignUpPage;
