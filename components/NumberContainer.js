import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import color from '.../constants/color';

const NumberContainer = props => {
    return (
      <View style = {styles.container}>
        <Text style = {styles.number}>{props.children}</Text>
      </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 7,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: color.accent,
        fontSize: 22
    }
});

export default NumberContainer; 