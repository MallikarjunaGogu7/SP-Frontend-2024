// 38.Print the numbers which are not divisible by 2,4, and 6 for given range (start and end value must be taken from the user) 

function printNums(){
    //get the start and end range from user
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var Nums = "<br>Numbers:<br>";

    for(i=start; i<=end; i++){
    // let's divide the value by 2
    // if the reminder is not a zero then it's an odd number
    if(i%2 != 0 && i%4 != 0 && i%6 !=0)
        {
        Nums += i + "<br>";
    }
    }
    //print the values
    document.getElementById("result").innerHTML = Nums;
}