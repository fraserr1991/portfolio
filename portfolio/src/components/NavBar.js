import React from 'react'
import {HashLink} from 'react-router-hash-link'

const NavBar = () => {
    return(
    <div id="NavBar">
        <HashLink to="#AboutMe">AboutMe</HashLink>
        <HashLink to="#Skills">Skills</HashLink>
        <HashLink to="#Projects">Projects</HashLink>
        <HashLink to="#Contact">Contact</HashLink>
    </div>
    )
}

export default NavBar