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

var first_name=localStorage.getItem("first_name");
var phone=localStorage.getItem("phone_number")
var user_name=first_name+", "+phone;
var room_name="Food Consumer Chat";

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg
    });
    document.getElementById("msg").innerHTML="";
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    names=message_data['name'];
    message=message_data['message'];
    name_with_tag="<h4>"+names+"</h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4><hr>";
    row=name_with_tag+message_with_tag;
    document.getElementById("output").innerHTML+=row;
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("phone_number");
    localStorage.removeItem("city");
    localStorage.removeItem("state");
    window.location.replace("index.html");
}