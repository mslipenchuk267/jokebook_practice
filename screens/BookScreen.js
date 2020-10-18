import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';

import * as jokeActions from '../store/actions/jokes';
import JokeCard from '../components/JokeCard';
import { savedJokes } from '../data/dummy-data';

const BookScreen = () => {
    const savedJokes = useSelector(state => state.jokes.savedJokes)
    const dispatch = useDispatch();
    const handleJokePress = (joke) => {
        Alert.alert(
            'Delete Joke?',
            '',
            [
                {
                    text: "Yes",
                    onPress: () => {
                        console.log("Deleting", joke);
                        dispatch(jokeActions.removeSavedJoke(joke));
                    },
                    style: 'destructive'
                },
                {
                    text: "No",
                    onPress: () => console.log("Canceled deleting", joke),
                    style: "cancel"
                }
            ],
            { cancelable: false }
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
                data={savedJokes.reverse()}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{overflow: 'visible' }}
                        onPress={handleJokePress.bind(this, item)}
                    >
                        <JokeCard joke={item} />
                    </TouchableOpacity>
                )}
            />
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
    titleText: {
        fontSize: 50,
        paddingBottom: 30
    },
    jokesContainer: {
    }
});

export default BookScreen;