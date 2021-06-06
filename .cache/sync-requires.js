const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/irfan/Downloads/portfolo/irfan_portfolio/.cache/dev-404-page.js"))),
  "component---src-lekoarts-gatsby-theme-cara-templates-cara-tsx": hot(preferDefault(require("/home/irfan/Downloads/portfolo/irfan_portfolio/src/@lekoarts/gatsby-theme-cara/templates/cara.tsx")))
}

