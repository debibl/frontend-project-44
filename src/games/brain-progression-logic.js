import gameEngine from '../index.js';

const brainProgression = () => {
  const gameType = 'progression';
  const question = ('What is the missing number in the progression?');

  gameEngine(gameType, question);
};

export default brainProgression;
