const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./containers/**/*.js", "./node_modules/antd/es/**/*.css"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
