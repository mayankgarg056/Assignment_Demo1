import React from 'react';
import { Provider, } from "react-redux";


// local class uses
import Store from './Src/Application/Redux/ConfigureStore';
import NavigationIndex from './Src/Screens/Index';

//local variable declare
const store = Store()

const App = () => {
  return (

    <Provider store={store}>
      <NavigationIndex />
    </Provider>

  )
}


export default App;