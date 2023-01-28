import React, { useState } from "react";
import Forms from "../Form/Forms";
import "./Home.css";
import AddData from "../Form/AddData";

const Home = () => {
  const [state, setState] = useState("none");
  const [show, setShow] = useState("none");
  const [usersList, setUsersList] = useState([]);

  const formIsClick = () => {
    if (state === "none") {
      setState("block");
    } else {
      setState("none");
    }
  };

  const submitIsClick = () => {
    if (show === "none") {
      setShow("block");
    }
    // } else {
    //   setShow("none");
    // }
  };

  const addUserData = (nwork, nstatus, ntask) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { work: nwork, status: nstatus, task: ntask }];
    });
  };

  return (
    <div>
      <h3>Welcome to project</h3>
      <button className="btn-style" onClick={formIsClick}>
        Open the form
      </button>
      <div style={{ display: `${state}` }} onClick={submitIsClick}>
        <Forms onAddData={addUserData} />
      </div>
      <div style={{ display: `${show}` }}>
        <AddData users={usersList} />
      </div>
    </div>
  );
};

export default Home;
