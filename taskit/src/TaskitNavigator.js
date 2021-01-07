import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Records from './Records/Records'
import Dock from './Dock/Dock'
import Current from './Current/Current'

const TabNavigator = createBottomTabNavigator()


class Taskit extends React.Component{

    render() {
        return (
            <NavigationContainer>
                <TabNavigator.Navigator>
                    <TabNavigator.Screen  />
                    <TabNavigator.Screen />
                    <TabNavigator.Screen />
                </TabNavigator.Navigator>
            </NavigationContainer>
        )
    }
}

export default Taskit