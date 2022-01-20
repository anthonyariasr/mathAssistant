
//Functions about DOM control

//Clean the canvas
function Clean(){
    const canvas = document.getElementsByClassName("canvas");
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].style.display = 'none';        
    }
}

//Display the arrow indicator and a section where the diferent sections will be showed
function InitDisplay(){
    Clean()
    document.getElementsByClassName("arrow")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.display = "block";
}

//Recieve the section class name as a parameter to later on display the requested info
function Display(className){
    InitDisplay()
    const canvas = document.getElementsByClassName(className)[0];
    canvas.style.display = "flex"
    window.scrollTo({ top: 1000, behavior: 'smooth' }); 
}




//Geometry section functions

//Square functions

function SquarePerimeter(){
    const side = document.getElementById("squareInput").value;
    const perimeter = side * 4;
    document.getElementById("squareAnswer").value = perimeter + "cm";
}

function SquareArea(){
    const side = document.getElementById("squareInput").value;
    const area = side * side;
    document.getElementById("squareAnswer").value = area + "cm^2";
}

//Triangle functions

function TriPerimeter(){
    const side = document.getElementById("triInput").value;
    const perimeter = side * 3;
    document.getElementById("triAnswer").value = perimeter + "cm";
}

function TriArea(){
    const side = document.getElementById("triInput").value;
    const area = (Math.sqrt(3)/4) * (side**2)
    document.getElementById("triAnswer").value = area + "cm^2";
}

//Circle functions

function CirclePerimeter(){
    const radio = document.getElementById("circleInput").value;
    const perimeter = (radio * 2) * Math.PI;
    document.getElementById("circleAnswer").value = perimeter + "cm";
}

function CircleArea(){
    const radio = document.getElementById("circleInput").value;
    const area = Math.PI * (radio ** 2);
    document.getElementById("circleAnswer").value = area + "cm^2";
}




//Discounts section fuctionss

function GetDiscount(){
    const ogPrice = document.getElementById("inputPrice").value;
    const percentaje = document.getElementById("inputPercentaje").value;
    finalPrice = ogPrice - (ogPrice * (percentaje/100));
    const canvas = document.getElementsByClassName("output")[0];
    canvas.innerHTML = "<h2>The final price with a <span>" + percentaje + "%</span> discount is: <span>" + finalPrice +"</span></h2>";
}



//Statistics section functions
