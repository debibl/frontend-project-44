import readlineSync from 'readline-sync';

const brainEven = () => {
  // welcome message
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // answers counter
  let answersCount = 0;
  while (answersCount < 3) {
    const randomInt = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // answer check
    const isEven = (num) => num % 2 === 0;
    const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(
        `"${userAnswer}" is the wrong answer ;(. The correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`,
      );
      return;
    }
  }

  // congratulations on winning
  if (answersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainEven;
