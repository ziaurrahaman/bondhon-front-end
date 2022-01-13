import React from 'react'
import Footer from '../others/Footer'
import Header from '../others/Header'

const LandingLayout = (props) => {
    return (
        <>
            <Header />
            <>
                {props.children}
            </>
        </>
    )
}

export default LandingLayout