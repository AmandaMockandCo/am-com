import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const MyJourney = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src="" type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Amanda Mock
                    </HeroH1>
                    <Herop>
                        Changing text will cycle here.
                    </Herop>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default MyJourney

const HeroContainer = styled.div`
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

const HeroBg = styled.div``

const VideoBg = styled.div``

const HeroContent= styled.div``
const HeroItems = styled.div``
const HeroH1 = styled.h1``
const Herop = styled.p``