# LabelFor.me

Live site: [http://labelfor.me](http://labelfor.me/)

Sample app built using [Ampersand.js](http://ampersandjs.com/) using [React](http://facebook.github.io/react/) as a view layer.

This app lets you log in with GitHub and view/edit labels for your repos.

It's compiled into a completely static site and deployed to [LabelFor.me](http://labelfor.me/) as a fully static site using [Surge.sh](http://surge.sh/).

## Running it

When you run it using `npm start` (this is development mode), styles and React components are hotloaded without needing any browser extensions, simply make changes and save.

When you run `npm build` a static site gets created ins `/public` which can be deployed to surge. (You'd have to change the domain option in `package.json` to run the `yolo` (deploy) script since you don't have permission to deploy to the production domain)

## Features/Tools

At the end of the day, the goal is to simplify the actual experience of developing an app.

But, in order to actually, make it seem simple, there's a ton of tools and tech under the hood to handle all the hairy details.

Here's what it uses and how it works:

- Written in ES6+, compiled with [Babel.js](https://babeljs.io/)
- Uses these [Ampersand Modules](http://ampersandjs.com/):
  - ampersand-app
  - ampersand-local-cache-mixin
  - ampersand-model
  - ampersand-react-mixin
  - ampersand-rest-collection
  - ampersand-router
- [Webpack](http://webpack.github.io/) powers the development server and build system, and has been configured with [hjs-webpack](https://github.com/henrikjoreteg/hjs-webpack)
  - Note that major dependencies of hjs-webpack, like webpack itself are all installed as `peerDependencies` to allow you to set the exact version you want to use.
  - Same is true of stuff like Babel and React
- OAuth secrets are kept secret by using a free click-to-deploy instance of [gatekeeper](https://github.com/prose/gatekeeper#deploy-on-heroku) deployed to [Heroku](http://heroku.com). It's only job is to keep the Client Secret for the Github app, a secret.
- Backbutton and proper URLs are implemented with ampersand-router and made possible in a static site due to Surge's clever approach of using a `200.html` file at your root as the catchall (if present). You can learn more by [reading the surge intro post](https://medium.com/surge-sh/introducing-surge-the-cdn-for-front-end-developers-b4a50a61bcfc)
- Uses [yeticss.com](http://yeticss.com/) for styles.
  - Stylsheets are imported (required) from within the application code just like JS (thanks webpack)
  - During development they're bundled into the main JS bundle
  - When the build script is run, a seperate minified CSS file is produced in the `/public` dir
- Uses [autoprefixer-stylus](https://www.npmjs.com/package/autoprefixer-stylus) to seemlessly insert those pesky `-moz`, `-webkit` prefixes where required.
- Use GitHub's [Octicon](https://octicons.github.com/) icon set
  - Installed via npm just like other assets.
  - required in `/src/app.js` with this line `import octicons from 'octicons/octicons/octicons.css'`
  - Thanks to the [webpack file-loader](https://github.com/webpack/file-loader#file-loader-for-webpack) as configured in [hjs-webpack](https://github.com/henrikjoreteg/hjs-webpack) the icon fonts are inlined as base64 so you don't have to think about relative URLs in CSS. No manually copying assets into output directory needed, just npm install and require CSS.
- We use React as the view layer.


