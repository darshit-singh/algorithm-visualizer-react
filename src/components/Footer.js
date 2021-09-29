import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Made with ❤️ by Darshit Singh
                    <br />
                    <a href="https://github.com/darshit-singh/algorithm-visualizer-react" target="_blank" rel="noopener noreferrer"> <FaGithub style={{ margin: '0 5px 2px 0' }} />Source Code</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
