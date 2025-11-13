import React from 'react';
import './BlogCard.css';
import blogThumbnail from '../assets/blog-thumbnail.jpg';

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z"></path>
  </svg>
);

const BlogCard = () => {
  return (
    <a href="https://blog.t12jp.org" className="info-card blog-card" target="_blank" rel="noopener noreferrer">
      <div className="card-main-content">
        <div className="card-header">
          <div className="card-icon"><BlogIcon /></div>
          <h3 className="card-title">blog</h3>
        </div>
        <p className="status">Archived</p>
      </div>
      <div className="card-image-wrapper">
        <img src={blogThumbnail} alt="Preview of posts on t12jp.org blog" className="card-image" />
      </div>
    </a>
  );
};

export default BlogCard;