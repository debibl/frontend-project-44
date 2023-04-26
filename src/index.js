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

export const randomProgressionGenerator = (length) => {
  const num = Math.floor(Math.random() * length + 1);
  const randomIndex = Math.floor(Math.random() * length + 1);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(num * i);
  }
  const hiddenNum = progression.at(randomIndex);
  progression[randomIndex] = '..';
  return { progression, hiddenNumber: hiddenNum };
};

export const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];
  return operator;
};

export const findGCD = (num1, num2) => {
  const smaller = Math.min(num1, num2);
  let divisor = smaller;
  for (divisor; divisor > 0; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
  return divisor;
};

export const calcAnswer = (operator, num1, num2) => {
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
