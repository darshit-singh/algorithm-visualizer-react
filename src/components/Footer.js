import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Made with ❤️ by Darshit Singh
                    <br />
                    <a href="https://github.com/darshit-singh/algorithm-visualizer-react" target="_blank" rel="noopener noreferrer"> Source Code</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
