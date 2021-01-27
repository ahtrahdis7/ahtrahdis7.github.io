import React from 'react'
import {
    Typography,
    // Card,
    // Paper
    Container
} from '@material-ui/core';
import terminal from '../images/terminal.png'
class Experience extends React.Component {

    render() {
        return(
            <div style={{
                marginTop: '1cm',
                marginBottom: '1cm'
            }}>
                <Container>
                    <img src={terminal} height="75" width="75" />
                </Container>
            </div>
        )
    }
}

export default Experience;
