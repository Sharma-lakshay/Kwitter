
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCdCMK1a5tgoe2DgAXDFcD9ZjHDlkXbTK0",
      authDomain: "kwitter-1909f.firebaseapp.com",
      databaseURL: "https://kwitter-1909f.firebaseio.com",
      projectId: "kwitter-1909f",
      storageBucket: "kwitter-1909f.appspot.com",
      messagingSenderId: "633791471377",
      appId: "1:633791471377:web:3160d6fbfb46db3afb76b0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

    function addRoom() {
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room"
          });
          localStorage.setItem("room_name", room_name);
          window.location= "kwitter_page.html";
    }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

