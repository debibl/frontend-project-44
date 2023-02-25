import readlineSync from 'readline-sync';
import {
  greeting,
  congratulations,
  condolences,
  randomOperatorGenerator,
  randomIntGenerator,
} from '../index.js';

const brainCalc = () => {
  // welcome message
  const userName = greeting();
  console.log('What is the result of this expression?');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const operator = randomOperatorGenerator();
    const num1 = randomIntGenerator(10);
    const num2 = randomIntGenerator(10);
    console.log(`Question: ${num1} ${operator} ${num2}`);

    const answer = () => {
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

    const rightAnswer = answer();
    const userAnswer = readlineSync.question('Your answer: ');

    // answer check
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      condolences(userAnswer, rightAnswer, userName);
      return;
    }

    // congratulations on winning
    if (answersCount === 3) {
      congratulations(userName);
    }
  }
};

export default brainCalc;
