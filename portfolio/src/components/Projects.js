import React from 'react'
import './Projects.css'
import styled from 'styled-components'

const ProjectsBox = styled.div`
    height: 40em;
`

const Title = styled.h1`
    font-size: 5em;
    text-align: center;
`

const Projects = () => {
    return(
    <ProjectsBox id="Projects">
    <Title>Projects: </Title>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>   
    </ProjectsBox>
    )
}

export default Projects