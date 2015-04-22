# FluentConf Native Web Apps Workshop

Copy of the app we're buildling: [http://hubtags.com](http://hubtags.com) github repo for that app: https://github.com/henrikjoreteg/hubtags.com

## Catching up as we go

Going to be pushing code here as we go: http://github.com/henrikjoreteg/labelr

If you want to check your code or catch up, you can always grab latest from there.

## Feedback form

We <3 feedback, good or bad (you'll have some time to do this at the end):

http://j.mp/fluent-feedback

## Snippets

Please try the [copypasta](copypasta.md) it's delicious.

Relevant links:

- node.js: http://nodejs.org/
- npm: https://www.npmjs.com/
- Register for github developer program: https://developer.github.com/program/
- Heroku: http://heroku.com/
- GateKeeper (heroku github thing): https://github.com/prose/gatekeeper
- React: http://facebook.github.io/react/
- Ampersand.js: http://ampersandjs.com/
- Local Cache Mixin: https://github.com/henrikjoreteg/ampersand-local-cache-mixin
- Surge: http://surge.sh/

## What you'll need before we start

1. Node.js and npm installed (Download and run the installer from http://nodejs.org/)
    - You should be able to run `npm` and `node` in a terminal and not see an error
2. A free account on [Github.com](https://github.com/join)
3. A text editor of your choice (I'll be using (Sublime Text)[http://www.sublimetext.com/]).

## Goals?

1. Giving you tools, knowledge and confidence to build and deploy an application from scratch.
2. Familiarizing you with basics of:
    - ES6+
    - Node.js/npm
    - Ampersand.js
    - React
    - Webpack
    - Isomorphic Rendering
    - Providing user logins using an OAuth API
    - Consuming an external JSON API
3. Putting your app on the Internet

## Resources / Reading

- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Reusable React Components](https://facebook.github.io/react/docs/reusable-components.html)
- [Standard Linter](https://github.com/feross/standard)
- [Setting up ESLint, React and ES6](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
- [Labelr Demo App Source](https://github.com/HenrikJoreteg/labelr)
- [Complete HubTags.com Source](https://github.com/henrikjoreteg/hubtags.com)

## Rough Outline

**9:00 Start**

- Short intro talk
- Project setup
- Deploy index page with surge
- Setup hjs-webpack
- Deploy built app.js file with surge
- Render basic "hello" content with React
- Intro to React.js

** frameworks talk/discussion **

- Adding styles
    - show yeticss.com
    - create styles folder in src
    - import yeticss.com
    - show what happens when you build now
    - show live reloading in action
- Convert ES5 React module to ES6
    - compare them side-by-side

**10:30 - 11:00 morning break**

- Install and use the router
    - public and 'repos' routes
    - start with console.log routes
    - React.render inside method
    - re-deploy
- Introduce ampersand-app pattern
    - demo event signaling via app
- Add layout.js
- Local links/Internal Nav Component

**12:30 - 1:45 Lunch Break**

- Authing with GitHub
- Persisting token, modeling 'me'
- fetching me from github
- Binding username

**3:15 - 3:45 Afternoon Break**

- Rendering list of Repos
- Repo Detail Page
- Rendering The Labels
- Creating a Label component
- Adding Octicons


## Day 2

**9:00 Start**

- Editing Mode for Labels
- Deleting Labels
- Updating Labels
- Creating New Labels

**10:30 - 11:00 morning break**

- Cleanup, Optimization, Bug Fixes
- Configs and Deploys
- Adding A 404 Page

**12:30 - 1:45 Lunch Break**

- Static Isomorphic Rendering
- Using Standard for Code Style
- Bugfixes and Cleanup

**3:15 - 3:45 Afternoon Break**

- Open hacking
    - Add a link to real repo
    - Add validation to form
    - Add user avatar
    - Switch it over to login with firebase
    - Write module that fetches "all" repos (using github paging API)
    - Add color picker?


