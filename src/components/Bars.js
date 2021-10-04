import React from 'react'

const Bars = () => {
    let bg = '#00bc8c'; // sorted color
    const styles = {
        arrayContainer: {
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
        }
    }
    let blocks = [1, 3, 5, 6, 7, 7, 4, 6];
    return (
        <div className='arrayContainer' style={styles.arrayContainer}>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: bg,
                        // color: color,
                        width: '1rem',
                        height: `${bar}rem`,
                        bottom: 0,
                        margin: '0px 2px',
                    }
                }
                return (
                    <div className='bar' style={styles.bar}>
                        <span>{bar}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Bars
