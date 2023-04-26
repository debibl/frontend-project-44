import readlineSync from 'readline-sync';
import {
  greeting,
  congratulations,
  condolences,
  randomIntGenerator,
  findGCD,
} from '../index.js';

const brainGCD = () => {
  // welcome message
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const num1 = randomIntGenerator(100);
    const num2 = randomIntGenerator(100);
    console.log(`Question: ${num1} ${num2}`);

    const rightAnswer = String(findGCD(num1, num2));
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
    congratulations(userName, answersCount);
  }
};

export default brainGCD;
