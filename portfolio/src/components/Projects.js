import React from 'react'
import './Projects.css'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 3em;
    text-align: center;
`

const Projects = () => {
    return(
    <div id="Projects">
    <Title>I've covered: </Title>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-python-plain-wordmark colored"></i>
        <i class="devicon-css3-plain-wordmark colored"></i>
        <i class="devicon-html5-plain-wordmark colored"></i>
        <i class="devicon-mysql-plain-wordmark colored"></i>
        <i class="devicon-postgresql-plain-wordmark colored"></i>      
    </div>
    )
}

export default Projects