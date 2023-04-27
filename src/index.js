import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

const randomIntGenerator = (range) => {
  const number = Math.ceil(Math.random() * range);
  return number;
};

const randomProgressionGenerator = (length) => {
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

const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];
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
  const assignment = randomProgressionGenerator(progressionLength);
  const task = assignment.progression.join(' ');
  const rightAnswer = `${assignment.hiddenNumber}`;
  return { task, rightAnswer };
};

const GCD = () => {
  const maxNumber = 100;
  const num1 = randomIntGenerator(maxNumber);
  const num2 = randomIntGenerator(maxNumber);
  const task = `${num1} ${num2}`;
  const rightAnswer = `${findGCD(num1, num2)}`;
  return { task, rightAnswer };
};

const evenOdd = () => {
  const maxNumber = 100;
  const randomInt = randomIntGenerator(maxNumber);
  const task = `${randomInt}`;
  const isEven = (num) => num % 2 === 0;
  const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
  return { task, rightAnswer };
};

const calc = () => {
  const maxNumber = 10;
  const operator = randomOperatorGenerator();
  const num1 = randomIntGenerator(maxNumber);
  const num2 = randomIntGenerator(maxNumber);
  const task = `${num1} ${operator} ${num2}`;
  const rightAnswer = calcAnswer(operator, num1, num2);
  return { task, rightAnswer };
};

const prime = () => {
  const maxNumber = 100;
  const randomInt = randomIntGenerator(maxNumber);
  const task = `${randomInt}`;
  const isPrime = (num) => num % 2 !== 0 && num % 4 !== 0;
  const rightAnswer = isPrime(randomInt) ? 'yes' : 'no';
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
        `"${userAnswer}" is a wrong answer ;(. The correct answer was "${game.rightAnswer}".\nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
