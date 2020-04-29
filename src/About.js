import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div className="App">
      <h1>About</h1>
      {items.map((item) => (
        <h1 key={item.url}>
          <Link to={`/about/${item.url}`}>{item.question_text}</Link>
        </h1>
      ))}
    </div>
  );
}

export default About;
