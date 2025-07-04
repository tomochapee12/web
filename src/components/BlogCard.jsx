import React from 'react';
import './BlogCard.css';
import blogThumbnail from '../assets/blog-thumbnail.jpg';

const BlogIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 4.86C18.2308 3.95082 17.1422 3.23869 15.9456 2.77193C14.749 2.30517 13.4739 2.09424 12.195 2.155C10.15 2.255 8.245 3.125 6.845 4.525C5.445 5.925 4.575 7.83 4.475 9.875C4.41424 11.1539 4.62517 12.429 5.09193 13.6256C5.55869 14.8222 6.27082 15.9108 7.18 16.82L3.5 20.5L4.86 21.86L8.54 18.18C9.44918 19.0892 10.5378 19.8013 11.7344 20.2681C12.931 20.7348 14.2061 20.9458 15.485 20.885C17.53 20.785 19.435 19.915 20.835 18.515C22.235 17.115 23.105 15.21 23.195 13.165C23.2558 11.8861 23.0448 10.611 22.5781 9.41443C22.1113 8.21786 21.4002 7.12921 20.5 6.22L19.14 4.86ZM15.485 18.885C14.4996 18.9323 13.522 18.7684 12.615 18.405C11.535 17.985 10.585 17.275 9.865 16.375L15.625 10.615C16.525 11.335 17.235 12.285 17.655 13.365C18.0184 14.272 18.1823 15.2496 18.135 16.235C18.0862 17.2913 17.7214 18.3039 17.085 19.135C16.5415 19.601 15.9221 19.9546 15.265 20.175C16.035 18.825 15.485 18.885 15.485 18.885ZM17.065 9.195L11.305 3.435C12.0195 2.94364 12.822 2.60731 13.665 2.455C14.745 2.255 15.865 2.355 16.895 2.755C17.925 3.155 18.815 3.825 19.565 4.675C20.671 5.82393 21.3614 7.28879 21.515 8.875C21.5627 9.86039 21.3988 10.838 21.035 11.745C20.615 12.825 19.905 13.775 19.185 14.695L13.425 8.935C14.145 8.215 14.635 7.345 14.855 6.395C15.0183 5.55204 14.9397 4.68697 14.625 3.895C15.515 4.785 16.175 5.865 16.605 7.065C17.2618 8.04631 17.2942 9.21321 17.065 9.195Z" fill="#333"/></svg>
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