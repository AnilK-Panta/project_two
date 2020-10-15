setTimeout(realTimeClock, 500);
function realTimeClock(){
    var rtClock= new Date();
    var hours= rtClock.getHours();
    var minutes= rtClock.getMinutes();
    var seconds= rtClock.getSeconds();

    document.getElementById('realtime').innerHTML=
    hours + " : " + minutes + " : " + seconds;
    var t= setTimeout(realTimeClock, 500);
}