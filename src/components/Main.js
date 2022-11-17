import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import SoundBar from '../subComponents/SoundBar'
import { Pokeball } from './AllSvgs'
import Intro from './Intro'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2.h3.h4,h5,h6{
    font-family: 'Karla', sans-serif ;
    font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const Projects = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`


const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}

`

const SpanClick = styled.span`
font-family: 'Pacifico',cursive;
padding-top: 1rem;
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #800000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`



const Main = () => {

    const [click, setclick] = useState(false);

    const handleClick = () => setclick(!click);

    return (
        <MainContainer>
            <SoundBar />
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                <Center click={click}>
                    <Pokeball onClick={() => handleClick()} width={click ? 150 : 150} height={click ? 150 : 150} fill='currentColor' />
                    <SpanClick>Clique aqui</SpanClick>
                </Center>

                <Contact target="_black" to={{ pathname: "mailto:mateus.miranda3@fatec.sp.gov.br" }}>
                    <motion.h3
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Que tal partir para a jornada da contratação?...
                    </motion.h3>
                </Contact>

                <Projects to="/projects">
                    <motion.h2
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Meus projetos
                    </motion.h2>
                </Projects>

                <BottomBar>
                    <About to="/about" click={click}>
                        <motion.h2
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                            Sobre mim.
                        </motion.h2>
                    </About>

                    <Skills to="/skills">
                        <motion.h2
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                            Minhas Skills.
                        </motion.h2>
                    </Skills>

                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main