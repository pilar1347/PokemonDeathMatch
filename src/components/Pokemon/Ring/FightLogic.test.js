import FightLogic from './FightLogic';

describe('Fight Logic', () => {
  const contenders = [
    { name: 'bulbasaur' },
    { name: 'pikachu' },
    { name: 'gastly' }
  ];
  it('Should return winner\'s name', () => {
    const winner = FightLogic(contenders);
    expect(contenders).toEqual(
      expect.arrayContaining([{ name: winner }])
    );
  });
});
