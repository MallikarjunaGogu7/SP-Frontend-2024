
// function sectoHour(sec){
//     return sec/3600;
// }
// console.log(sectoHour(3600),"hour");

function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
  
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return { h: hours, m: minutes, s: seconds };
  }
  
  // { h: 0, m: 1, s: 0 }
  console.log(toHoursAndMinutes(60));
  
  // { h: 0, m: 16, s: 40 }
  console.log(toHoursAndMinutes(1000));
  
  // { h: 1, m: 10, s: 50 }
  console.log(toHoursAndMinutes(4250));
  
  