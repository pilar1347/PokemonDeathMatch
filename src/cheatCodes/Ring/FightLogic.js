const pickWinner = contenders => {
  const winnerIndex = Math.floor(Math.random() * contenders.length);
  console.log({ winnerIndex });
  return contenders[winnerIndex];
};

export default pickWinner;
