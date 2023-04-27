import {
  greeting,
  answerCheck,
} from '../index.js';

const brainPrime = () => {
  const gameType = 'isPrime';

  const userName = greeting();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  answerCheck(userName, gameType);
};

export default brainPrime;
