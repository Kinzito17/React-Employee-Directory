import React from "react";
import Jumbotron from '../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchForm from "../components/SearchForm";


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