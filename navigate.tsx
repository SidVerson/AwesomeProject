import React = require('react');
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './components/Main';
import Contacts from './components/Contacts';

const Stack = createStackNavigator();

export default function Navigate({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
            headerStyle: {backgroundColor: '#fff', height: 80},
            headerTitleStyle: {fontWeight: '400'},
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: 'News',
            headerStyle: {backgroundColor: '#fff', height: 80},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
