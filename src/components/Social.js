import React from 'react'
import {
    Typography,
    // Card,
    // Paper,
    IconButton
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

class Social extends React.Component {

    render() {
        return(
            <div style={{
                position: 'fixed',
                right: 10,
                top: '70%',
                padding: '10',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                <GitHubIcon style={{ fontSize: 50 }} />
                <LinkedInIcon style={{ fontSize: 50 }}   />
                <MailIcon style={{ fontSize: 50 }}  />
                <InstagramIcon style={{ fontSize: 50 }} />
            </div>
        )
    }
}

export default Social;
