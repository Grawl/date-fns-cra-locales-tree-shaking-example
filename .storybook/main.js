module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          implementation: require("sass"),
        },
      }
    },
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
