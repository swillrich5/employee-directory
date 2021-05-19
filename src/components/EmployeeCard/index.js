import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <tr>
      <td>
      <img alt={props.name} src={props.image} />
      </td>
      <td>
        {props.name}
      </td>
      <td>
        {props.phone}
      </td>
      <td>
       {props.email}
      </td>
      <td>
        {props.dob.date}
      </td>
    </tr>
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Phone:</strong> {props.phone}
    //       </li>
    //       <li>
    //         <strong>Email:</strong> {props.email}
    //       </li>
    //       <li>
    //         <strong>DOB:</strong> {props.email}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default EmployeeCard;
