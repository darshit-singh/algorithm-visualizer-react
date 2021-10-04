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
    let blocks = [1, 3, 5, 6, 7, 7, 4, 6, 12, 10, 9, 19];
    return (
        <div className='arrayContainer' style={styles.arrayContainer}>
            {blocks.map(bar => {
                const styles = {
                    bar: {
                        backgroundColor: bg,
                        // color: color,
                        width: '1.5rem',
                        height: `${bar}rem`,
                        bottom: 0,
                        margin: '0px 2px',
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
