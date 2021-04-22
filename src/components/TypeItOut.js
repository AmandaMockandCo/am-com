import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD


const TypeItOut = () => {
    return (
        <TypeContainer>
                    <TypeH1>
                        More
                    </TypeH1>
                    <TypeWordsHere>Test</TypeWordsHere>
        </TypeContainer>
    )
}

export default TypeItOut


const TypeContainer = styled.div`
    display:flex;
    width:100%;
`

const TypeH1 = styled.h1`
    position:relative;
    margin-left: 10px;
`

const TypeWordsHere = styled.h1 `
    margin-left:10px;

    ::after{
        content: "";
        position:absolute;
        width: 1px;
        height: 3%;
        border-right: 2px solid white;
        margin-left: 5px;
        animation: blink 0.4s infinite ease;
    }

    @keyframes blink{
        0%{
            opacity:0;
            }
        100%{
            opacity:1;
        }
        }`
            
=======
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
>>>>>>> parent of 452c8c7 (reemove type it out)
