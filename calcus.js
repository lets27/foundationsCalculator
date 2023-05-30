let operator='';
currentValue='';//this is just the number
previousValue='';
document.addEventListener('DOMContentLoaded',function(){
let clearButton=document.querySelector('.clearButton');
let digits=document.querySelectorAll(".number");
let signs=document.querySelectorAll(' .operator');
let equal=document.querySelector('.equal');
let decimal=document.querySelector('.decimal'); 
let previousScreen=document.querySelector('.previous');
//previousScreen is the the top part of the display
let currentScreen=document.querySelector('.current');

digits.forEach((number) => number.addEventListener('click',function(e){
    handleNumber(e.target.textContent);//targets the button we pressed and gets its textCOntent 
   currentScreen.textContent=currentValue;
}))


signs.forEach((opp) => opp.addEventListener('click',function(e){
    handleOperator(e.target.textContent);//targets the button we pressed and gets its textCOntent 
   previousScreen.textContent=previousValue+" "+operator;
currentScreen.textContent=currentValue; 
}))
  
clearButton.addEventListener('click',function(e){
    previousValue="";
    currentValue="";
    operator="";
    previousScreen.textContent=currentValue;
    currentScreen.textContent=currentValue;

})

equal.addEventListener('click',function(){
   if(currentValue!=''&&previousValue!=''){
    calculate();
   previousScreen.textContent='';
   currentScreen.textContent=previousValue;
   }
})

decimal.addEventListener('click',function(){
  addDecimal();
 })

})


function handleNumber(num){

if(currentValue.length<=5){
currentValue+=num;//current value will be the the value of the button pressed textcontent
}
}


function handleOperator(opp){

   operator=opp;
   previousValue=currentValue;
   currentValue="";
   
    }


    function calculate(){

        previousValue=Number(previousValue);
        currentValue=Number(currentValue);


        if(operator=='+'){
            previousValue+=currentValue;
        }else if(operator=='-'){
            previousValue-=currentValue;
        }else if(operator=='x'){
            previousValue*=currentValue
        }else if(operator=='÷'){
          previousValue/=currentValue;
        }else if(operator=='(^)'){
            previousValue**=currentValue;
        }
        
        previousValue=round(previousValue);
        previousValue=previousValue.toString();
        currentValue=previousValue.toString();
        console.log(previousValue);
    }

    function round(num){
return num.toFixed(2);
    }

    function addDecimal(){
        if(!currentValue.includes('.')){
            currentValue+='.'
        }
    }

  




