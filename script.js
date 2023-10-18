const firebaseConfig = {
    apiKey: "AIzaSyAVWjy7NsBXBlldO9H_PzxH19SF4IR7Jeg",
    authDomain: "formulario-f15c1.firebaseapp.com",
    projectId: "formulario-f15c1",
    storageBucket: "formulario-f15c1.appspot.com",
    messagingSenderId: "421216537556",
    appId: "1:421216537556:web:f6b303082da073afc4a441"
  };


  firebase.initializeApp(firebaseConfig);// Inicializar app Firebase y vincularlo con el objeto de arriba

const db = firebase.firestore();// db representa mi BBDD //inicia Firestore


