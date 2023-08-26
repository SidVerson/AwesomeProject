import React = require('react');
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
} from 'react-native';
import {gStyle} from '../styles/style';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Form from './Form';

export default function Main({navigation}) {
  const [news, setNews] = useState([
    {
      name: 'Google',
      annons: 'Google announce bbb',
      full: 'Google are crazy they announce new watcdh omg cool',
      key: '1',
      img: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80',
    },
    {
      name: 'Apple',
      annons: 'Google announce bbb',
      full: 'Google are crazy they announce new watcdh omg cool',
      key: '2',
      img: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    },
    {
      name: 'Facebook',
      annons: 'Google announce bbb',
      full: 'Google are crazy they announce new watcdh omg cool',
      key: '3',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);
  const addArticle = article => {
    setNews(list => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Button
            title="Закрыть"
            color="red"
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Добавить</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Button
        title="Добавить новость"
        color="green"
        onPress={() => setModalWindow(true)}
      />
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Contacts', item)}>
            <Image style={styles.img} source={{uri: item.img}} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.annons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  anons: {
    color: '#fff',
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  img: {
    width: '100%',
    height: 200,
  },
  openModal: {
    color: '#fff',
    marginTop: 0,
  },
});
