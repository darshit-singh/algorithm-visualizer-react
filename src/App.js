import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Container>
                    <h1>Sorting Visualizer</h1>
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App

