import {
  greeting,
  answerCheck,
} from '../index.js';

const brainProgression = () => {
  const gameType = 'progression';

  const userName = greeting();
  console.log('What is the missing number in the progression?');

  answerCheck(userName, gameType);
};

export default brainProgression;
