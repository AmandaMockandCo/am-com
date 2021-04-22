import React from 'react'
import styled from 'styled-components'


const MyJourney = () => {
    return (
        <JourneyContainer>
                    <JourneyH1>
                        Amanda Mock
                    </JourneyH1>
        </JourneyContainer>
    )
}

export default MyJourney

const JourneyContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content:center;
    height: 100vh;
    color:#000;
    align-items: center;
    padding: 0 1reem;
    position: relative;
    margin-top: -80px;
`

const JourneyH1 = styled.h1``
