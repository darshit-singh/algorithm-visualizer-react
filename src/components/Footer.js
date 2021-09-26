import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Made with <i class="fa fa-heart" aria-hidden="true"></i> by Darshit Singh
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
