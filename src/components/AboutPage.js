import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent'
import { keyframes } from 'styled-components';

import rayquaza from '../assets/Images/rayquaza.png'

const Box = styled.div`
background-color:  ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Rayquaza = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;
lin-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono',monospace;
font-style: italic;
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>

            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton theme='dark'/>
                <ParticleComponent theme='dark'/>
                <Rayquaza>
                    <img src={rayquaza} alt="rayquaza"/>
                </Rayquaza>
                <Main>
                    Olá, Como vai?? Seja bem vindo ao meu portfolio!!<br></br><br></br>
                    Me chamo Mateus, tenho 19 anos e moro em Votorantim, interior de São Paulo.<br></br><br></br>
                    Sou estudante, analista, ciclista, jogador de RPG e artista de vez em quando. Também gosto bastante de ouvir música no spotify,
                    é um dos requisitos para a programação fluir enquanto estou trabalhando, além do café, é claro haha.<br></br><br></br>
                    Sou formado como técnico em informática para internet na Etec de Votorantim e Atualmente curso Análise e Desenvolvimento de Sistemas,
                    na Fatec de Sorocaba. Iniciei minha carreira na área de tecnologia ainda neste ano, e hoje trabalho na área de dados, mesmo que apaixonado pela
                    área de programação também.
                    <br></br><br></br>
                    Se quiser se conectar comigo, você pode acessar minhas redes sociais ou me mandar um e-mail, será um prazer conhecê-lo!!



                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage