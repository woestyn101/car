var move=10;
var car=document.getElementById("car");

window.onload=()=>{
    car.style.position="absolute";
    car.style.top=0;
    car.style.left=0;
}

window.onkeydown=(e)=>{
    switch(e.key){
        
        case 'ArrowUp':
            car.style.top = parseInt(car.style.top) - move + "px";
            
            break;
        case 'ArrowDown':
            car.style.top = parseInt(car.style.top) + move + "px";
            break;
        case 'ArrowLeft':
            car.style.left = parseInt(car.style.left) -  move + "px";
            break;
        case 'ArrowRight':
            car.style.left = parseInt(car.style.left) + move + "px";
            break;
            
    }
}
