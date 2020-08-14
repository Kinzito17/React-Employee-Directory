import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from '../utils/API';


function Home() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [searchedEmployees, setSearchedEmpployees] = useState("");

    //Calls to load employees
    useEffect(() => {
        loadFifty()
    }, [])

    //Calls API
    const loadFifty = () => {
        API.loadEmps()
            .then(res => {
                setEmployees(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = evt => {
        setSearch(evt.target.value);

    }

    return (
        <div>
            <Jumbotron />
            <Container fluid>
                <SearchForm />
                <SearchResults employeeList={employees} />
            </Container>
        </div>
    )
}

export default Home;