import React, { useEffect, useState } from "react";
import "./style.css";
import Form from 'react-bootstrap/Form'
import API from '../../utils/API';
import SearchResults from "../../components/SearchResults";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {

  const [searchEmployee, setSearchEmployee] = useState("");
  const [employees, setEmployees] = useState([]);

  //Calls to load employees
  useEffect(() => {
    loadFifty()
  }, [])

  //Calls API
  const loadFifty = () => {
    API.loadEmps()
      .then(res => {
        setEmployees(res.data.results)
        console.log(res.data)

      })
      .catch(err => console.log(err));
  }

  function employeeSearch(evt) {
    setSearchEmployee(evt);
    filterEmployee(searchEmployee, employees);
  }

  function filterEmployee(evt, list) {

    const filteredList = list.filter(employee => employee.name.first.match(evt));

    if (filteredList.length > 0) {
      setEmployees(filteredList);
    }
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
      <SearchResults employees={employees} />
    </>
  );
}

export default SearchForm;
