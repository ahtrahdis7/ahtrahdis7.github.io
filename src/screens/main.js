import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Social from '../components/Social';

class Main extends React.Component{

    render(){

        return(
            <div>
                <div style={{
                    flexGrow: 1
                }}>
                    <AppBar position='fixed'>
                        <Toolbar style={{
                            backgroundColor: 'white'
                        }}>
                            <Container>
                                <Typography variant="h5" style={{
                                    flexGrow: 1,
                                    color: 'black',
                                    fontFamily: 'ComicNeue'
                                }}>Ahtrahdis7</Typography>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </div>
                <Divider />
                <About />
                <Divider style={{
                    height: 1
                }}  />
                <Experience />
                <Divider />
                <Projects />
                <Divider />
                <div>
                    <h1>Footer</h1>
                </div>
                <Social />
            </div>
        )
    }
}

export default Main;