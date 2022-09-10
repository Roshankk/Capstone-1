import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../button/Button";
import List from "../button/List";
import axios from "axios";
import "../App.css";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const addToList = async (e) => {
    const result = await axios.post("http://localhost:8001/api", {
      groceryItem: item,
      isPurchased: false,
    });
    // setList([...list, { groceryItem: item, isPurchased: false }]);
    // console.log("make a post call");
    console.log(result.data);
    fetchData();
    setItem("");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8001/api");
      // const result = await fetch("http://localhost:8000/api", {
      //   method: "GET",
      // });
      // const data = await result.json();
      setList(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let name = month[d.getMonth()];

  return (
    <><div className="tophedding">
       Monthly Grocery Planning App
    </div>
      <h1 style={{ textAlign: "center" }}>Plan for the Month of {name}</h1>
      <div className="hero-container">
        <div className="hero-container-prim">
          <input
            placeholder="Enter List Item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
            value={item}
          />
          <Button label="AddMe" handleClick={addToList} />
        </div>
        <List data={list} fetchData={fetchData} />
      </div>
    </>
  );
};
export default TodoList;
