const btn = document.querySelector(".btn");
btn.addEventListener('click', ()=>{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let resultElement = document.getElementById('result');
    let result;
  
    let operators = ['+', '-', 'x', '/'];
  
    for (let i = 0; i < operators.length; i++) {
      if (operator === operators[i]) {
        if (operator === '+') {
          result = num1 + num2;
        } else if (operator === '-') {
          result = num1 - num2;
        } else if (operator === 'x') {
          result = num1 * num2;
        } else if (operator === '/') {
          result = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero';
        }
  
        resultElement.textContent = 'Resultado: ' + result;
        break;
      }
    }
});