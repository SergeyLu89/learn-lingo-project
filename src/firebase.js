import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };
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
