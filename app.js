let num1, num2, op, correctAnswer;

function generateOperation() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '×'];
  op = operations[Math.floor(Math.random() * operations.length)];

  switch (op) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '×': correctAnswer = num1 * num2; break;
  }

  document.getElementById("operation").innerText = `${num1} ${op} ${num2} = ?`;
  document.getElementById("result").innerText = '';
  document.getElementById("answer").value = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const result = document.getElementById("result");
  result.innerText = (userAnswer === correctAnswer) ? "Correct! 🎉" : "Wrong 😢";
}

window.onload = generateOperation;
