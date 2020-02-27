import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import Loading from './src/sections/components/Loading';
import AppLayout from './src/App';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <AppLayout />
    </PersistGate>
  </Provider>
);

export default App;
