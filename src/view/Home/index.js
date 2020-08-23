import React from 'react';
import { View, Te, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png';

export default function Home() {
    return (
        <View style={styles.container}>
            <img src={logo} />
            <Button style="outline"><Text>Teste</Text></Button>
            <Button style="outline"><Text>Teste</Text></Button>
        </View>
    );
} 

