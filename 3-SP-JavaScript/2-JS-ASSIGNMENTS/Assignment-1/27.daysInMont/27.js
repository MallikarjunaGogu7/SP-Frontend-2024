// Find the number of days in the given number of months? 

var days;
var months;

for(months=0;months<=12;months++){
    if(months==1 || months==3 || months==5 || months==7 || months==8 || months==10 || months==12){
        console.log(`${months} month has 31 days `)
    }
    else if(months==2){
        console.log("2nd month is feb month")
    }
    else{
        console.log(`${months} month has 30days`)
    }
}