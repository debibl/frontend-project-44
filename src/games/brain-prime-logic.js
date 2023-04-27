import gameEngine from '../index.js';

const brainPrime = () => {
  const gameType = 'isPrime';
  const question = 'Answer "yes" if the number is prime, otherwise answer "no".';

  gameEngine(gameType, question);
};

export default brainPrime;
