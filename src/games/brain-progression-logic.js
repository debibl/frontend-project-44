import readlineSync from 'readline-sync';
import {
  greeting,
  congratulations,
  condolences,
  randomProgressionGenerator,
} from '../index.js';

const brainProgression = () => {
  // welcome message
  const userName = greeting();
  console.log('What is the missing number in the progression?');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    // task run
    const question = randomProgressionGenerator(10);
    console.log(`Question: ${question.progression.join(' ')}`);

    const rightAnswer = `${question.hiddenNumber}`;
    const userAnswer = readlineSync.question('Your answer: ');

    // answer check
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      condolences(userAnswer, rightAnswer, userName);
      return;
    }

    // congratulations on winning
    congratulations(userName, answersCount);
  }
};

export default brainProgression;
