import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import API from '../utils/API';


function Home() {

    return (
        <div>
            <Jumbotron />
            <Container fluid>
                <SearchForm />
            </Container>
        </div>
    )
}

export default Home;