// CategoriesBar.jsx
// This component displays the horizontal category chips like YouTube.
// Pure HTML/CSS + simple React mapping.

import React from "react";

export default function CategoriesBar() {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Sports",
    "News",
    "Movies",
    "Live",
    "Coding",
    "AI",
    "Podcasts",
    "Trending",
    "Recently Uploaded",
  ];

  return (
    <div className="categories-bar">
      {categories.map((cat, index) => (
        <button key={index} className="category-chip">
          {cat}
        </button>
      ))}
    </div>
  );
}
