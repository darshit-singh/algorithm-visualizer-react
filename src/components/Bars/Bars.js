import React from 'react';
import './Bars.css'

const Bars = (props) => {
    let { bars, arrayLength } = props;
    let barBackground = '#3498db'; //blue
    // let barBackground = '#b85482'; //pink
    // let barBackground = '#00bc8c'; //green

    let width = '1.5rem';

    if (arrayLength > 40 && arrayLength <= 100) {
        width = '1rem'
    } else if (arrayLength > 100) {
        width = '0.5rem'
    }

    return (
        <div className='arrayContainer'>
            {bars.map((bar, index) => {
                let height = ''
                if (arrayLength > 40) {
                    height = `${(bar * 42) / 200}rem`
                }
                else {
                    height = `${bar}rem`
                }
                const styles = {
                    bar: {
                        backgroundColor: barBackground,
                        height: height,
                        width: width
                    }
                }
                return (
                    <div key={index} className='bar' style={styles.bar}>
                        {arrayLength <= 40 ? bar : ''}
                    </div>
                )
            })}
        </div>
    )
}

export default Bars
