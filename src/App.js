import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Bars from './components/Bars/Bars';
import bubbleSort from './Algorithms/BubbleSort';
import mergeSort from './Algorithms/MergeSort';
import quickSort from './Algorithms/QuickSort';

const App = () => {
    //states
    const [bars, setBars] = useState([]); //actual random array
    const [arrayLength, setArrayLength] = useState(40);
    const [algorithm, setAlgorithm] = useState('bubbleSort');
    const [sorting, setSorting] = useState(false) // if sorting is happening
    const [completed, setCompleted] = useState(true) // sorting completed
    const [speed, setSpeed] = useState(250)
    const [compare, setCompare] = useState([])
    const [swap, setSwap] = useState([])
    const [sortedIndex, setSortedIndex] = useState([])

    const randomArrayGenerator = (arrayLength) => {
        setCompleted(false)
        setSorting(false)
        setSortedIndex([])
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let randomArray = [];

        if (arrayLength > 40) //random numbers go up to 200 if length is more than 40
            for (let i = 0; i < arrayLength; i++) {
                randomArray.push(randomIntFromInterval(1, 200))
            }
        else                  //random numbers generated between 1 and 42
            for (let i = 0; i < arrayLength; i++) {
                randomArray.push(randomIntFromInterval(1, 42))
            }
        setBars(randomArray); //makes bars = randomArray generated
    }

    //sets length to the selected value
    const handleLength = (e) => {
        setArrayLength(Number(e.target.value))
    }

    //sets algorithm to the selected value
    const handleAlgorithm = (e) => {
        setAlgorithm(e.target.value)
    }

    //sets speed to the selected value
    const handleSpeed = (event) => {
        setSpeed(Math.ceil(400 / Number(event.target.value)))
    }

    const handleSort = () => {
        const sortAccOrder = (order) => {
            (function loop(i) {
                setTimeout(function () {
                    const [j, k, arr, index] = order[i]
                    setCompare([j, k])
                    setSwap([])

                    if (index !== null) {
                        setSortedIndex((prevState) => [...prevState, index])
                    }

                    if (arr) {
                        setBars(arr)
                        if (j !== null || k != null) setSwap([j, k])
                    }

                    if (++i < order.length) {
                        loop(i)
                    } else {
                        setSorting(false)
                        setCompleted(true)
                    }
                }, speed)
            })(0) //IIFE, starting value of i = 0
        }

        setSorting(true)

        algorithm === 'bubbleSort'
            ? sortAccOrder(bubbleSort(bars))
            : algorithm === 'mergeSort'
                ? sortAccOrder(mergeSort(bars))
                : algorithm === 'quickSort'
                    ? sortAccOrder(quickSort(bars))
                    : (() => {
                        setSorting(false)
                        setCompleted(true)
                    })()
    }

    useEffect(() => {
        randomArrayGenerator(arrayLength)
    }, [arrayLength])

    return (
        <div>
            <Header
                randomArrayGenerator={() => randomArrayGenerator(arrayLength)}
                handleLength={handleLength}
                arrayLength={arrayLength}
                handleAlgorithm={handleAlgorithm}
                handleSpeed={handleSpeed}
                handleSort={handleSort}
                sorting={sorting}
                completed={completed}
                speed={speed}
                algorithm={algorithm}
            />
            <Container>
                <main>
                    <Bars
                        bars={bars}
                        arrayLength={arrayLength}
                        compare={sorting && compare}
                        swap={sorting && swap}
                        sorted={sortedIndex} />
                    <hr />
                </main>
                <Footer />
            </Container>
        </div>
    )
}

export default App

