import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { DarkTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/rayquaza.png";
import Loading from '../subComponents/Loading';
//Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticleComponent = lazy(() =>
    import('../subComponents/ParticleComponent')
)
const BigTitle = lazy(() => import('../subComponents/BigTitle'))


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;
  `};
${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`
const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Suspense fallback={<Loading />}>
                <Box
                    key='skills'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}>
                    <LogoComponent theme='dark' />
                    <PowerButton />
                    <SocialIcons theme='dark' />
                    <ParticleComponent theme='dark' />

                    <SpaceMan
                        initial={{ right: '-20%', top: '100%' }}
                        animate={{
                            right: '5%',
                            top: '10%',
                            transition: { duration: 2, delay: 0.5 },
                        }}>
                        <img src={astronaut} alt="spaceman" />
                    </SpaceMan>
                    <Main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
                        Olá, Como vai??
                        Me chamo Mateus, tenho 19 anos e moro em Votorantim, interior de São Paulo.<br></br><br></br>
                        Sou formado como técnico em informática para internet na Etec de Votorantim e Atualmente curso Análise e Desenvolvimento de Sistemas,
                        na Fatec de Sorocaba. Iniciei minha carreira na área de tecnologia ainda neste ano, e hoje trabalho na área de dados, mesmo que apaixonado pela
                        área de programação também.
                        {' '}
                    </Main>
                    <BigTitle text='SOBRE' top='10%' left='5%' />
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default AboutPage