function circleShape(){
    var circle = document.getElementById('box')
    // console.log(circle);
    circle.style.borderRadius = '50%'
    circle.style.width = '350px'
    circle.style.height = '350px'
}

function rectangle(){
    var square = document.getElementById('box');
    // console.log(square)
    square.style.borderRadius = '0%'
    square.style.width = '300px'
    square.style.height = '400px'
}

function original(){

    var original = document.getElementById('box')
    original.style.borderRadius = '0'
    original.style.width = '350px';
    original.style.height = '350px';
}