import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Header = props => {
    return (
        <View style ={styles.header}>
            <Text style={styles.headTitle}> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: colors.khairColor,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headTitle: {
    color: 'white',
    fontSize: 26,
    
  },
});

export default Header;