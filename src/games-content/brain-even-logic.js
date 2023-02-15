import readlineSync from 'readline-sync';

const brainEven = () => {
  // welcome message
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);

  // task run
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // answers counter
  for (let i = 0; i < 3; i += 1) {
    const randomInt = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // parity check
    if (randomInt % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(
          `'${userAnswer}' is the wrong answer ;(. The correct answer was 'yes'.\nLet's try again, ${userName}!`,
        );
        return;
      }
    } else if (randomInt % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(
          `'${userAnswer}' is the wrong answer ;(. The correct answer was 'no'.\nLet's try again, ${userName}!`,
        );
        return;
      }
    }
  }
};

export default brainEven;
