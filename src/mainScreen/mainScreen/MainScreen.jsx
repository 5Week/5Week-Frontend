import React from 'react';
import "./MainScreen.css";

function MainScreen({ posts }) { 
	return (
	    <div className={"mainScreen"}>
	        {posts.map((post) => (
	            <div key={post.id} className={"post-card"}>
	              <h2 className="post-title">{post.title}</h2>
	              <p className="post-content">{post.content}</p>
	            </div>
	        ))}
	    </div>
	);
}

export default MainScreen;
