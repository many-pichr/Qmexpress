import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
      apiKey: "AIzaSyD7WC5mNUr8OMhxNl4L1FXLlsRyN63L1_A",
    authDomain: "fire-test-39a78.firebaseapp.com",
    databaseURL: "https://fire-test-39a78.firebaseio.com",
    projectId: "fire-test-39a78",
    storageBucket: "fire-test-39a78.appspot.com",
    messagingSenderId: "143971746619"
};
const fire = firebase.initializeApp(config);
export default fire;
