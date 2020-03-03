const padNumber = (num: string, targetLength: number = 3) => {
  console.log(targetLength - `${num}`.length);
  const extraZeros = Array(targetLength - `${num}`.length)
    .fill(0)
    .join("");
  return `${extraZeros}${num}`;
};

export default padNumber;
