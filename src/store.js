import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import "firebase/firestore";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//?? Reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyCt13cI92DL5-yTsy_zBw4WFQVgwPuP9Fw",
  authDomain: "reactclientpanel-f8d80.firebaseapp.com",
  databaseURL: "https://reactclientpanel-f8d80.firebaseio.com",
  projectId: "reactclientpanel-f8d80",
  storageBucket: "reactclientpanel-f8d80.appspot.com",
  messagingSenderId: "778062060258"
};

//^^ react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

//^ Init firebase instance
firebase.initializeApp(firebaseConfig);
//^ Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };

firestore.settings(settings);

//^ Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

//Check for settings in LocalStorage
if (localStorage.getItem("settings") === null) {
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  localStorage.setItem("settings", JSON.stringify(defaultSettings));
}

// Create store with reducers and initial state
const initialState = {
  settings: JSON.parse(localStorage.getItem("settings"))
};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
