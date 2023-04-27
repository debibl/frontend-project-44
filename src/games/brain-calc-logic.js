import gameEngine from '../index.js';

const brainCalc = () => {
  const gameType = 'calc';
  const question = 'What is the result of this expression?';

  gameEngine(gameType, question);
};

export default brainCalc;
