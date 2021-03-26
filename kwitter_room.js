uk=document.getElementById("name").value;
Jishu=document.getElementById("nam").value;
Jishnu=uk;
function addRoom(){
    room= document.getElementById("Room").value;
    localStorage.setItem("Room", room);
    window.location = "Kwitter_room.html";
}
function getData(){
    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
  <div id="type"></div>
 //End code
 });});}
getData();
}
function out(){
    window.location.replace("index.html");
}