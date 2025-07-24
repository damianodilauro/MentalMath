let num1, num2, op, correctAnswer;

function generateOperation() {
  // Genera due numeri casuali
  let a = Math.floor(Math.random() * 100) + 1;
  let b = Math.floor(Math.random() * 100) + 1;

  // Assicura che num1 sia sempre >= num2
  if (a < b) [a, b] = [b, a];

  num1 = a;
  num2 = b;

  // Scegli un'operazione casuale
  const operations = ['+', '-', '×', '÷'];
  op = operations[Math.floor(Math.random() * operations.length)];

  // Calcola il risultato corretto
  switch (op) {
    case '+': 
      correctAnswer = num1 + num2; 
      break;
    case '-': 
      correctAnswer = num1 - num2; 
      break;
    case '×': 
      correctAnswer = num1 * num2; 
      break;
    case '÷': 
      correctAnswer = (num1 / num2).toFixed(2); // Due decimali
      break;
  }

  // Mostra l'operazione
  document.getElementById("operation").innerText = `${num1} ${op} ${num2} = ?`;
  document.getElementById("result").innerText = '';
  document.getElementById("answer").value = '';
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const result = document.getElementById("result");

  // Per la divisione, confrontiamo come numero float arrotondato a 2 decimali
  if (op === '÷') {
    const userFloat = parseFloat(userAnswer).toFixed(2);
    result.innerText = (userFloat == correctAnswer) ? "Correct! 🎉" : `Wrong 😢 (Answer: ${correctAnswer})`;
  } else {
    result.innerText = (parseInt(userAnswer) === correctAnswer) ? "Correct! 🎉" : `Wrong 😢 (Answer: ${correctAnswer})`;
  }
}

window.onload = generateOperation;
