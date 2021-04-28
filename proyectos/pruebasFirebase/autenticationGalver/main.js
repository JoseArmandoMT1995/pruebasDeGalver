
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8kXwrf0_2xDPfDeSDGk-nUqjfkOYevZ0",
    authDomain: "fb-tutorial-4059f.firebaseapp.com",
    projectId: "fb-tutorial-4059f",
    storageBucket: "fb-tutorial-4059f.appspot.com",
    messagingSenderId: "789557629181",
    appId: "1:789557629181:web:171d95fd979f7ba58bee94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const registroLogin = document.querySelector("#signup-form");
  const signinForm = document.querySelector("#login-form");
//https://www.youtube.com/watch?v=1rLBjRF0ep0
//registro
registroLogin.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email= document.querySelector("#signup-email").value;
    const password= document.querySelector("#signup-password").value;

    //console.log("submiting");
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredential=>{
      registroLogin.reset();
      $('#registrarse').modal('hide');
      alert("a creado un usuario");
    })
});
signinForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const email= document.querySelector("#login-email").value;
  const password= document.querySelector("#login-password").value;

  console.log(email+"- and -"+password);
  
  auth
  .signInWithEmailAndPassword(email,password)
  .then(userCredential=>{
    signinForm.reset();
    $('#registrarse').modal('hide');
    alert("a creado un usuario");
  })
  
});
//login
//login-form
