import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { JokebookNavigator } from './JokebookNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = (props) => {
    const didStartup = useSelector(state => state.jokes.didStartup);

    return (
        <NavigationContainer>
            { didStartup === false && <StartupScreen />}
            { didStartup === true && <JokebookNavigator />}
        </NavigationContainer>
    )
}
export default AppNavigator;