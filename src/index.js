import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

export const randomIntGenerator = (range) => {
  const number = Math.ceil(Math.random() * range);
  return number;
};

export const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];
  return operator;
};

export const answer = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return `${result}`;
};

export const condolences = (userAnswer, rightAnswer, userName) => {
  console.log(
    `"${userAnswer}" is a wrong answer ;(. The correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`,
  );
};

export const congratulations = (userName, answersCount) => {
  if (answersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
