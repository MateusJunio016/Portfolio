import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/code.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import {Projects} from '../data/ProjectsData';
import ProjectComponents from '../components/ProjectComponents'
import AnchorComponent from '../subComponents/Anchor'

const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const ProjectsPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])

    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent numbers={numbers}/>
                <Center>

                    <Grid>
                        {
                            Projects.map(project => {
                                return <ProjectComponents key={project.id} project={project} />
                            })
                        }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    )
}

export default ProjectsPage