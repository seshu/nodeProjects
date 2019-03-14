setTimeout(function(){
    console.log("9 Secs passed program started");
},9000);
var time = 3;
var timer = setInterval(function(){
    time+=2;
    // console.log(__dirname);
    // console.log(__filename);
    console.log(time+" Secs passed");
    if(time > 10){
        clearInterval(timer);
    }
},2000);