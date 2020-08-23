import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'

export default function RedefiniSenha() {
    return (
        <View style={styles.container}>
            <img src={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-addressl"
                    autoCapitalize="none"
                    placeholder="Email"
                    style={styles.input}
                />
            </View>
            <Button style="outline" onPress={false}><Text style={styles.text_primary}>ENTRAR</Text></Button>
        </View>
    );
} 

