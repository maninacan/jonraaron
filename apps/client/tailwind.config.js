const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          0: '#AA3939',
          1: '#FFAAAA',
          2: '#D46A6A',
          3: '#801515',
          4: '#550000',
        },
        secondary: {
          1: {
            0: '#226666',
            1: '#669999',
            2: '#407F7F',
            3: '#0D4D4D',
            4: '#003333',
          },
          2: {
            0: '#7B9F35',
            1: '#D4EE9F',
            2: '#A5C663',
            3: '#567714',
            4: '#354F00',
          },
        },
      },
    },
  },
  plugins: [],
};
