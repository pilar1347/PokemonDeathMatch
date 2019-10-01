const FightLogic = contenders => {
  const winner = Math.floor(Math.random() * contenders.length);
  return contenders[winner].name;
};

export default FightLogic;
