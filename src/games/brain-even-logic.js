import readlineSync from 'readline-sync';
import {
  greeting,
  congratulations,
  condolences,
  randomIntGenerator,
} from '../index.js';

const brainEven = () => {
  // welcome message
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const randomInt = randomIntGenerator(100);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // answer check
    const isEven = (num) => num % 2 === 0;
    const rightAnswer = isEven(randomInt) ? 'yes' : 'no';

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      condolences(userAnswer, rightAnswer, userName);
      return;
    }
  }

  // congratulations on winning
  congratulations(userName, answersCount);
};

export default brainEven;
