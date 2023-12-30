// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import InputField from './component/componentB';
import DisplayValue from './component/componentC';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <InputField />
        <DisplayValue />
      </div>
    </Provider>
  );
};

export default App;
