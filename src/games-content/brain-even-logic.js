import readlineSync from 'readline-sync';

const brainEven = () => {
  // welcome message
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  // task run
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // answers counter
  let i = 0;
  while (i < 3) {
    const randomInt = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // parity check
    if (randomInt % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`,
        );
        return;
      }
    }

    i += 1;
  }
};

export default brainEven;
