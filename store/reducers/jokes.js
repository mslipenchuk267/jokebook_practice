import {
    SET_CURRENT_JOKE,
    SET_SAVED_JOKES,
    SAVE_JOKE,
    REMOVE_SAVED_JOKE,
    DID_STARTUP
} from "../actions/jokes"

const initialState = {
    currentJoke: null,
    savedJokes: [],
    didStartup: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_JOKE:
            return {
                ...state,
                currentJoke: action.joke
            }
        case SET_SAVED_JOKES:
            return {
                ...state,
                savedJokes: action.savedJokes
            }
        case SAVE_JOKE:
            return {
                ...state,
                savedJokes: state.savedJokes.concat(action.joke)
            }
        case REMOVE_SAVED_JOKE:
            const savedJokeIndex = state.savedJokes.findIndex(joke => joke.id === action.joke.id)
            const updatedSavedJokes = [...state.savedJokes];
            if (savedJokeIndex >= 0) {
                updatedSavedJokes.splice(savedJokeIndex, 1); // remove joke at its index
            }
            return {
                ...state,
                savedJokes: updatedSavedJokes
            }
        case DID_STARTUP:
            return {
                ...state,
                didStartup: true
            }
        default:
            return state;
    }
}