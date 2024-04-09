import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store';

const firebaseConfig = {
  apiKey: 'AIzaSyDdmlvgoQ_5ZkyRwdCW0Rd9mHoxB0e3GKk',
  authDomain: 'learn-lingo-997d3.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-997d3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-997d3',
  storageBucket: 'learn-lingo-997d3.appspot.com',
  messagingSenderId: '775572315743',
  appId: '1:775572315743:web:226f6bdd74ea33c71345ea',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/learn-lingo-project">
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
);
