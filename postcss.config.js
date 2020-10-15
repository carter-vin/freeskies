const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './containers/**/*.js',
      './components/**/*.js',
      './node_modules/antd/es/**/*.css',
      './node_modules/react-alice-carousel/**/*.css',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  // parser: 'postcss-scss',
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
