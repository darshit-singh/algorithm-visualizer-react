import React from 'react';
import { Container, Navbar, Nav, Button, Form, Row, Col } from 'react-bootstrap';
const selectStyle = {
    'fontWeight': '600',
    'borderRadius': '0.25rem'
}
const Header = ({ randomArrayGenerator, handleLength, arrayLength, handleSpeed, speed, handleAlgorithm, handleSort, sorting, completed, algorithm }) => {

    return (
        // background color #222 if you need a different navbar
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: '2.25rem' }}>Sorting Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Button variant="outline-info" className='m-3' style={{ fontWeight: '600' }} onClick={randomArrayGenerator} disabled={sorting}>New Array</Button>

                        <select className='my-3 mx-2 me-3 px-3' style={selectStyle} onChange={handleAlgorithm} disabled={sorting} value={algorithm}>
                            <option value='bubbleSort'>Bubble Sort</option>
                            <option value='mergeSort'>Merge Sort</option>
                            <option value='quickSort'>Quick Sort</option>
                        </select>

                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mx-2" controlId="exampleForm.ControlInput1">
                                        <label htmlFor="customRange1" className="form-label">Length - {arrayLength}</label>
                                        <input type="range" className="custom-range" id="customRange1" min='10' max='200' step='1' onChange={handleLength} value={arrayLength} disabled={sorting} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mx-2" controlId="exampleForm.ControlTextarea1">
                                        <label htmlFor="customRange2" className="form-label">Speed</label>
                                        <input type="range" className="custom-range" id="customRange2" onChange={handleSpeed} min='1' max='100' value={Math.ceil(400 / speed)} disabled={sorting} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>

                        <Button variant="outline-success" className='px-5 m-3' style={{ fontWeight: '600' }}
                            onClick={handleSort} disabled={sorting || completed}>Sort</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
