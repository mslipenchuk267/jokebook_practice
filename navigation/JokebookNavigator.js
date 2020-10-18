import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';

const JokebookTabNavigator = createBottomTabNavigator();
const HomeStackNavigator = createStackNavigator();
const SavedJokesStackNavigator = createStackNavigator();

/**
 * The HomeNavigator represents the home tab
 * in the bottom tab navigator. It manages all the screens
 * meant to be shown in the home tab. 
 * @example
 * return (
 *   <HomeNavigator />
 * )
 */
export const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}

            />
        </HomeStackNavigator.Navigator>
    )
}

/**
 * The SavedJokesNavigator represents the book tab
 * in the bottom tab navigator. It manages all the screens
 * meant to be shown in the book tab. 
 * @example
 * return (
 *   <SavedJokesNavigator />
 * )
 */
export const SavedJokesNavigator = () => {
    return (
        <SavedJokesStackNavigator.Navigator>
            <SavedJokesStackNavigator.Screen
                name="Book"
                options={{
                    title: "Saved Jokes",
                    headerTitleStyle: {
                        fontSize: 30,
                        paddingBottom: 10,
                        color: 'tomato'
                    }
                }}
                component={BookScreen}
            />
        </SavedJokesStackNavigator.Navigator>
    )
}

/**
 * The JokebookNavigator represents the 
 * bottom tab navigator. It manages each
 * tabs respective navigators. 
 * @example
 * return (
 *   <JokebookNavigator />
 * )
 */
export const JokebookNavigator = () => {
    return (
        <JokebookTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Book') {
                        iconName = 'book';
                    }
                    // You can return any component that you like here!
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <JokebookTabNavigator.Screen
                name="Home"
                component={HomeNavigator}
            />
            <JokebookTabNavigator.Screen
                name="Book"
                component={SavedJokesNavigator}
            />
        </JokebookTabNavigator.Navigator>
    )
}