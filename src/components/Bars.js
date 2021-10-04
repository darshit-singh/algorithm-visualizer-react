import React from 'react'

const Bars = () => {
    let bg = '#00bc8c'; // sorted color
    const styles = {
        arrayContainer: {
            paddingTop: '5rem',
            minHeight: '60vh',
            position: 'relative'
        }
    }
    let blocks = [1, 3, 5, 6, 7, 7, 87, 6];
    return (
        <div className='arrayContainer' style={styles.arrayContainer}>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: bg,
                        // color: color,
                        width: '1rem',
                        height: '10rem',
                        position: 'absolute',
                        bottom: 0
                    }
                }
                return (
                    <div className='bar' style={styles.bar}>

                    </div>
                )
            })}
        </div>
    )
}

export default Bars
