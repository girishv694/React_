var min =Math.floor ((ms/1000)/60);
var hr = Math.floor(min/60);
var seconds =Math.floor((ms / 1000)%60) ;
if(min===0){
    min=0;
}
else if(min<2){
    console.log(min +" " + "Minute");
}
else{
    console.log(min +" " + "Minutes");
}
if(seconds===0){
    seconds=0;
}
else
console.log(seconds + " " + "seconds");



