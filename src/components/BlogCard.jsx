import React from 'react';
import './BlogCard.css';
import blogThumbnail from '../assets/blog-thumbnail.jpg';

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="#333">
    <path d="M240-360h160v-80H240v80Zm0 160h160v-80H240v80Zm-80 160q-33 0-56.5-23.5T80-120v-720q0-33 23.5-56.5T160-920h360l240 240v440q0 33-23.5 56.5T680-120H160Zm0-80h520v-440L520-800H160v600Zm360-440h160L520-800v160ZM160-800v-40 600-560Z"/>
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
        <img src={blogThumbnail} alt="Blog thumbnail" className="card-image" />
      </div>
    </a>
  );
};

export default BlogCard;