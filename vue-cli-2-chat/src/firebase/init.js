// Old Import syntax imployed to work with old FB setup
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCMX9YuCQT7626T4suh7efxbAUbcEZn6OQ",
  authDomain: "vue-chat-2-9de65.firebaseapp.com",
  projectId: "vue-chat-2-9de65",
  storageBucket: "vue-chat-2-9de65.appspot.com",
  messagingSenderId: "719119114891",
  appId: "1:719119114891:web:6988c796d9df430289ea8e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
app.firestore().settings({ timestampsInSnapshots: true })
// export firestore database
export default app.firestore()