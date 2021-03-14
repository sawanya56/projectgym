import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5oLV_6zEiPbzLwnuB2aJOcajBvRGpUiY",
    authDomain: "gym-project-6a734.firebaseapp.com",
    projectId: "gym-project-6a734",
    storageBucket: "gym-project-6a734.appspot.com",
    messagingSenderId: "131840362805",
    appId: "1:131840362805:web:e1386ed2a00b6f597ca47c",
    measurementId: "G-7EB4W1N7YV"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase