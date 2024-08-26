document.addEventListener("DOMContentLoaded",function(){

    const toggleSwitch = document.getElementById("toggleSwitch");
    const container = document.querySelector(".container");

    toggleSwitch.addEventListener("click", function(){
        toggleSwitch.classList.toggle("on");
        if(toggleSwitch.classList.contains("on")){
            container.style.backgroundColor="pink";

        }
        else{
            container.style.backgroundColor="purple";
        }
    })

});

