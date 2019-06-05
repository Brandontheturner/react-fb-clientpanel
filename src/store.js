import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Custom Reducers
// todo

const firebaseConfig = {
  apiKey: "AIzaSyDn-JAPM4s9-GsPpA6ttNzRlCBMedMj9IU",
  authDomain: "clientpanel-bbe7a.firebaseapp.com",
  databaseURL: "https://clientpanel-bbe7a.firebaseio.com",
  projectId: "clientpanel-bbe7a",
  storageBucket: "clientpanel-bbe7a.appspot.com",
  messagingSenderId: "22911807496",
  appId: "1:22911807496:web:80d54748a3d051bd"
};

//react redux firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance

firebase.initializeApp(firebaseConfig);

//Init firestore

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

//Add ReactReduxFirebaseProvider enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  //firebase instance at first argument
  reduxFirestore(firebase) // <--needed using firestore
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <--needed if using firestore
});

// Create initial state
const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase, rrfConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
