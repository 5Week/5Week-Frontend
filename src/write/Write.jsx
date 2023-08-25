import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Write.css";

function Write({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const newPost = {
            id: Date.now(), 
            title: title,
            content: content,
        };
        addPost(newPost);
        navigate('/');
    };

    return (
      <div className="write-page">
          <div className="write-content">
              <input 
                  type="text" 
                  className="title-input" 
                  placeholder="제목을 입력하세요." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <textarea 
                  className="content-input" 
                  placeholder="본문을 작성하세요." 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
              />
              <button onClick={handleSubmit} className="submit-button">완료</button>
          </div>
      </div>
  );
}

export default Write;
