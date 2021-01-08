import React from 'react'
import { 
    Text, 
    View, 
    Image,
    StatusBar 
} from 'react-native';
import styles from './styles'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

const data = [
    {
       name: 'random-item',
       avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
    {
        name: 'random-item',
        avatar: 'https://images.unsplash.com/photo-1571915096107-c6606c216058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80'
    },
   ]

class Dock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    componentDidMount() {

    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='black' barStyle='light-content' />
                <SearchBar
                    selectionColor="#fff"
                    placeholderTextColor="#fff"
                    placeholder="Search Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <ScrollView style={{
                    marginBottom: 50
                }}>
                {
                    data.map((u, i) => {
                        return (
                            <Card key={i}>
                                <View style={styles.cardView}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: u.avatar }}
                                        />
                                    </View>
                                    <View style={styles.cardRight}>
                                       <Text style={{
                                           textAlign: 'center',
                                           fontSize: 25,
                                           fontFamily: 'ComicNeue-Regular'
                                       }}>{u.name}</Text>
                                       <View style={{
                                           flexDirection: 'row',
                                           justifyContent: 'space-around'
                                       }}>
                                            <Icon raised name="add" type="material" size={30}/>
                                            <Text style={{fontSize: 30, alignSelf: 'center', fontFamily: 'ComicNeue-Regular'}}>{5}</Text>
                                            <Icon raised name="remove" type="material" size={30}/>
                                       </View>
                                    </View>
                                </View>
                            </Card>
                            );
                        })
                }
                </ScrollView>
                <View style={{
                    position: 'absolute',
                    bottom: 80

                }}>
                    <Icon raised solid={true} name="camera" type="font-awesome-5" color='deeppink'  size={40}/>
                </View>
                
            </View>
        )
    }
}

export default Dock