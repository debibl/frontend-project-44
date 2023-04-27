import {
  greeting,
  answerCheck,
} from '../index.js';

const brainCalc = () => {
  const gameType = 'calc';

  const userName = greeting();
  console.log('What is the result of this expression?');

  answerCheck(userName, gameType);
};

export default brainCalc;
