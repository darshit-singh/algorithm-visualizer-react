import React from 'react';
import './Bars.css'

const Bars = () => {
    let bg = '#3498db'; //blue
    // let bg = '#b85482'; //pink
    // sorted color #00bc8c green
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let blocks = [];
    let width = '1.5rem';
    let arrayLength = 40;
    for (let i = 0; i < arrayLength; i++) {
        // max block height 42 rem
        blocks.push(randomIntFromInterval(1, 42))
        if (arrayLength > 40) {
            width = '1rem'
        }
    }
    return (
        <div className='arrayContainer'>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: bg,
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
