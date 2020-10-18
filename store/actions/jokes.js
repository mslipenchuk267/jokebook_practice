export const SET_CURRENT_JOKE = "SET_CURRENT_JOKE";
export const SET_SAVED_JOKES = "SET_SAVED_JOKES";
export const SAVE_JOKE = "SAVE_JOKE";
export const REMOVE_SAVED_JOKE = "REMOVE_SAVED_JOKE";
export const DID_STARTUP = "DID_STARTUP";

import { AsyncStorage } from 'react-native';


export const getNewJoke = () => {
    return async (dispatch) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const result = await fetch("https://official-joke-api.appspot.com/random_joke", requestOptions);
        const resData = await result.json();

        if (resData.id) {
            dispatch({ type: SET_CURRENT_JOKE, joke: resData })
        } else {
            Alert.alert('Could not get new Joke', 'Please try again')
        }
    }
}

export const setSavedJokes = () => {
    return async (dispatch) => {
        const savedJokes = await getSavedJokes();
        dispatch({ type: SET_SAVED_JOKES, savedJokes: savedJokes }) 
    }
}

export const saveJoke = (joke) => {
    return async (dispatch, getState) => {
        dispatch({ type: SAVE_JOKE, joke: joke }) 
        // now that state is updated, update secure store
        await deleteSavedJokes();
        const savedJokes = [...getState().jokes.savedJokes];
        await saveSavedJokes(savedJokes);
    }
}

export const removeSavedJoke = (joke) => {
    return async (dispatch, getState) => {
        console.log("joke to be removed", joke);
        dispatch({ type: REMOVE_SAVED_JOKE, joke: joke })
        // now that state is updated, update secure store
        await deleteSavedJokes();
        const savedJokes = [...getState().jokes.savedJokes];
        await saveSavedJokes(savedJokes);
    }
    
}

export const didStartup = () => {
    return { type: DID_STARTUP }
}


export const deleteSavedJokes = async () => {
    try {
        await AsyncStorage.removeItem('savedJokes')
        console.log("Deleted savedJokes from async storage")
    } catch (err) {
        console.log("Could not delete savedJokes from async storage", err)
    }
}


export const saveSavedJokes = async (savedJokes) => {
    try {
        await AsyncStorage.setItem('savedJokes', JSON.stringify(savedJokes)) // make a string
        console.log("Saved savedJokes to async storage")
    } catch (err) {
        console.log("Could not save savedJokes to async storage", err)
    }
}

export const getSavedJokes = async () => {
    try {
        const savedJokes = await AsyncStorage.getItem('savedJokes');
        if (savedJokes) {
            const transformedSavedJokes = JSON.parse(savedJokes); // make json
            console.log("Retrieved savedJokes from async storage", transformedSavedJokes)
            return transformedSavedJokes;
        } else {
            console.log("No savedJokes found in async storage");
            return [];
        }
    } catch (err) {
        console.log("Could not get savedJokes from async storage", err)
        return [];
    }
}