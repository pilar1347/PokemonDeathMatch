import FightLogic from './FightLogic';

describe('Fight Logic', () => {
  const contenders = [
    { name: 'bulbasaur' },
    { name: 'weedle' }
  ];
  it('Should return randomly selected winner\'s name', () => {
    const winner = FightLogic(contenders);
    expect(contenders).toContainEqual(
      expect.objectContaining({ name: winner })
    );
  });
});
