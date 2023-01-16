export function getResult(tryAnswer, correctAnswer) {
  let out = correctAnswer.length;
  let strike = 0;
  let victory = false;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (correctAnswer.includes(tryAnswer[i])) {
      out--;
    }

    if (tryAnswer[i] === correctAnswer[i]) {
      strike++;
    }
  }

  let ball = correctAnswer.length - out - strike;
  if (strike === 3) {
    victory = true;
  }

  return {
    ball,
    strike,
    out,
    victory,
  };
}
