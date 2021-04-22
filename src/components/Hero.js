import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import TypeItOut from './TypeItOut'
=======
import { Button } from './Button'
>>>>>>> parent of 1e5f197 (type it out)


const Hero = () => {
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

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content:center;
    height: 100vh;
    color:#fff;
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
