import React = require('react');
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {gStyle} from '../styles/style';
import {Formik} from 'formik';

export default function Form({addArticle}) {
  return (
    <View >
      <Formik
        initialValues={{name: '', annons: '', full: '', img: ''}}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}>
        {props => (
          <View>
            <TextInput
              placeholderTextColor={'gray'}
              style={styles.input}
              value={props.values.name}
              placeholder="Заголовок:"
              onChangeText={props.handleChange('name')}
            />
            <TextInput
              placeholderTextColor={'gray'}
              style={styles.input}
              value={props.values.annons}
              placeholder="Анонс:"
              multiline
              onChangeText={props.handleChange('annons')}
            />
            <TextInput
              placeholderTextColor={'gray'}
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Полный текст:"
              onChangeText={props.handleChange('full')}
            />
            <TextInput
              placeholderTextColor={'gray'}
              style={styles.input}
              value={props.values.img}
              placeholder="url картинки"
              onChangeText={props.handleChange('img')}
            />
            <Button title="Добавить" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: 'silver',
    borderRadius: 10,
  },
});
