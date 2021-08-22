var student = {
  name: "",
  type: "student"
};

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
  console.log("functione contentLoaded called");

  document.getElementById("name").addEventListener("keyup", keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById("name").value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  var output = "Total numeric value of persons name is :: "+totalNameValue;
  document.getElementById("output").innerText = output;
}
