import {
  greeting,
  answerCheck,
} from '../index.js';

const brainEven = () => {
  const gameType = 'even-odd';

  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  answerCheck(userName, gameType);
};

export default brainEven;
