import React, { useState } from "react";
import "./AddData.css";

const AddData = (props) => {
  const userdata = props?.users;
  const [lists, setLists] = React.useState(userdata);
  // console.log(lists, "list1234");
  const removeItem = (index) => {
    // console.log(index, "s9876");

    const updatedList = userdata.filter((item) => item.index !== index);
    setLists(updatedList);

    // return { lists, removeItem };
    // let total = [...userdata];
    // total.slice(index, 1);
    // setLists(total);

    // const dataCopy = [...lists];
    // dataCopy.slice(index, 1);
    // setLists(dataCopy);

    // var i = index.parentNode.parentNode.rowIndex;
    // document.getElementById("my-table").deleteRow(i);

    // document.getElementById("my-table").deleteRow(index);
  };

  return (
    <>
      <div className="tt-start">
        <table>
          <tr>
            <th>Sr. No</th>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
          </tr>

          {props.users.map((user, index) => {
            return (
              <tr key={index + 1} id="my-table">
                <td>{index + 1}</td>
                <td>{user.task}</td>
                <td>{user.work}</td>
                <td>{user.status}</td>
                <button
                  type="submit"
                  className="btn-dlt"
                  onClick={() => removeItem(index + 1)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default AddData;

/* <div className="Table-tt">
        <Table>
          <tr className="Table-row">
            {props.users.map((user) => (
              <tr>
                <td className="Table-col">{user.task}</td>
                <td className="Table-col">{user.work}</td>
                <td className="Table-col">{user.status}</td>
              </tr>
            ))}
          </tr>
        </Table>
      </div> */
