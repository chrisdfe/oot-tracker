const padNumber = (num: string, targetLength: number = 3) => {
  const extraZeros = Array(targetLength - `${num}`.length)
    .fill(0)
    .join("");
  return `${extraZeros}${num}`;
};

export default padNumber;
