import gameEngine from '../index.js';

const brainProgression = () => {
  const gameType = 'progression';
  const question = 'What number is missing in the progression?';

  gameEngine(gameType, question);
};

export default brainProgression;
