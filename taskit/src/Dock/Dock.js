import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './styles'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const data = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]

class Dock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {

    }

    render() {

        return(
            <View>
                {
                    data.map((u, i) => {
                    return (
                        <Card>
                            <Card.Title>{u.name}</Card.Title>
                            <Card.Divider/>
                            <View key={i} style={styles.user}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                                <Button
                                icon={<Icon name='add' color='#ffffff' />}
                                buttonStyle={{borderRadius: 0, marginLeft: 100, marginRight: 100, marginBottom: 0}}
                                title='VIEW NOW' />
                            </View>
                         </Card>

                        );
                    })
                }
            </View>
        )
    }
}

export default Dock