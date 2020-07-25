import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
/*
Since we are using react, we will wrap our root component with PersistGate.
 This delays the rendering of our app's User Interface (UI) until our persisted
  state has been retrieved and saved to redux. 
*/
/*
 To give access to the peristence flow, we have to wrap our weba pp i.e. <App />
  component inside the PersistGate passing it our persistor. This will persist
   and rehydrate our redux store and now even after refreshing the web app,
    we will have acess to the items in our cart as our cart persists.
*/
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
