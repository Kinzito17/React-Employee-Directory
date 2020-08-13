import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';
import API from '../utils/API';

const styles = {
    jumbotron: {
        textAlign: "center",
        background: "#1d3557",
        color: "white",
        height: 100
    },
    jumboContainer: {
        lineHeight: "0px"
    },
    searchBar: {
        width: "60%"
    },
};

function Home(props) {
    return (
        <div>
            <Jumbotron fluid style={styles.jumbotron}>
                <Container>
                    <h1 style={styles.jumboContainer}>Employee Directory</h1>
                </Container>
            </Jumbotron>
            <Container fluid>
                <InputGroup style={styles.searchBar} className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </InputGroup>
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
            </Container>
        </div>
    )
}

export default Home;