const ALIEN_CODE = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
};

const ALIEN_CODE_RULE = {
  1: [5, 10],
  10: [50, 100],
  100: [500, 1000],
};

const ALIEN_CODE_DUPLICATE = [1, 10, 100, 1000];

module.exports = {
  ALIEN_CODE,
  ALIEN_CODE_RULE,
  ALIEN_CODE_DUPLICATE,
};
