import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table';

function SearchResults(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="Dog" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default SearchResults;
