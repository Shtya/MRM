import React from 'react';

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/category">Category</a></li>
        <li>Current Page</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;