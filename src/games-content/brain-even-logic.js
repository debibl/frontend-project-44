import readlineSync from 'readline-sync';

const brainEven = () => {
  // welcome message
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  // task run
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomInt = Math.ceil(Math.random() * 100);
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ');

  // parity check
  if (randomInt % 2 === 0) {
    if (userAnswer === 'no') {
      console.log('Correct!');
    }
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
    );
  }
};

export default brainEven;
