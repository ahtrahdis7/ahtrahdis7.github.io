import React from 'react'
import ProfilePic from '../images/profile.png';
import {
    Typography,
    // Card,
    // Paper,
    Container,
    Grid,
    Divider
} from '@material-ui/core';
// import rn from '../tech_Icons/RN.png'
import aws from '../tech_Icons/aws.png'
import expo from '../tech_Icons/expo.png'
// import html from '../tech_Icons/html.png'
// import css3 from '../tech_Icons/css3.png'
import js from '../tech_Icons/js.png'
// import java from '../tech_Icons/java.png'
import redux from '../tech_Icons/redux.png'
import nav from '../tech_Icons/nav.png'
// import mmui from '../tech_Icons/mmui.png'
// import node from '../tech_Icons/node.png'
import react from '../tech_Icons/react.png'
// import flask from '../tech_Icons/flask.png'
// import cpp from '../tech_Icons/c++.png'
import mui from '../tech_Icons/mui.png'
import mongo from '../tech_Icons/mongo.png'

class About extends React.Component {

    render() {
        return(
            <div style={{
                marginTop: '3cm',
                marginBottom: '1cm',
                // padding: 5,
            }}>
                {/* <Typography variant="h1" style={{
                    fontFamily: 'ComicNeue'
                }}>About</Typography> */}
                <Container style={{
                    marginBottom: '1cm'
                }}>
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <div style={{
                                    padding: 5,
                            }}>
                                <img src={ProfilePic} height="400" width="400" alt='prof' />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <div style={{
                                    // flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    height: 400,
                                    padding: 10,
                            }}>
                                <Typography variant="h5" style={{
                                fontFamily: 'ComicNeue'
                                }}>I am a </Typography>
                                <Typography variant="h3" style={{
                                    fontFamily: 'ComicNeue'
                                }}>React Native App Developer</Typography>
                                <Typography variant="h4" style={{
                                    fontFamily: 'ComicNeue'
                                }}>Full Stack Javascript Developer</Typography>
                                <Typography variant="h5" style={{
                                    fontFamily: 'ComicNeue'
                                }}>Machine Learning Engineer</Typography>
                                <Typography variant="h6" style={{
                                    fontFamily: 'ComicNeue'
                                }}>With a keen inclination towards open source ecosystem.</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    
                </Container>
                <Divider variant='fullWidth' />
                <Container>
                    <Typography variant="h6" 
                        style={{
                            marginTop: '1cm',
                            marginBottom: '1cm',
                            fontFamily: 'ComicNeue',
                            textAlign: 'center',
                            padding: 10,
                        }}>I have developed various React Native Apps along with Web Apps using react and REST apis using nodejs and flask.<br/>
                            I also have experience in developing and deploying
                        Machine Learning Apps.<br/>
                            Computer Vision and Conversational AI interests me a lot. Quantum Computation is yet to come. 😉
                    </Typography>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        padding: 10,
                    }}>
                        <img src={js} height="80" width="80" alt='js' />
                        {/* <img src={html} height="80" width="80" /> */}
                        {/* <img src={css3} height="80" width="80" /> */}
                        <img src={expo} height="80" width="100" alt='expo' />
                        <img src={aws} height="80" width="100" alt='aws' />
                        {/* <img src={rn} height="80" width="80" /> */}
                        <img src={react} height="100" width="130" alt='react' />
                        {/* <img src={java} height="80" width="60" /> */}
                        <img src={mongo} height="80" width="210" />
                        {/* <img src={flask} height="80" width="80" /> */}
                        <img src={mui} height="100" width="100"  alt='mui'/>
                        {/* <img src={mmui} height="80" width="100" /> */}
                        <img src={redux} height="80" width="80" alt='redux' />
                        {/* <img src={cpp} height="80" width="80" /> */}
                        <img src={nav} height="80" width="80" alt='nav' />
                        {/* <img src={node} height="80" width="100" /> */}
                    </div>
                    {/* <img src={node} height="80" width="80" /> */}
                </Container>
            </div>
        )
    }
}

export default About;
