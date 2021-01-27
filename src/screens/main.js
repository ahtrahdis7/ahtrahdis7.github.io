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
import CodeIcon from '@material-ui/icons/Code';

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
                            <Container style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignContent: 'space-between'
                            }}>
                                <Typography variant="h5" style={{
                                    flexGrow: 1,
                                    color: 'black',
                                    fontFamily: 'ComicNeue'
                                }}>Ahtrahdis7</Typography>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems:  'flex-end'
                                }}>
                                    <a href="#experience" style={{
                                        color: 'white'
                                    }}>
                                    <Typography variant="h6" style={{
                                        flexGrow: 1,
                                        color: 'black',
                                        fontFamily: 'ComicNeue',
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}> Experience</Typography>
                                    </a>
                                    <a href="#projects" style={{
                                        color: 'white'
                                    }}>
                                    <Typography variant="h6" style={{
                                        flexGrow: 1,
                                        color: 'black',
                                        fontFamily: 'ComicNeue',
                                        marginLeft: 10,
                                        marginRight: 10
                                    }}>Projects</Typography>
                                    </a>
                                </div>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </div>
                <Divider />
                <div id="about">
                    <About />
                </div>
                <Divider style={{
                    height: 1
                }}  />
                <div id="experience">
                    <Experience />
                </div>
                <Divider />
                <div id="projects">
                    <Projects />
                </div>
                <Divider />
                <div>
                    <h1>Footer</h1>
                </div>
                {/* <Social /> */}
            </div>
        )
    }
}

export default Main;