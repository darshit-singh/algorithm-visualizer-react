import React from 'react';
import './Bars.css'

const Bars = () => {
    let barBackground = '#3498db'; //blue
    // let barBackground = '#b85482'; //pink
    // let barBackground = '#00bc8c'; //green
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let blocks = [];
    let width = '1.5rem';
    let arrayLength = 200;
    for (let i = 0; i < arrayLength; i++) {
        // max block height 42 rem
        blocks.push(randomIntFromInterval(1, 42))
        if (arrayLength > 40 && arrayLength <= 100) {
            width = '1rem'
        } else if (arrayLength > 100) {
            width = '0.5rem'
        }

    }
    return (
        <div className='arrayContainer'>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: barBackground,
                        height: `${bar}rem`,
                        width: width
                    }
                }
                return (
                    <div className='bar' style={styles.bar}>
                        {arrayLength <= 40 ? bar : ''}
                    </div>
                )
            })}
        </div>
    )
}

export default Bars
