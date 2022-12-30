import React from "react";
import "./blog.css";
import Article from "./../../components/article/Article";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const data = [
  {
    image: blog1,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog2,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog3,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog4,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog5,
    date: "Sep 26, 2021",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content_left">
          <Article
            image={data[0].image}
            date={data[0].date}
            text={data[0].text}
          />
        </div>
        <div className="gpt3__blog-content_right">
          {data.slice(1).map((item) => (
            <Article image={item.image} date={item.date} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
