import React, { useEffect, useState } from "react";
import "./style.css";
import Form from 'react-bootstrap/Form'
import API from '../../utils/API';
import SearchResults from "../SearchResults";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {

  const [searchEmployee, setSearchEmployee] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);


  //Calls to load employees
  useEffect(() => {
    loadFifty()
  }, [])

  //Calls API
  const loadFifty = () => {
    API.loadEmps()
      .then(res => {
        setEmployees(res.data.results)
        setFilteredEmployees(res.data.results)
        // console.log(res.data)

      })
      .catch(err => console.log(err));
  }

  function employeeSearch(evt) {
    filterEmployee(evt, employees);
  }

  function filterEmployee(evt, list) {
    console.log(evt)
    const filteredList = list.filter(employee => {
      let values = Object.values(employee)
        .join("")
        .toLowerCase();
      return values.indexOf(evt.toLowerCase()) !== -1;
    });
    setFilteredEmployees(filteredList);

  }

  return (
    <>
      <Form.Group>
        <Form.Label>Employee Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type employee name here..."
          name="searchEmployee"
          onChange={evt => employeeSearch(evt.target.value)}
        />
      </Form.Group>
      <SearchResults employees={filteredEmployees} />
    </>
  );
}

export default SearchForm;


// employee.name.first.match(evt)