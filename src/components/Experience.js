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
// const Tasks = (props) => {
//     const [show, setShow] = React.useState(false);

//     if(show) {
//         return(
//             <div>True</div>
//         )
//     } else {
//         return(
//             <div>False</div>
//         )
//     }
// }

class ExpCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: false,
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
            <Card key={exp.key} onClick={this.handleClick} style={{
                padding: 10,
                margin: 10
            }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Typography style={{
                        fontFamily: 'ComicNeue',
                        color: '#293863'
                    }} variant="h6">{exp.company}</Typography>
                    <Typography style={{
                        fontFamily: 'ComicNeue',
                        color: '#293863'
                    }} variant="h7">{exp.from} - {exp.to}</Typography>
                </div>
                <div>
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
                            alignItems: 'flex-start',
                        }}>
                            <Divider />
                            {
                                exp.tasks.map(task => { return (<Typography style={{
                                    fontFamily: 'ComicNeue',
                                    color: 'grey'
                                }} variant="h7" >{task}</Typography>) })
                            }
                            <Divider />
                        </div>
                    ):(<div></div>)
                }
                {
                    this.state.show ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                        }}>
                            {
                                exp.techstack.map(stack => {return(<Typography style={{
                                    fontFamily: 'ComicNeue',
                                    color: 'grey',
                                    marginLeft: 5
                                }} variant="h7">{stack}</Typography>)})
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
                    {
                        ExpData.map((exp) =>  {
                            return <ExpCard exp={exp} />
                        })
                    }
                </Container>
            </div>
        )
    }
}

export default Experience;
