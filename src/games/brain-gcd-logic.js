import gameEngine from '../index.js';

const brainGCD = () => {
  const gameType = 'GCD';
  const question = 'Find the greatest common divisor of given numbers.';

  gameEngine(gameType, question);
};

export default brainGCD;
