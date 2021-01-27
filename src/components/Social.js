import React from 'react'
// import {
//     Typography,
//     // Card,
//     // Paper,
//     IconButton
// } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

class Social extends React.Component {

    render() {
        return(
            <div style={{
                // position: 'fixed',
                // right: 10,
                // top: '70%',
                padding: '10',
                marginTop: '1cm',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                
                <a href="https://github.com/ahtrahdis7" ><GitHubIcon style={{ fontSize: 30, color: 'grey' }} /> </a>
                <a href="https://www.linkedin.com/in/mallicksidhartha7/" ><LinkedInIcon style={{ fontSize: 30, color: 'grey' }}   /></a>
                <a href="mailto:mallicksidhartha7@gmail.com" ><MailIcon style={{ fontSize: 30, color: 'grey' }}  /></a>
                <a href="https://www.instagram.com/sidmallick7/" ><InstagramIcon style={{ fontSize: 30, color: 'grey' }} /></a>
            </div>
        )
    }
}

export default Social;
