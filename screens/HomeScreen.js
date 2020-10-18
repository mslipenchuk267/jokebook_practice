import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { CustomButton } from '../components/CustomButton';
import JokeCard from '../components/JokeCard';
import * as jokeActions from '../store/actions/jokes';
import { exampleJoke } from '../data/dummy-data';

const HomeScreen = () => {
    const currentJoke = useSelector((state) => state.jokes.currentJoke)
    console.log(currentJoke)
    const dispatch = useDispatch();

    const handleLaughButtonPress = () => {
        console.log("Laugh Button Pressed")
        dispatch(jokeActions.saveJoke(currentJoke))
        dispatch(jokeActions.getNewJoke());
    }

    const handleLameButtonPress = () => {
        console.log("Lame Button Pressed")
        dispatch(jokeActions.getNewJoke());
    }

    const handleRandomJokeButtonPress = () => {
        console.log("Random Joke Button Pressed")
        dispatch(jokeActions.getNewJoke());
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Jokebook</Text>
            </View>
            <JokeCard joke={currentJoke} />
            <View style={styles.reactionButtonContainer} >
                <CustomButton onPressHandler={handleLaughButtonPress}>😂</CustomButton>
                <CustomButton onPressHandler={handleLameButtonPress}>😑</CustomButton>
            </View>
            <CustomButton
                onPressHandler={handleRandomJokeButtonPress}
                style={{paddingVertical: 10}}
                textSize={28}
            >
                Random Joke 🔀
            </CustomButton>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reactionButtonContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 30
    },
    jokeBookButton: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        marginTop: 30
    },
    titleContainer: {
        position: 'absolute',
        top: '10%'
    },
    titleText: {
        fontSize: 50,
        color: 'tomato',
        fontFamily: 'MarkerFelt-Wide'
    }
});

export default HomeScreen;