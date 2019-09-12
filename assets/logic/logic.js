var firebaseConfig = {
    apiKey: "AIzaSyBpoE_lG1T2ksmsDheN3hUb_jTAXBah_Yg",
    authDomain: "uwclass-759cc.firebaseapp.com",
    databaseURL: "https://uwclass-759cc.firebaseio.com",
    projectId: "uwclass-759cc",
    storageBucket: "",
    messagingSenderId: "42704042785",
    appId: "1:42704042785:web:24df40d43e43d3dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var name = "";
var city = "";
var tFrequency;
var firstTime = "00:01";
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log("convertime time is : " + firstTimeConverted)
var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("hh:mm"));
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("Difference in Time: " + diffTime);
var tRemainder = diffTime % tFrequency;
console.log("remainder is " + tRemainder);
var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("Minutes Till Train: " + tMinutesTillTrain);
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("Arrival Time: " + moment(nextTrain).format("hh.mm"));

// database.ref().on("child_added", function(childSnapshot) {
//     $("#train-table").append("<tr><td>" + childSnapshot.val().trainName + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + childSnapshot.val().nextArrival + "</td><td>" + childSnapshot.val().minutesAway + "</td>")
//     });

    $("#submit-button").on("click",function(){
        event.preventDefault();
        name = $("#trainName").val().trim();
        city = $("#destination").val().trim();
        firstTime = $("#firstTime").val().trim();
        tFrequency = $("#frequency").val().trim();
    
        console.log(name);
        console.log(city);
        console.log(tFrequency);
        console.log(tMinutesTillTrain);

        console.log("convertime time is : " + firstTimeConverted);
        console.log("first time is : " + firstTime);
        console.log("Current Time: " + moment(currentTime).format("hh:mm"));
        console.log("Difference in Time: " + diffTime);
        console.log("remainder is " + tRemainder);
        console.log("Minutes Till Train: " + tMinutesTillTrain);
        console.log("Arrival Time: " + moment(nextTrain).format("hh.mm"));
    
        // database.ref().push({
        //     trainName: name,
        //     destination: city,
        //     frequency: tFrequency,
        //     firstTrain: firstTime,
        //     // nextArrival: nextTrain,
        //     minutesAway: tMinutesTillTrain,

        // });
    
       
      })

