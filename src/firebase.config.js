import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzVlFD62N0o7Vyu8zPZ04T1nnojC0hvKk",
  authDomain: "restaurantapp-2741d.firebaseapp.com",
  databaseURL: "https://restaurantapp-2741d-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2741d",
  storageBucket: "restaurantapp-2741d.appspot.com",
  messagingSenderId: "702934382217",
  appId: "1:702934382217:web:c63acf10e3ae00375c3858",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
