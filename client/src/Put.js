import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Add.css";

function Put() {
  const [checkput, setcheckput] = useState(false);
  const [checkpatch, setcheckpatch] = useState(false);

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === "put") {
        setcheckput(checked);
    } else if (name === "patch") {
        setcheckpatch(checked);
    }
  };

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [stat, setstat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Description:", desc);
    console.log("Status:", stat);

    const inputData = new URLSearchParams();
    inputData.append("title", title);
    inputData.append("description", desc);
    inputData.append("status1", stat);
    if (checkpatch) {
      fetch("http://localhost:5000/tasks", {
        method: "PATCH",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: inputData.toString(),
      })
        //   .then((response) => response.json())
        .then((data) => {
          window.location.href = "/get";
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (checkput) {
      fetch("http://localhost:5000/tasks", {
        method: "PUT",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: inputData.toString(),
      })
        //   .then((response) => response.json())
        .then((data) => {
          window.location.href = "/get";
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setcheckpatch(false);
    setcheckput(false);
  };

  return (
    <div className="container">
      
      <div class="top-bar">
        <h1>Update your Task</h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="home-button"
        >
          Home
        </button>
      </div>
      <div className="checkbox-group">
      <label>
        PUT
        <input
          type="checkbox"
          name="put"
          checked={checkput}
          onChange={handleChange}
        />
      </label>

      <label>
        PATCH
        <input
          type="checkbox"
          name="patch"
          checked={checkpatch}
          onChange={handleChange}
        />
      </label>
      </div>

      <form className=" form-container" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <input
            type="text"
            value={stat}
            onChange={(e) => setstat(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Put;
