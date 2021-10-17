import React from 'react';
import './Bars.css'

const Bars = (props) => {
    let { bars, arrayLength, compare, sorted, swap } = props;
    // let barBackground = '#3498db'; //blue
    // let barBackground = '#b85482'; //pink
    // let barBackground = '#00bc8c'; //green

    let width = '1.5rem'; // width of each bar

    if (arrayLength > 40 && arrayLength <= 100) {
        width = '1rem'
    } else if (arrayLength > 100) {
        width = '0.5rem'
    }

    return (
        <div className='arrayContainer'>
            {bars.map((bar, index) => {
                let height = ''
                //a bar's height is the array number in rem
                if (arrayLength > 40) {
                    height = `${(bar * 42) / 200}rem`
                }
                else {
                    height = `${bar}rem`
                }
                let barBackground = '#3498db'; //default -blue

                // i th element is being compared with the other element -pink
                if (compare && (index === compare[0] || index === compare[1])) {
                    barBackground = '#b85482'
                }

                //swapping -yellow
                if (swap && (index === swap[0] || index === swap[1])) {
                    barBackground = 'yellow'
                }
                // i th element is in sorted position -gren
                if (sorted && sorted.includes(index)) {
                    barBackground = '#00bc8c'
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
