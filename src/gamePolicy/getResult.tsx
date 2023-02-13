export function getResult(
  tryAnswer: (number | string)[],
  correctAnswer: number[]
) {
  const out: number = getOut(tryAnswer, correctAnswer); //correctAnswer.length;
  const strike: number = getStrike(tryAnswer, correctAnswer);
  const ball: number = correctAnswer.length - out - strike;
  let victory = false;

  if (strike === correctAnswer.length) {
    victory = true;
  }

  type resultBox = {
    ball?: number;
    strike?: number;
    out?: number;
    victory?: boolean;
  };
  const resultBox = {
    ball,
    strike,
    out,
    victory,
  };
  return resultBox;
}

export function getOut(
  tryAnswer: (number | string)[],
  correctAnswer: (number | string)[]
) {
  let out = correctAnswer.length;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (correctAnswer.includes(tryAnswer[i])) {
      out--;
    }
  }
  return out;
}

export function getStrike(
  tryAnswer: (number | string)[],
  correctAnswer: number[]
) {
  let strike = 0;
  for (let i = 0; i < tryAnswer.length; i++) {
    if (tryAnswer[i] === correctAnswer[i]) {
      strike++;
    }
  }
  return strike;
}
