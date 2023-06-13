import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Get.css";

function Get() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())

      .then((data2) => {
        setdata(data2);
        console.log(data2);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div class="top-bar">
        
        <button
          onClick={() => (window.location.href = "/")}
          className="home-button"
        >
          Home
        </button>
      </div>

      {data.map((item, index) => (
        <div key={index} className="item">
          <label className="label">Title:</label>
          <h2 className="title">{item.title}</h2>
          <label className="label">Description:</label>
          <p className="description">{item.description}</p>
          <label className="label">Status:</label>
          <span
            className={`status ${
              item.status1 ? item.status1 : " ".toLowerCase()
            }`}
          >
            {item.status1}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Get;
