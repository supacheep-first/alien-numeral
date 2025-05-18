const { alienCodeTranslator } = require("./main");
const {
  ALIEN_CODE,
  ALIEN_CODE_RULE,
  ALIEN_CODE_DUPLICATE,
} = require("./alien-code");

describe("alienCodeTranslator", () => {
  test("aaa = 3", async () => {
    const input = "aaa";
    const result = alienCodeTranslator(input);
    expect(result).toBe(3);
  });

  test("Invalid character", () => {
    const input = "AX";
    expect(() => alienCodeTranslator(input)).toThrow("Invalid character: X");
  });

  test("Invalid character input number", () => {
    const input = "A2";
    expect(() => alienCodeTranslator(input)).toThrow("Invalid character: 2");
  });

  test("empty input", () => {
    const input = "";
    const result = alienCodeTranslator(input);
    expect(result).toBe(0);
  });

  test("single character input", () => {
    const input = "A";
    const result = alienCodeTranslator(input);
    expect(result).toBe(1);
  });

  test("3 duplicate charactor", () => {
    const input = "AAA";
    const result = alienCodeTranslator(input);
    expect(result).toBe(3);
  });

  test("4 duplicate charactor", () => {
    const input = "AAAA";
    expect(() => alienCodeTranslator(input)).toThrow("Duplicate error");
  });

  test("brack the rule of duplicate charactor B", () => {
    const input = "BB";
    expect(() => alienCodeTranslator(input)).toThrow("Duplicate error");
  });

  test("brack the rule of duplicate charactor L", () => {
    const input = "LLL";
    expect(() => alienCodeTranslator(input)).toThrow("Duplicate error");
  });

  test("break the rule of duplicate charactor D", () => {
    const input = "DDDD";
    expect(() => alienCodeTranslator(input)).toThrow("Duplicate error");
  });

  test("2 and 3 duplicate charactor (can be duplicate by rule) Z", () => {
    const input = "ZZ";
    const result = alienCodeTranslator(input);
    expect(result).toBe(20);
  });

  test("2 and 3 duplicate charactor (can be duplicate by rule) C", () => {
    const input = "CCC";
    const result = alienCodeTranslator(input);
    expect(result).toBe(300);
  });

  test("2 and 3 duplicate charactor (can be duplicate by rule) R", () => {
    const input = "RR";
    const result = alienCodeTranslator(input);
    expect(result).toBe(2000);
  });

  test("subtract", () => {
    const input = "zl";
    const result = alienCodeTranslator(input);
    expect(result).toBe(40);
  });

  test("break subtract rule", () => {
    const input = "al";
    expect(() => alienCodeTranslator(input)).toThrow("Rule error");
  });

  test("break subtract rule", () => {
    const input = "ar";
    expect(() => alienCodeTranslator(input)).toThrow("Rule error");
  });

  test("break subtract rule", () => {
    const input = "zr";
    expect(() => alienCodeTranslator(input)).toThrow("Rule error");
  });

  test("subtrack and plus", () => {
    const input = "aba";
    expect(() => alienCodeTranslator(input)).toThrow(
      "No addition after subtraction"
    );
  });

  test("lbaaa", () => {
    const input = "lbaaa";
    const result = alienCodeTranslator(input);
    expect(result).toBe(58);
  });

  test("rcrzcab", () => {
    const input = "rcrzcab";
    const result = alienCodeTranslator(input);
    expect(result).toBe(1994);
  });

  test("crzlab", () => {
    const input = "crzlab";
    const result = alienCodeTranslator(input);
    expect(result).toBe(944);
  });

  test("crlzab", () => {
    const input = "crlzab";
    const result = alienCodeTranslator(input);
    expect(result).toBe(964);
  });

  test("No double subtraction", () => {
    const input = "aab";
    expect(() => alienCodeTranslator(input)).toThrow("No double subtraction");
  });

  test("No double subtraction", () => {
    const input = "ccr";
    expect(() => alienCodeTranslator(input)).toThrow("No double subtraction");
  });

  test("No double subtraction", () => {
    const input = "aaab";
    expect(() => alienCodeTranslator(input)).toThrow("No double subtraction");
  });

  test("No double subtraction", () => {
    const input = "ccr";
    expect(() => alienCodeTranslator(input)).toThrow("No double subtraction");
  });
});
