import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img
         src={`${process.env.PUBLIC_URL}/Image.jpg`}
        alt="header"
        className="header-image"
      />
      <h1 className="header-text">같이 꿈을 이뤄요!<br></br>
        다른 사람들과 함께 버킷리스트를 공유하고<br></br>
        이루어갈 수 있는 커뮤니티에 참여하세요.</h1>
    </div>
  );
}

export default Header;
