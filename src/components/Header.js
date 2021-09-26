import React from 'react';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: '3.25rem' }}>Sorting Visualizer</Navbar.Brand>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="info">
                            Choose Algorithm
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-2">Quick Sort</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Merge Sort</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Bubble Sort</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Selection Sort</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="outline-info" className='mx-3'>New Random Array</Button>
                    <Button variant="outline-success" className='px-5'>Sort</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
