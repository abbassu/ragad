import React from "react";
import "./ListComponent.css"; // Import your CSS file for styling

const ListComponent = (props) => {
  // Sample data provided
  console.log("data", props.dataa);
  return (
    <div className="list-container">
      <h2>User List</h2>
      <ul className="user-list">
        {props.dataa.map((item, index) => (
          <li key={index} className="user-item">
            <img src={item.addimage} alt={item.name} className="avatar" />
            <div className="user-info">
              <h3>{item.name}</h3>
              <p>{item.objec}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
