import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // Text,
  StatusBar,
} from 'react-native';
import Taskit from './src/TaskitNavigator'

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Taskit />
            </SafeAreaView>
        </>
    );
};

export default App;
