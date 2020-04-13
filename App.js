// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewEvent from './src/screens/NewEvent';
import EventList from './src/screens/EventList';
import { Provider as PaperProvider } from 'react-native-paper';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import eventReducer from './store/reducers/events';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  events: eventReducer
});

const store = configureStore({
  reducer: rootReducer
});

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="EventList" component={EventList} />
            <Stack.Screen name="NewEvent" component={NewEvent} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
