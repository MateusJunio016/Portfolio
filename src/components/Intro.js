import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 55vw;
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    

    z-index:1;

);
`

const SubBox = styled.div`
width: 45%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    heigth: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1vw);
color:${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;


&>8:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`}
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{type: 'spring', duration:2, delay:1}}
        >
            <SubBox>
                <Text>
                    <h1>Olá,</h1>
                    <h3>me chamo Mateus Junio.</h3>
                    <h5>Sou apenas um programador capturando uns "bugs" por aí!!</h5>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration:1, delay:2}}
                >
                    <img className="pic" src={Me} alt="Avatar Mateus"/>
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro