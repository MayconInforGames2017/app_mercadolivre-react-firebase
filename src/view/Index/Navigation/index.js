import React from 'react';
import { TouchableOpacity, TextInput, View, Alert } from 'react-native';
import { createNavigatorFactory, createStackNavigator } from "@react-navigation/stack";

import Main from '../Main'

const Stack = createStackNavigator();

export default function Navigation () {
    return(
        <Stack.Navigator>
            <Stack.Screen
                component={Main}
                name="Main" 
            />
        </Stack.Navigator>
    );
} 

