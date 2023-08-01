let outputScreen=document.getElementById("output-screen");
const equalsButton = document.getElementById('equals');
function appendToDisplay(num){
  outputScreen.value +=num;
}
function calculateResult(){
  try{
    outputScreen.value=eval(outputScreen.value);
  }
  catch(err){
    alert("Invalid");
  }
}
function clearDisplay(){
  outputScreen.value="";
}
function del(){
  outputScreen.value=outputScreen.value.slice(0,-1);
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calculateResult();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    del();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Delete') {
    clearDisplay();
  }
});
window.addEventListener('load', function () {
  outputScreen.focus();
});