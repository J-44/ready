function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey =
                    childSnapshot.key;
                Room_names = childKey;
                //Start code
                <
                div id = "type" > < /div>
                //End code
            });
        });
}
getData();
user_name = document.getElementById("name").value;
room_name = document.getElementById("nam").value;

function send() {
    messenger = document.getElementById("name").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}

function getaway() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                            childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            if (childKey != "purpose") {
                                firebase_message_id = childKey;
                                message_data = childData; //Start code<div></div> //End code } }); }); } getData;
                
function updateLike(){
    likes="like"+1;
}