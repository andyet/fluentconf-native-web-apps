# LabelFor.me

Live site: [http://labelfor.me](http://labelfor.me/)

Sample app built using [Ampersand.js](http://ampersandjs.com/) using [React](http://facebook.github.io/react/) as a view layer.

This app lets you log in with GitHub and view/edit labels for your repos.

It's compiled into a completely static site and deployed to [LabelFor.me](http://labelfor.me/) as a fully static site using [Surge.sh](http://surge.sh/).

## Running it

When you run it using `npm start` (this is development mode), styles and React components are hotloaded without needing any browser extensions, simply make changes and save.

When you run `npm build` a static site gets created ins `/public` which can be deployed to surge. (You'd have to change the domain option in `package.json` to run the `yolo` (deploy) script since you don't have permission to deploy to the production domain)

## Features

- Written in ES6+, compiled with [Babel.js](https://babeljs.io/)
- Uses these [Ampersand Modules](http://ampersandjs.com/):
  - ampersand-app
  - ampersand-local-cache-mixin
  - ampersand-model
  - ampersand-react-mixin
  - ampersand-rest-collection
  - ampersand-router
- [Webpack](http://webpack.github.io/) powers the development server and build system, and has been configured with [hjs-webpack](https://github.com/henrikjoreteg/hjs-webpack)
- OAuth secrets are kept secret by using a free click-to-deploy instance of [gatekeeper](https://github.com/prose/gatekeeper#deploy-on-heroku) deployed to [Heroku](http://heroku.com). It's only job is to keep the Client Secret for the Github app, a secret.
- Backbutton and proper URLs are implemented with ampersand-router and made possible in a static site due to Surge's clever approach of using a `200.html` file at your root as the catchall (if present). You can learn more by [reading the surge intro post](https://medium.com/surge-sh/introducing-surge-the-cdn-for-front-end-developers-b4a50a61bcfc)
