# Alien Numeral Translator

This project provides a translator for a fictional alien numeral system. It converts alien numeral strings into their corresponding numeric values based on predefined rules.

## Features

- Translate alien numeral strings into numeric values.
- Validate input against alien numeral rules.
- Handle errors for invalid characters, duplicate rules, and descending order violations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/supacheep-first/alien-numeral.git
   cd alien-numeral
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

Run the translator interactively:

```bash
node main.js
```

You will be prompted to enter an alien numeral string. The program will output the corresponding numeric value or an error message if the input violates any rules.

## Testing

Run the test suite using Jest:

```bash
pnpm test
```

The tests cover various scenarios, including valid translations, invalid inputs, and rule violations.
