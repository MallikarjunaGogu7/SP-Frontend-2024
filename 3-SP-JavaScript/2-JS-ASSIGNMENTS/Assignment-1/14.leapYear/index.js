//Check given year is leap year or not?

function leapYear(year){
    if (year%400==0){
        return `${year} is leap year`
    }

    else if (year%4==0 & year%100!=0){
        return `${year} is leap year`
    }
    else{
        return `${year} is not a leap year`
    }
}

console.log(leapYear(1200))