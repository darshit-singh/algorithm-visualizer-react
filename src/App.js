import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Bars from './components/Bars/Bars';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Container>
                    <Bars />
                    <hr />
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App

