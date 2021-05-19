import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <tr id="employee-card">
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
        {props.dob}
      </td>
    </tr>
  );
}

export default EmployeeCard;
