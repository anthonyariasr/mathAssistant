
function writethings(){
    document.getElementsByClassName("arrow")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.display = "block";
    const canvas = document.getElementsByClassName("canvas")[0];
    canvas.style.display = "flex"   
}

//Square functions

function SquarePerimeter(){
    const side = document.getElementById("squareInput").value;
    perimeter = side * 4;
    document.getElementById("squareAnswer").value = perimeter + "cm";
}

function SquareArea(){
    const side = document.getElementById("squareInput").value;
    area = side * side;
    document.getElementById("squareAnswer").value = area + "cm^2";
}

//Triangle functions

function TriPerimeter(){
    const side = document.getElementById("triInput").value;
    perimeter = side * 3;
    document.getElementById("triAnswer").value = perimeter + "cm";
}

function TriArea(){
    const side = document.getElementById("triInput").value;
    Area = (Math.sqrt(3)/4) * (side**2)
    document.getElementById("triAnswer").value = Area + "cm^2";
}


