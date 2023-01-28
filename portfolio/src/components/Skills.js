import React from 'react'
import './Skills.css'
import styled from 'styled-components'
import {Fade} from 'react-reveal'

const SkillsBox = styled.div`
    height: 45em;
`

const Title = styled.h1`
    font-size: 5em;
    text-align: center;
`

const Paragraph = styled.p`
    font-size: 2em;
`

const Skills = () => {
    return(
        <SkillsBox id="Skills">
        <Fade left>
        <Title>I've covered: </Title>
        </Fade>
        <Fade right>
            <div>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-mysql-plain-wordmark colored"></i>
            <i class="devicon-postgresql-plain-wordmark colored"></i> 
            <Paragraph>On a journey to become a full-stack developer</Paragraph> 
            </div>    
        </Fade>
        </SkillsBox>
        )
}

export default Skills