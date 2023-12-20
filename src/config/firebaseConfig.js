import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD5JuYhNdWuB5G5Xy_D3Uo3oyzTqjXk974",
  authDomain: "reservacomputadorastecsup.firebaseapp.com",
  databaseURL: "https://reservacomputadorastecsup-default-rtdb.firebaseio.com",
  projectId: "reservacomputadorastecsup",
  storageBucket: "reservacomputadorastecsup.appspot.com",
  messagingSenderId: "688308219443",
  appId: "1:688308219443:web:4961ed0fc6514fde42bd46"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };