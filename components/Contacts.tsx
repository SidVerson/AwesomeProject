import React = require('react');
import {Image, StyleSheet, Text, View} from 'react-native';
import {gStyle} from '../styles/style';

export default function Contacts({route}) {
  return (
    <View style={[styles.main, styles.img]}>
      <Image style={styles.img} source={{uri: route.params.img}} />
      <View style={styles.news}>
        <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
        <Text style={styles.full}>{route.params.full}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#030303',
    flex: 1,
  },
  full: {
    color: '#fff',
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    marginTop: 20,
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  news: {
    borderRadius: 10,
    flex: 2,
  },
});
