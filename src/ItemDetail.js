import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail(match) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>Item</h1>
      <h1>{item.url}</h1>
    </div>
  );
}

export default ItemDetail;
