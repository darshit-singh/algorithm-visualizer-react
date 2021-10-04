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
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        backgroundColor: bg,
                        color: 'black',
                        width: '1.5rem',
                        height: `${bar}rem`,
                        bottom: 0,
                        margin: '0px 2px',
                        textAlign: 'center',
                        fontSize: '12px',
                        fontWeight: '700',
                        borderRadius: '5px'
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
