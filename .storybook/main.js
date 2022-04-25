module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*",
    "../src/stories/**/*.stories.*",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
  ],
  "framework": "@storybook/react"
}