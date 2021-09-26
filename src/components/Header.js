import React from 'react';
import { Container, Navbar, Nav, Button, Dropdown, Form, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: '2.25rem' }}>Sorting Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Button variant="outline-info" className='m-3' style={{ fontWeight: '600' }}>New Array</Button>
                        <Dropdown className='m-3'>
                            <Dropdown.Toggle variant="info" style={{ fontWeight: 'bold' }}>
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
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mx-2" controlId="exampleForm.ControlInput1">
                                        <label htmlFor="customRange1" className="form-label">Length</label>
                                        <input type="range" className="custom-range" id="customRange1" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mx-2" controlId="exampleForm.ControlTextarea1">
                                        <label htmlFor="customRange2" className="form-label">Speed</label>
                                        <input type="range" className="custom-range" id="customRange2" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        <Button variant="outline-success" className='px-5 m-3' style={{ fontWeight: '600' }}>Sort</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
