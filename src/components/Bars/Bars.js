import React from 'react';
import './Bars.css'

const Bars = () => {
    let bg = '#00bc8c'; // sorted color
    let blocks = [1, 3, 5, 6, 7, 7, 4, 6, 12, 10, 9, 19];
    return (
        <div className='arrayContainer'>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: bg,
                        height: `${bar}rem`,
                    }
                }
                return (
                    <div className='bar' style={styles.bar}>
                        {bar}
                    </div>
                )
            })}
        </div>
    )
}

export default Bars
