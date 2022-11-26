import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

//Components
import { Pokeball } from "./AllSvgs";
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));

const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));



const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
  `};
    ${mediaQueries(30)`
      font-size:1em;
  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const PROJETOS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #800000;" : "none")};
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #800000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;
  ${(props) =>
        props.click
            ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;
  `
            : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;



const Main = () => {
    const [click, setClick] = useState(false);
    const [path, setpath] = useState("");

    const handleClick = () => setClick(!click);

    const moveY = {
        y: "-100%",
    };
    const moveX = {
        x: `${path === "work" ? "100%" : "-100%"}`,
    };
    const mq = window.matchMedia("(max-width: 50em)").matches;

    return (
        <Suspense fallback={<Loading />}>
            <MainContainer
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={path === "about" || path === "skills" ? moveY : moveX}
                transition={{ duration: 0.5 }}
            >
                <DarkDiv click={click} />
                <Container>
                    <LogoComponent theme={click ? "dark" : "light"} />
                    <PowerButton />
                    {mq ? (
                        <SocialIcons theme="light" />
                    ) : (
                        <SocialIcons theme={click ? "dark" : "light"} />
                    )}
                    <Center click={click}>
                        {mq ? (
                            <Pokeball
                                onClick={() => handleClick()}
                                width={click ? 80 : 150}
                                height={click ? 80 : 150}
                                fill="currentColor"
                            />
                        ) : (
                            <Pokeball
                                onClick={() => handleClick()}
                                width={click ? 120 : 200}
                                height={click ? 120 : 200}
                                fill="currentColor"
                            />
                        )}

                        <span>Clique aqui</span>
                    </Center>

                    {mq ? (
                        <Contact
                            click={+click}
                            target="_blank"
                            to={{ pathname: "mailto:mateus.miranda3@fatec.sp.gov.br" }}
                        >
                            <motion.h3
                                initial={{
                                    y: -200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Enviar E-mail
                            </motion.h3>
                        </Contact>
                    ) : (
                        <Contact
                            click={+false}
                            target="_blank"
                            to={{ pathname: "mailto:mateus.miranda3@fatec.sp.gov.br" }}
                        >
                            <motion.h3
                                initial={{
                                    y: -200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Enviar E-mail
                            </motion.h3>
                        </Contact>
                    )}

                    {mq ? (
                        <PROJETOS click={+click} onClick={() => setpath("projects")} to="/projects">
                            <motion.h2
                                initial={{
                                    y: -200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Projetos
                            </motion.h2>
                        </PROJETOS>
                    ) : (
                        <PROJETOS click={+false} onClick={() => setpath("projects")} to="/projects">
                            <motion.h2
                                initial={{
                                    y: -200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Projetos
                            </motion.h2>
                        </PROJETOS>
                    )}

                    <BottomBar>
                        <ABOUT
                            onClick={() => setClick(false)}
                            click={mq ? +false : +click}
                            to="/about"
                        >
                            <motion.h2
                                onClick={() => setpath("about")}
                                initial={{
                                    y: 200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Sobre mim
                            </motion.h2>
                        </ABOUT>

                        <SKILLS to="/skills">
                            <motion.h2
                                onClick={() => setpath("skills")}
                                initial={{
                                    y: 200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Minhas Skills
                            </motion.h2>
                        </SKILLS>
                    </BottomBar>
                </Container>

                {click ? <Intro click={click} /> : null}
            </MainContainer>
        </Suspense>
    );
};

export default Main;