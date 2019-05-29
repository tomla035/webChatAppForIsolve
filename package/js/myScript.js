
var a = document.getElementById("m");
var count = 1;
$(function (){
    var socket = io();
    $('form').submit(function(e){
        e.preventDefault();
        if(count==1){
            socket.emit('chat message',($('#usrL').val() + " joined the chat"));
            count--;
        }
        
        if(a.value!=""){
            socket.emit('chat message', ($('#usrL').val() + ": " + $('#m').val()));   
        }

        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg + " -   " + getTime()));
        setEveryOtherColor();
    });
});

function getTime(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if(hour<10){
        hour = "0" + hour.toString();
    }
    if(minute<10){
        minute = "0" + minute.toString();
    }
    today = hour+":"+minute;
    return today;
}


  function setEveryOtherColor() {
      
    $("#messages li:nth-child(odd)").css("background-color", "DodgerBlue");
    $("#messages li:nth-child(odd)").css("color", "white");
    $("#messages li:nth-child(even)").css("background-color", "white");
    $("#messages li:nth-child(even)").css("color", "grey");
  }
