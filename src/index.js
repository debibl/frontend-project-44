import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomProgression = (length) => {
  const num = Math.round(Math.random() * length);
  const randomIndex = Math.round(Math.random() * length);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(num * i);
  }
  const hiddenNumber = progression.at(randomIndex);
  progression[randomIndex] = '..';
  return { progression, hiddenNumber };
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperator];
  return operator;
};

const findGCD = (num1, num2) => {
  const smaller = Math.min(num1, num2);
  let divisor = smaller;
  for (divisor; divisor > 0; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
  return divisor;
};

const calcAnswer = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return undefined;
  }
  return `${result}`;
};

const progression = () => {
  const progressionLength = 10;
  const assignment = getRandomProgression(progressionLength);
  const task = assignment.progression.join(' ');
  const rightAnswer = `${assignment.hiddenNumber}`;
  return { task, rightAnswer };
};

const GCD = () => {
  const maxNumber = 100;
  const num1 = getRandomInt(maxNumber);
  const num2 = getRandomInt(maxNumber);
  const task = `${num1} ${num2}`;
  const rightAnswer = `${findGCD(num1, num2)}`;
  return { task, rightAnswer };
};

const evenOdd = () => {
  const maxNumber = 100;
  const randomInt = getRandomInt(maxNumber);
  const task = `${randomInt}`;
  const isEven = (num) => num % 2 === 0;
  const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
  return { task, rightAnswer };
};

const calc = () => {
  const maxNumber = 10;
  const operator = getRandomOperator();
  const num1 = getRandomInt(maxNumber);
  const num2 = getRandomInt(maxNumber);
  const task = `${num1} ${operator} ${num2}`;
  const rightAnswer = calcAnswer(operator, num1, num2);
  return { task, rightAnswer };
};

const prime = () => {
  const maxNumber = 100;
  const randomInt = getRandomInt(maxNumber);
  const task = `${randomInt}`;
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];
  const isPrime = primeNumbers.includes(randomInt);
  const rightAnswer = isPrime ? 'yes' : 'no';
  return { task, rightAnswer };
};

const makeTask = (gameType) => {
  switch (gameType) {
    case 'progression':
      return progression();
    case 'GCD':
      return GCD();
    case 'even-odd':
      return evenOdd();
    case 'calc':
      return calc();
    case 'isPrime':
      return prime();
    default:
      return undefined;
  }
};

export default (gameType, question) => {
  const userName = greeting();
  console.log(question);

  let answersCount = 0;
  while (answersCount < 3) {
    const game = makeTask(gameType);
    console.log(`Question: ${game.task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === game.rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${game.rightAnswer}".\nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  if (answersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
