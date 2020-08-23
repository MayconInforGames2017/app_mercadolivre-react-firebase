import React from 'react';
import { View, Te, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <img src={logo} />
            <Button style="outline" onPress={() => navigation.navigate('Login')}><Text>ENTRAR</Text></Button>
            <Button><Text style={styles.text_white}>CRIAR CONTA</Text></Button>
        </View>
    );
} 

