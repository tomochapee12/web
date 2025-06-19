// src/components/BlogCard.tsx

import { FaFeatherAlt } from 'react-icons/fa';

export default function BlogCard() {
  const blogUrl = "https://t12jp.org/blog";
  const imageUrl = "/blog-thumbnail.jpg";

  return (
    <a href={blogUrl} className="widget link-card" target="_blank" rel="noopener noreferrer" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexGrow: 1 }}>
        <div className="icon" style={{ backgroundColor: '#8a63d2' }}>
          <FaFeatherAlt size={24} color="white" />
        </div>
        <div className="content">
          <p className="title">Blog</p>
          <p className="subtitle">Archived</p>
        </div>
      </div>
      <img src={imageUrl} alt="Blog Thumbnail" style={{ width: '120px', height: '100%', objectFit: 'cover' }} />
    </a>
  );
}