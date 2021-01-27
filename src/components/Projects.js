import React from 'react'
import {
    Typography,
    // Card,
    // Paper
    Container
} from '@material-ui/core';

class Projects extends React.Component {

    render() {
        return(
            <div style={{
                marginTop: '1cm',
                marginBottom: '1cm'
            }}>
                <Container>
                    <Typography style={{
                        fontFamily: 'ComicNeue',
                        color: 'grey',
                        marginBottom: '1cm'
                    }} variant="h4" >Projects</Typography>
                    
                </Container>
            </div>
        )
    }
}

export default Projects;
