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
import Medium from './medium.svg'

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
                
                <a href="https://github.com/ahtrahdis7" target="_blank"><GitHubIcon style={{ fontSize: 30, color: 'white' }} /> </a>
                <a href="https://www.linkedin.com/in/mallicksidhartha7/" target="_blank"><LinkedInIcon style={{ fontSize: 30, color: 'white' }}   /></a>
                <a href="mailto:mallicksidhartha7@gmail.com" ><MailIcon style={{ fontSize: 30, color: 'white' }}  /></a>
                <a href="https://www.instagram.com/sidhartha.m7/" target="_blank"><InstagramIcon style={{ fontSize: 30, color: 'white' }} /></a>
                <a href="https://open.spotify.com/user/31befgzrzqebeulnax65copcgtre" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify-icon.png" width="30px" alt="spotify"/>
                </a>
                {/* <a href="https://medium.com/@ahtrahdis7" target="_blank">
                    <img src="data:image/png;base64,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" 
                    width="30px" alt="medium"/>
                </a>	 */}
            </div>
        )
    }
}

export default Social;
