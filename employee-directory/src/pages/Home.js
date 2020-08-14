import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import Container from 'react-bootstrap/Container';
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from '../utils/API';

// handleInputChange = event => {
//     this.setState({})
// }

function Home() {
    // const [userState, setUserState] = useState({
    // })

    // loadFifty = () => {
    //     API.loadEmps()
    //         .then(res =>
    //             this.setState({
    //                 image: res.data.message
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };


    return (
        <div>
            <Jumbotron />
            <Container fluid>
                <SearchForm />
                <SearchResults />
            </Container>
        </div>
    )
}

export default Home;