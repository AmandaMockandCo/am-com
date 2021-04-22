import React from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'


function App() {
    return (
        <p>
        I'm a{' '}
        <Typical 
            loop= {infinity}
            wrapper="b"
            steps={ [
                'developer',
                1000,
                'designer',
                1000,
                'boss',
                1000,
            ]}
            />
            </p>
    );
}

export default TypeItOut