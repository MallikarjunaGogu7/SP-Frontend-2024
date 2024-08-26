function printNum(){
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    var result = "<br>numbers are </br>"

    for (i=start; i<=end; i++){
        if(i>200 && i%5 ==0){
            result += i+"<br>"
        }
    }
    document.getElementById("result").innerHTML=result;
}