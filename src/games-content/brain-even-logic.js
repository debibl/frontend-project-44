import readlineSync from 'readline-sync';
import { greeting, congratulations, condolences } from '../index.js';

const brainEven = () => {
  // welcome message
  const userName = greeting();

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const randomInt = Math.ceil(Math.random() * 100);
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
  if (answersCount === 3) {
    congratulations(userName);
  }
};

export default brainEven;
