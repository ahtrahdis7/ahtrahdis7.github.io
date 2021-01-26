import React from 'react'
import {
    Typography,
    Card,
    Paper
} from '@material-ui/core';

class Projects extends React.Component {

    render() {
        return(
            <div style={{
                marginTop: '1cm',
                marginBottom: '1cm'
            }}>
                <Typography variant="h1" style={{
                    fontFamily: 'ComicNeue'
                }}>Projects</Typography>
            </div>
        )
    }
}

export default Projects;
