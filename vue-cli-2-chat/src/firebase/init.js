import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmLjIipo0is-8dN3x1-UJoJylWtW6m6hs",
    authDomain: "vue-cli-2-90bfa.firebaseapp.com",
    projectId: "vue-cli-2-90bfa",
    storageBucket: "vue-cli-2-90bfa.appspot.com",
    messagingSenderId: "54749844678",
    appId: "1:54749844678:web:9d6ad594fb01baa16973c7"
  };

  const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()