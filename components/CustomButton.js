import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPressHandler}
            activeOpacity={0.5}
            style={{
                ...styles.button,
                ...props.style,
                backgroundColor: props.buttonColor || styles.button.backgroundColor
            }}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: props.textColor || styles.buttonText.color,
                    fontSize: props.textSize || styles.buttonText.fontSize
                }}
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginHorizontal: '13%',
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
    buttonText: {
        color: "black",
        fontSize: 40
    }
});
