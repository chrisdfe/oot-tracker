const getPercentage = (amount: number, total: number) => {
  return Math.floor((amount * 100) / total);
};

export default getPercentage;
