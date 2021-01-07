import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import {
//   SafeAreaView,
//   StyleSheet,
  // ScrollView,
  View,
  // Text,
//   StatusBar,
} from 'react-native';

import Taskit from './src/TaskitNavigator'

export default function App() {
    return (
        <NavigationContainer>
            <Taskit />
        </NavigationContainer>
    )
};

