import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      {/* ********** IMPORTANT ******************* 
        - Provider allows only a sigle Tag as a child
        - In this case, it is a <View />
        - Inside the <View /> tag, we can list up the children. 
      */}
      <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
      </View>
    </Provider>
  );
}
export default App;
