
function Clean(){
    const canvas = document.getElementsByClassName("canvas");
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].style.display = 'none';        
    }
}

function InitDisplay(){
    Clean()
    document.getElementsByClassName("arrow")[0].style.display = "block";
    document.getElementsByClassName("content")[0].style.display = "block";   
}

function DisplayGeometry(){
    InitDisplay()
    const canvas = document.getElementsByClassName("cv_geometry")[0];
    canvas.style.display = "flex"
}

function DisplayDiscounts(){
    InitDisplay()
    const canvas = document.getElementsByClassName("cv_discounts")[0];
    canvas.style.display = "flex"
}

function DisplayStatistics(){
    InitDisplay()
    const canvas = document.getElementsByClassName("cv_statistics")[0];
    canvas.style.display = "flex"
}

function DisplaySalaries(){
    InitDisplay()
    const canvas = document.getElementsByClassName("cv_salaries")[0];
    canvas.style.display = "flex"
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
