//Functions about DOM control

//Clean the canvas
function Clean() {
  const canvas = document.getElementsByClassName("canvas");
  for (var i = 0; i < canvas.length; i++) {
    canvas[i].style.display = "none";
  }
}

//Display the arrow indicator and a section where the diferent sections will be showed
function InitDisplay() {
  Clean();
  document.getElementsByClassName("arrow")[0].style.display = "block";
  document.getElementsByClassName("content")[0].style.display = "block";
}

//Recieve the section class name as a parameter to later on display the requested info
function Display(className) {
  InitDisplay();
  const canvas = document.getElementsByClassName(className)[0];
  canvas.style.display = "flex";
  const elementPosition = document
    .getElementById("elements")
    .getBoundingClientRect().bottom;
  console.log(elementPosition);
  window.scrollTo({ top: elementPosition, behavior: "smooth" });
}

//Geometry section functions

//Square functions

function SquarePerimeter() {
  const side = document.getElementById("squareInput").value;
  const perimeter = side * 4;
  document.getElementById("squareAnswer").value = perimeter;
}

function SquareArea() {
  const side = document.getElementById("squareInput").value;
  const area = side * side;
  document.getElementById("squareAnswer").value = area;
}

//Triangle functions

function TriPerimeter() {
  const side = document.getElementById("triInput").value;
  const perimeter = side * 3;
  document.getElementById("triAnswer").value = perimeter;
}

function TriArea() {
  const side = document.getElementById("triInput").value;
  const area = (Math.sqrt(3) / 4) * side ** 2;
  document.getElementById("triAnswer").value = area.toFixed(2);
}

//Circle functions

function CirclePerimeter() {
  const radio = document.getElementById("circleInput").value;
  const perimeter = radio * 2 * Math.PI;
  document.getElementById("circleAnswer").value = perimeter.toFixed(2);
}

function CircleArea() {
  const radio = document.getElementById("circleInput").value;
  const area = Math.PI * radio ** 2;
  document.getElementById("circleAnswer").value = area.toFixed(2);
}

//Discounts section fuctionss

function GetDiscount() {
  const ogPrice = document.getElementById("inputPrice").value;
  const percentaje = document.getElementById("inputPercentaje").value;
  finalPrice = ogPrice - ogPrice * (percentaje / 100);
  const canvas = document.getElementsByClassName("output")[0];
  canvas.innerHTML =
    "<h2>The final price with a <span>" +
    percentaje +
    "%</span> discount is: <span>" +
    finalPrice +
    "</span></h2>";
  document.getElementById("inputPercentaje").value = "";
  document.getElementById("inputPrice").value = "";
}

//Statistics section functions
function AddtoList() {
  const number = document.getElementById("datafield").value;
  if (number != "") {
    const list = document.getElementById("mylist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(number));
    list.appendChild(li);
    FillArray();
    document.getElementById("datafield").value = "";
  }
}

function FillArray() {
  var myarray = [];
  const listitems = document.getElementsByTagName("li");
  for (x = 0; x < listitems.length; x++) {
    myarray.push(parseInt(listitems[x].innerText));
  }
  //sorting array
  sortedmyarray = myarray.sort(function (a, b) {
    return a - b;
  });
  Operations(sortedmyarray);
}

function Operations(myarray) {
  //average --------------------------------------------------
  var sum = 0;
  for (x = 0; x < myarray.length; x++) {
    sum = sum + myarray[x];
  }

  var avg = sum / myarray.length;

  //median ---------------------------------------------------
  if (myarray.length % 2 == 0) {
    var median =
      (myarray[myarray.length / 2 - 1] + myarray[myarray.length / 2]) / 2;
  } else {
    var median = String(myarray[myarray.length / 2 - 0.5]);
  }

  //mode -----------------------------------------------------
  const counter = {};

  myarray.map(function (element) {
    if (counter[element]) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  });

  const listCounter = Object.entries(counter).sort(function (value, nextValue) {
    return value[1] - nextValue[1];
  });

  try {
    var mode = listCounter[listCounter.length - 1][0];
  } catch (error) {
    var mode = 0;
  }
  

  //Callback to display ----------------------------------------
  if (myarray.length == 0) {
    displayResults(0, 0, 0);
  } else {
    displayResults(avg.toFixed(2), median, mode);
  }
}

function displayResults(average, median, mode) {
  const canvas = document.getElementsByClassName("output")[1];
  canvas.innerHTML =
    "<h2>Average: <span>" +
    average +
    "</span></h2><h2>Median: <span>" +
    median +
    "</span></h2><h2>Mode: <span>" +
    mode +
    "</span></h2>";
}

function ClearData() {
  document.getElementById("mylist").innerHTML = "";
  FillArray();
}
