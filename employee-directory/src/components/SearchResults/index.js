import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';

function SearchResults(props) {
  console.log(props)

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Country</th>
          <th>State</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employeeList.map((employee, a) => (
            <tr key={a}>

              <td><img src={employee.picture.thumbnail} alt={employee.name} /></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.location.country}</td>
              <td>{employee.location.state}</td>
              <td>{employee.location.city}</td>

            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default SearchResults;
