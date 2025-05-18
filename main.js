const readline = require("readline");
const {
  ALIEN_CODE,
  ALIEN_CODE_RULE,
  ALIEN_CODE_DUPLICATE,
} = require("./alien-code");
const { exit } = require("process");

const alienCodeTranslator = (input) => {
  const listAlienNumbers = [];
  const listExtraAlienNumbers = [];
  const listExtraAlienNumbersCal = [];
  let extract = [];

  // extract the alien numbers from the input
  for (const char of input.toUpperCase()) {
    const current = ALIEN_CODE[char] || 0;
    if (current === 0) {
      throw new Error(`Invalid character: ${char}`);
    }
    listAlienNumbers.push(current);
  }

  for (let i = 0; i < listAlienNumbers.length; i++) {
    const current = listAlienNumbers[i];
    const next = listAlienNumbers[i + 1] || 0;
    const nextNext = listAlienNumbers[i + 2] || 0;

    // Check for duplicates
    if (current === next) {
      const is4Duplicate =
        i >= 2 &&
        listAlienNumbers[i - 1] === current &&
        listAlienNumbers[i - 2] === current;

      if (!ALIEN_CODE_DUPLICATE.includes(current) || is4Duplicate) {
        throw new Error(`Duplicate error`);
      }
    }

    // Check for invalid rules
    extract.push(current);
    if (current < next) {
      if (
        !ALIEN_CODE_RULE[current] ||
        !ALIEN_CODE_RULE[current].includes(next)
      ) {
        throw new Error(`Rule error`);
      }
      if (nextNext > 0 && nextNext >= current) {
        throw new Error(`No addition after subtraction`);
      }
    } else {
      if (next < nextNext && current < nextNext) {
        throw new Error(`No double subtraction`);
      }
      listExtraAlienNumbers.push(`${extract}`);
      listExtraAlienNumbersCal.push(extract.reduce((a, b) => -a + b, 0));
      extract = [];
    }
  }
  console.log(listExtraAlienNumbers);
  console.log(listExtraAlienNumbersCal);

  return listExtraAlienNumbersCal.reduce((a, b) => a + b, 0);
};

const handleUserInput = (input, rl) => {
  try {
    console.log(`You entered: ${input}`);

    const result = alienCodeTranslator(input);

    console.log(`Result is: ${result}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
};

const start = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter alien code: ", (input) => {
    handleUserInput(input, rl);
  });
};

if (require.main === module) {
  start();
}

module.exports = { alienCodeTranslator };
