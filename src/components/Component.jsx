import React, { useState } from "react";
import "./component.css";

const developments = [
  {
    title: "JavaScript Basics",
    desc: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "React.js Overview",
    desc: "Lorem ipsum dolor sit amet, adipisicing elit.",
  },
  {
    title: "Node.js",
    desc: "Lorem ipsum dolor sit amet consectetur elit.",
  },
  {
    title: "Full-Stack Developement",
    desc: "Lorem ipsum amet consectetur, adipisicing elit.",
  },
];

function Component() {
  const [currentItem, setCurrentItem] = useState("");

  function titleClickHandle(title) {
    if (title === currentItem) setCurrentItem("");
    else setCurrentItem(title);
  }

  return (
    <div className="dev__container">
      <div className="dev__content">
        {developments.map((item) => {
          return (
            <div key={item.title} className="dev__item">
              <button
                onClick={() => titleClickHandle(item.title)}
                className={`dev__btn-box ${currentItem === item.title ? "dev__btn-box--active" : ""}`}
              >
                <h2 className="dev__title">{item.title}</h2>
                <div className="dev__title-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>
              <p
                className={`dev__desc ${currentItem === item.title ? "dev__desc--active" : ""}`}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Component;
