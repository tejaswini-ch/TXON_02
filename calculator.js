
let calcuteValue = '';
function numberValue(value){
   calcuteValue += value;
   let displayCalculateEl = document.getElementById("displayCalculate");
   displayCalculateEl.innerHTML = calcuteValue;
    
}
//console.log(calcuteValue);
function clearData(){
    //console.log("hi");
    let displayCalculateEl = document.getElementById("displayCalculate");
    calcuteValue = '';
    displayCalculateEl.innerHTML = '0';
}
function calculateTotal(){
    //console.log(calcuteValue);
    let displayCalculateEl = document.getElementById("displayCalculate");
    let calculateFinalvalue = eval(calcuteValue);
    displayCalculateEl.innerHTML=calculateFinalvalue;

}