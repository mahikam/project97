var firebaseConfig = {
    apiKey: "AIzaSyALdCSaOKK3sQvh_Hrd88enY_BTyT_0qt0",
    authDomain: "wast3less.firebaseapp.com",
    databaseURL: "https://wast3less-default-rtdb.firebaseio.com",
    projectId: "wast3less",
    storageBucket: "wast3less.appspot.com",
    messagingSenderId: "962301237235",
    appId: "1:962301237235:web:200b56cc079e6c946be486",
    measurementId: "G-2EZNR6NV58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding a Room"
    });
    localStorage.setItem("room_name",room_name);
    if(room_name=="provider"){
        window.location="pchat.html"
    }
    else{
        window.location="cchat.html"
    }
}

function logout(){
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("phone_number");
    localStorage.removeItem("city");
    localStorage.removeItem("state");
    localStorage.removeItem("address");
    window.location.replace("index.html");
}