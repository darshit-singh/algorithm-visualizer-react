import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Bars from './components/Bars/Bars';

const App = () => {
    const randomArrayGenerator = (arrayLength) => {
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let randomArray = [];
        for (let i = 0; i < arrayLength; i++) {
            // max block height 42 rem
            randomArray.push(randomIntFromInterval(1, 42))
        }
        setBars(randomArray);
    }
    const handleLength = (e) => {
        setArrayLength(Number(e.target.value))
    }

    const [bars, setBars] = useState([]);
    const [arrayLength, setArrayLength] = useState(40);

    useEffect(() => {
        randomArrayGenerator(arrayLength)
    }, [arrayLength])

    return (
        <div>
            <Header
                randomArrayGenerator={() => randomArrayGenerator(arrayLength)}
                handleLength={handleLength}
                arrayLength={arrayLength}
            />
            <main>
                <Container>
                    <Bars bars={bars} arrayLength={arrayLength} />
                    <hr />
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default App

