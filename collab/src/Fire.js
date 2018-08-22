import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyD3-nisOu3bd0BOTbBMXbXWTooEpQedehY",
    authDomain: "collaborative-code-edito-a1fc3.firebaseapp.com",
    databaseURL: "https://collaborative-code-edito-a1fc3.firebaseio.com",
    projectId: "collaborative-code-edito-a1fc3",
    storageBucket: "collaborative-code-edito-a1fc3.appspot.com",
    messagingSenderId: "455518767229"
  };
  var Fire = firebase.initializeApp(config);
  export default Fire;