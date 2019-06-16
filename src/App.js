import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
}

export default App;
