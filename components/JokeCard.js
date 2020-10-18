import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const JokeCard = (props) => {
    return (
        <View style={styles.card} >
            <Text style={styles.cardText} >{props.joke.setup}</Text>
            <Text style={styles.cardText} >{props.joke.punchline}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginHorizontal: '15%',
        marginVertical: 10,
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    cardText: {
        fontSize: 28,
        paddingVertical: 15,
        color: "black"
    }
});

export default JokeCard
