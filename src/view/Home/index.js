import React from 'react';
import { View, Te, Image, TextInput } from 'react-native';

import  styles from './styles';

import logo from '../../../assets/logo.png';

export default function Home() {
    return (
        <View style={styles.container}>
            <img src={logo} />
        </View>
    );
} 

