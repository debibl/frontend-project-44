import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

export const randomIntGenerator = () => {
  const number = Math.ceil(Math.random() * 100);
  return number;
};

export const randomExpressionGenerator = () => {
  const num1 = randomIntGenerator();
  const num2 = randomIntGenerator();
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];
  return `${num1} ${operator} ${num2}`;
};

export const condolences = (userAnswer, rightAnswer, userName) => {
  console.log(
    `"${userAnswer}" is a wrong answer ;(. The correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`,
  );
};

export const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
