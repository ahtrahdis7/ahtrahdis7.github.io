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
// import Social from '../components/Social';
// import CodeIcon from '@material-ui/icons/Code';

const NavBar = () => {
    return(
        <div>
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
                            <a href="https://www.linkedin.com/in/mallicksidhartha7/" style={{
                                color: 'white'
                            }}>
                            <Typography variant="h6" style={{
                                flexGrow: 1,
                                color: 'black',
                                fontFamily: 'ComicNeue',
                                marginLeft: 10,
                                marginRight: 10,
                            }}> Work</Typography>
                            </a>
                            <a href="https://www.linkedin.com/in/mallicksidhartha7/" style={{
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
    )
}

class Main extends React.Component{

    render(){

        return(
            <div>
                <div style={{
                    flexGrow: 1
                }}>
                    <NavBar />
                </div>
                <Divider />
                <div id="about">
                    <About />
                </div>
                <Divider style={{
                    height: 1
                }}  />
                <div id="experience">
                    {/* <Experience /> */}
                </div>
                <Divider />
                <div id="projects">
                    {/* <Projects /> */}
                </div>
                <Divider />
                <div>
                    <div style={{
                        marginTop: '1cm',
                        marginBottom: '1cm'
                    }}>
                        <Container>
                            <Typography style={{
                                fontFamily: 'ComicNeue',
                                color: 'grey',
                                marginBottom: '1cm'
                            }} variant="h4" >Footer</Typography>
                            
                        </Container>
                    </div>
                </div>
                {/* <Social /> */}
            </div>
        )
    }
}

export default Main;