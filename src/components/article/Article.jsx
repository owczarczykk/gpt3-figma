import React from "react";
import "./article.css";
const Article = ({ image, date, text }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt="blog_image" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <h4> {date}</h4>
          <h1> {text} </h1>
        </div>
        <p>Read Full Article </p>
      </div>
    </div>
  );
};

export default Article;
