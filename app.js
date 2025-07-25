let num1, num2, op, correctAnswer;

function generateOperation() {
  // azzera l'input
  const display = document.getElementById("answer-display");
  display.innerText = "0";

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

function addNumber(num) {
  const display = document.getElementById("answer-display");
  if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function deleteAll() {
  const display = document.getElementById("answer-display");
  display.innerText = "0";
}

function deleteLast() {
  const display = document.getElementById("answer-display");
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function getAnswerValue() {
  return document.getElementById("answer-display").innerText;
}

function checkAnswer() {
  const rawValue = getAnswerValue().replace(',', '.'); // accetta anche la virgola
  const userAnswer = parseFloat(rawValue);
  const result = document.getElementById("result");

  let isCorrect = false;
  if (op === '÷') {
    const diff = Math.abs(userAnswer - correctAnswer);
    isCorrect = diff < 0.01;
  } else {
    isCorrect = userAnswer === correctAnswer;
  }

  if (isCorrect) {
    result.innerHTML = `✅ <strong>Correct!</strong>`;
    result.style.color = "#4CAF50"; // Verde
  } else {
    result.innerHTML = `❌ <strong>Wrong!</strong><br>Correct Answer: <span style="color:yellow">${correctAnswer}</span>`;
    result.style.color = "#F44336"; // Rosso
  }

  // Effetto di animazione (piccolo fade)
  result.style.opacity = 0;
  setTimeout(() => { result.style.opacity = 1; }, 100);
}


window.onload = generateOperation;
