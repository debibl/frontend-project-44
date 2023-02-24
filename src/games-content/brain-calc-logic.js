import readlineSync from 'readline-sync';
import {
  greeting,
  congratulations,
  condolences,
  randomExpressionGenerator,
} from '../index.js';

const brainCalc = () => {
  // welcome message
  const userName = greeting();
  console.log('What is the result of this expression?');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const randomExpression = randomExpressionGenerator();
    console.log(`Question: ${randomExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // answer check
    // eslint-disable-next-line no-eval
    const rightAnswer = String(eval(randomExpression));

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
