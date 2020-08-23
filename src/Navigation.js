import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import Home from './view/Home'
import Login from './view/Login'
import Cadastro from './view/Cadastro'
import RedefiniSenha from './view/RedefiniSenha'
import Index from './view/index'

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                  <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />
                <Stack.Screen
                    name="RedefiniSenha"
                    component={RedefiniSenha}
                />
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}