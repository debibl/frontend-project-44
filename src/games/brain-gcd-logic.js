import {
  greeting,
  answerCheck,
} from '../index.js';

const brainGCD = () => {
  const gameType = 'GCD';

  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  answerCheck(userName, gameType);
};

export default brainGCD;
