const firebaseConfig = {
    apiKey: "AIzaSyBK_7Sij5BmBvAymEhUahpzK9Y4Lpl019E",
    authDomain: "pruebaform-96519.firebaseapp.com",
    projectId: "pruebaform-96519",
    storageBucket: "pruebaform-96519.appspot.com",
    messagingSenderId: "502733552722",
    appId: "1:502733552722:web:c75069223981f59156338b"
  };



  firebase.initializeApp(firebaseConfig);// Inicializaar app Firebase
  
  const db = firebase.firestore();// db representa mi BBDD //inicia Firestore


//Función auxiliar para pintar una foto en el album
const printUser = (coleccionUsuarios, docId) => {
    let picture = document.createElement('img');
    picture.setAttribute('src', coleccionUsuarios.imagen);
    picture.setAttribute('style', 'max-width:250px');
    let nombreUsuario = document.createElement('h3');
    nombreUsuario.innerHTML = coleccionUsuarios.nombre;
    let id = document.createElement('p');
    id.setAttribute('class', "innerID");
    id.innerHTML = docId;
    let correo = document.createElement('p');
    correo.innerHTML = coleccionUsuarios.mail;
    let comentario = document.createElement('p');
    comentario.innerHTML = coleccionUsuarios.texto;

    const datos = document.getElementById('datos');
    datos.appendChild(picture);
    datos.appendChild(nombreUsuario);
    datos.appendChild(correo)
    datos.appendChild(comentario)
    datos.appendChild(id);
  };


  const createUser = (coleccionUsuarios) => {
    db.collection("datos")
      .add(coleccionUsuarios)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch((error) => console.error("Error adding document: ", error));
  };


  


  let form =document.querySelector("form")

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    const fname = event.target.fname.value;
    const email = event.target.email.value;
    const img = event.target.img.value;
    const comments = event.target.comments.value;

    let coleccionUsuarios ={
        nombre:fname,
        mail:email,
        imagen:img,
        texto:comments
      }
    
  createUser(coleccionUsuarios);
  
  
    
  });

 //Read all
 const readAll = () => {
    db.collection("datos") 
      .get() 
      .then((querySnapshot) => { 
        querySnapshot.docs.forEach((doc) => { 
            let user ={
                nombre: doc.data().nombre,
                imagen: doc.data().imagen,
                mail: doc.data().mail,
                texto: doc.data().texto
            }
          printUser(user, doc.id)
        });
  
      })
      .catch((error) => console.log('Error reading documents ' + error));
  };


    //Delete
const deleteUser = () => {
    const borrar = collection(db, "datos");
    db.collection('datos').doc(borrar).delete().then(() => {
      alert(`Se han borrado todos los usuarios.`);
      //Clean
      document.getElementById('datos').innerHTML = "";
      //Read all again
      readAll();
    })
      .catch(() => console.log('Error borrando documento'));
  };

   //Read all
document.getElementById("read-all").addEventListener("click", () => {
    readAll();
  });

  //Delete one
  document.getElementById('delete').addEventListener('click', () => {
    deleteUser();
  });