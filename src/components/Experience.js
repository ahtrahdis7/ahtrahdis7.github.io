import React from 'react'
import {
    Typography,
    // Card,
    // Paper
    Container,
    Card
} from '@material-ui/core';
// import terminal from '../images/terminal.png'
import { ExpData } from './ExperienceData';
import { Divider } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

class ExpCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: true,
            // data: props.exp
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => {
            return{
                show: !prevState.show
            }
        })
    }

    render() {
        const exp = this.props.exp;
        return(
            <Card key={exp.key} style={{
                padding: 10,
                margin: 0
            }} raised={true} >
                <div style={{

                }}>
                    <Typography style={{
                        fontFamily: 'ComicNeue',
                        color: '#293863'
                    }} variant="h6">{exp.company}</Typography>
                    <Typography style={{
                        fontFamily: 'ComicNeue',
                        color: 'grey'
                    }} variant="h6" >{exp.position}</Typography>
                </div>
                {
                    this.state.show ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'flex-start',
                        }}>
                            {
                                exp.tasks.map(task => { return (<Typography style={{
                                    fontFamily: 'ComicNeue',
                                    color: 'grey'
                                }} variant="h7" >{task}</Typography>) })
                            }
                        </div>
                    ):(<div></div>)
                }
                {
                    this.state.show ? (
                        <div style={{
                            // display: 'flex',
                            // flexDirection: 'row',
                            // alignItems: 'flex-start',
                            // flexWrap: 'wrap',
                        }}>
                            {
                                exp.techstack.map(stack => {return(<Typography style={{
                                    fontFamily: 'ComicNeue',
                                    color: 'greyblue',
                                    marginLeft: 1
                                }} variant="h7">{stack},</Typography>)})
                            }
                        </div>
                    ):(<div style={{
                        textAlign: 'center'
                    }}>
                        <ArrowDropDownIcon style={{color: 'grey'}} />
                    </div>)
                }


            </Card>
        )
    }
}


class Experience extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount (){

    }
    render() {
        console.log(ExpData)
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
                    }} variant="h4" >Work Experience</Typography>
                    <Timeline align="alternate">
                        {
                            ExpData.map((exp) =>  {
                                return (
                                    <TimelineItem>
                                        <TimelineOppositeContent>
                                            <Typography color={exp.key%2 == 0 ? "primary" : "secondary"}>{exp.from}</Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot variant="outlined" color={exp.key%2 == 0 ? "primary" : "secondary"} />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <ExpCard exp={exp} />
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })
                        }
                    </Timeline>
                    
                </Container>
            </div>
        )
    }
}

export default Experience;
