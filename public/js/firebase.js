let firebaseConfig = {
  apiKey: "AIzaSyAK2woovfgJhPbWt6hCNADR1pW6r9ID9EM",
  authDomain: "blogsite-aa8c3.firebaseapp.com",
  databaseURL: "https://blogsite-aa8c3-default-rtdb.firebaseio.com",
  projectId: "blogsite-aa8c3",
  storageBucket: "blogsite-aa8c3.appspot.com",
  messagingSenderId: "926675610857",
  appId: "1:926675610857:web:6ba5ff792de9939fc69478",
  measurementId: "G-N67RP8054T",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();