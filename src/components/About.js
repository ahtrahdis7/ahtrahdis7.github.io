import React from 'react'
import ProfilePic from './prf.jpeg';
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
import flask from '../tech_Icons/flask.png'
// import cpp from '../tech_Icons/c++.png'
import mui from '../tech_Icons/mui.png'
import mongo from '../tech_Icons/mongo.png'
import tfjs from '../tech_Icons/tfjs.png'
import Social from './Social';

class About extends React.Component {

    render() {
        return(
            <div style={{
                marginTop: '2cm',
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
                        <Grid item xs={12} md={6}>
                            <div style={{
                                textAlign: 'center',
                                    // marginTop: 10,
                                    // padding: 10,
                                    // marginLeft: 40,
                            }}>
                                <img src={ProfilePic} height="400" width="400" alt='prof' />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{
                                    // flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    height: 400,
                                    // paddingTop: 10,
                                    // paddingBottom: 10,
                            }}>
                                <Typography variant="h5" style={{
                                    color: '#c2c2c2',
                                    fontFamily: 'ComicNeue'
                                }}>Hey There,</Typography>
                                <Typography variant="h2" style={{
                                color: '#c2c2c2',
                                fontFamily: 'ComicNeue'
                                }}>I'm <span style={{color: '#293863'}}>Sidhartha</span> </Typography>
                                <Typography variant="h3" style={{
                                    color: '#c2c2c2',
                                    fontFamily: 'ComicNeue'
                                }}>React Native Developer</Typography>
                                <Typography variant="h4" style={{
                                    color: '#c2c2c2',
                                    fontFamily: 'ComicNeue'
                                }}>Full Stack Javascript</Typography>
                                <Typography variant="h5" style={{
                                    color: '#c2c2c2',
                                    fontFamily: 'ComicNeue'
                                }}>Machine Learning Engineer</Typography>
                                <Typography variant="h6" style={{
                                    color: '#c2c2c2',
                                    fontFamily: 'ComicNeue'
                                }}>With a keen inclination towards the open source ecosystem.</Typography>
                                <Social />
                            </div>
                        </Grid>
                    </Grid>
                    
                </Container>
                {/* <Divider variant='fullWidth' /> */}
                <Container>
                    <div style={{
                        // paddingLeft: '10%',
                        // paddingRight: '10%',
                        // marginBottom: '1cm',
                        // marginTop: '1cm',
                    }}>
                        <Typography variant="h4" style={{
                            color: '#c2c2c2',
                            fontFamily: 'ComicNeue',
                            textAlign: 'center',
                        }}>I have experience in</Typography>
                        <Divider />
                        <Typography variant="h6" 
                            style={{
                                fontFamily: 'ComicNeue',
                                textAlign: 'justify',
                                color: '#c2c2c2',
                                // fontWeight: 500,
                            }}> React Native Apps, React Web Apps, REST apis using nodejs and flask,
                                developing and deploying Machine Learning Models on Web and App (using tensorflow.js).
                                I am always intrigued by and ready to work new technologies.
                                Computer Vision and Conversational AI interests me a lot.
                                I am accquainted with Neural Networks, Deep Learning Algorithms, Machine Learning Algorithms and more.
                        </Typography>
                    </div>
                    {/* <br></br> */}
                    {/* <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        padding: 10,
                        paddingLeft: '10%',
                        paddingRight: '10%',
                    }}> */}
                        {/* <img src={js} height="60" width="60" alt='js' /> */}
                        {/* <img src={html} height="60" width="60" /> */}
                        {/* <img src={tfjs} height="80" width="140"  alt="tfjs" /> */}
                        {/* <img src={expo} height="60" width="80" alt='expo' /> */}
                        {/* <img src={aws} height="60" width="80" alt='aws' /> */}
                        {/* <img src={rn} height="60" width="60" /> */}
                        {/* <img src={react} height="80" width="110" alt='react' /> */}
                        {/* <img src={java} height="60" width="60" /> */}
                        {/* <img src={mongo} height="60" width="150" alt="mongo" /> */}
                        {/* <img src={flask} height="60" width="60" alt="flask" /> */}
                        {/* <img src={mui} height="80" width="80"  alt='mui'/> */}
                        {/* <img src={mmui} height="60" width="100" /> */}
                        {/* <img src={redux} height="60" width="60" alt='redux' /> */}
                        {/* <img src={cpp} height="60" width="60" /> */}
                        {/* <img src={nav} height="60" width="60" alt='nav' /> */}
                        {/* <img src={node} height="80" width="100" /> */}
                    {/* </div> */}
                    {/* <img src={node} height="80" width="80" /> */}
                </Container>
            </div>
        )
    }
}

export default About;
