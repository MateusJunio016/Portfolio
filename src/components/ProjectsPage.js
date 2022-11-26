import styled from "styled-components";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/Images/code.jpg";

import ProjectComponents from '../components/ProjectComponents'
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";


const AnchorComponent = lazy(() => import("../subComponents/Anchor"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  //width:100vw;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  ${mediaQueries(30)`
    padding-top: 7rem;
    
  
  `};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  ${mediaQueries(50)`
    grid-template-columns: 100%;
    
  
  `};
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};


const ProjectsPage = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumber(parseInt(num));
    }, []);
    return (
        <Suspense fallback={<Loading />}>
            <MainContainer
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                <Container>
                    <LogoComponent />

                    <PowerButton />

                    <SocialIcons />
                    <AnchorComponent number={number} />

                    <Center>
                        <Grid variants={container} initial="hidden" animate="show">
                            <ProjectComponents
                                 name={"Página web utilizando HTML semântico"}
                                 tags={["html","css"]}
                                 date={"11 Set. 2022"}
                                 imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/atividade4.png"}
                                 link={"https://pwebatividade4.netlify.app"}
                            />
                            <ProjectComponents
                                 name={"Página de notícias utilizando flexbox"}
                                 tags={["html","css"]}
                                 date={"15 Set. 2022"}
                                 imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/atividade5.png"}
                                 link={"https://pwebatividade5.netlify.app"}
                                 />
                            <ProjectComponents
                                 name={"Realizando uma automatização de pesquisa com funções JS"}
                                 tags={["html","css","javascript"]}
                                 date={"24 Out. 2022"}
                                 imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/atividade8.png"}
                                 link={"https://pwebatividade8.netlify.app"}
                                 />
                            <ProjectComponents
                                 name={"Utilizando funções JS para retornar parâmetros ordenados e o maior valor"}
                                 tags={["html","css","javascript"]}
                                 date={"31 Out. 2022"}
                                 imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/atividade9.png"}
                                 link={"https://pwebatividade9.netlify.app"}
                                 />
                            <ProjectComponents
                                  name={"Website utilizando componentes básicos do html"}
                                  tags={["html","css"]}
                                  date={"5 Set. 2022"}
                                  imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/atividade3.png"}
                                  link={"https://pwebatividade3.netlify.app"}
                                 />
                            <ProjectComponents
                                 name={"Projetos de Design"}
                                 tags={["Adobe","Photoshop","Illustrator"]}
                                 date={"10 Out. 2018"}
                                 imgSrc={"https://raw.githubusercontent.com/MateusJunio016/imagensPortfolio/main/Cartão%20de%20Visitas%20-%20Frente.jpg"}
                                 link={"https://github.com/MateusJunio016/imagensPortfolio/raw/main/Projetos.pdf"}
                                 />
                        </Grid>
                    </Center>

                    <BigTitle text="PROJETOS" top="5rem" left="5rem" />
                </Container>
            </MainContainer>
        </Suspense>
    );
}

export default ProjectsPage;