module.exports = {
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
      },
    ],
  ],
  presets: [
    [
      "next/babel",
      {
        "preset-env": {
          corejs: 3,
          useBuiltIns: "entry",
        },
      },
    ],
  ],
};
