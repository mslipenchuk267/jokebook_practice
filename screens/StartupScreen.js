import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { savedJokes } from '../data/dummy-data';
import * as jokeActions from '../store/actions/jokes';

const StartupScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryStartup = async () => {
            // get a joke
            await dispatch(jokeActions.getNewJoke());
            await dispatch(jokeActions.setSavedJokes());
            dispatch(jokeActions.didStartup())
            return;
        };
        tryStartup();
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <Text>This is the startup screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    }
});

export default StartupScreen;
