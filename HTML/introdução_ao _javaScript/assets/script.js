var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

/*function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

NO HTML
<button id="btnRem" name="subtrair" onclick="decrement()" >-</button>
<button id="bntAcao" name="adicionar" onclick="increment()">+</button>

*/

function escreverIncrement(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    var bntAcao = document.getElementById("btnAcao");
}

function escreverDecrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

bntAcao.addEventListener("click", escreverIncrement);







