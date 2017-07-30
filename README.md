# Fetching data with Material UI & Dynamic Import

This example allow you to fetch data from api get news from `techcrunch` using api service: [https://newsapi.org/](https://newsapi.org/). 

In this example, I use:
+ Babel config
+ PostCSS config
+ Webpack config: to add plugins allow develop CSS using SCSS
+ Redux
+ Material UI
+ Custom Document
+ Custom Server
+ Next Routes
+ Data fetching
+ Gulp
+ Dynamic import

Basically, Next.JS allow you to use `style-jsx` package to develop CSS, but in the production mode, html is not minified. I resolved it using `gulp` allow you to bundle final all scss into css & with postCSS to auto prefix the final css.

You can visit here to know detail about problems that I met during development:

[https://medium.com/@nndung179/next-js-at-chotot-ca9c1520f436](https://medium.com/@nndung179/next-js-at-chotot-ca9c1520f436)

## Prefix Domain

go to `utils/constants` change prefix name whatever you want. In this demo, I choose `/news`. Then just browse to: 

http://localhost:3000/news

Note: Currently, there is no offical way to configure `prefix` in `next.js`. This demo worked well in next.js 3 beta version.

# development

require
```bash
npm i nodemon -g
```

npm
```bash
npm i
npm start
```

yarn
```bash
yarn install
yarn start
```

# production

npm
```bash
npm i
npm run production
```

yarn
```bash
yarn install
yarn run production
```


# demo-nextjs-react-semanticui


## NextJS configure HEAD
Example: Add SemanticUI-React CSS as a Head see
https://github.com/feronera/demo-nextjs-react-semanticui/blob/master/pages/_document.js

## With Redux

https://github.com/zeit/next.js/blob/master/examples/with-redux

```
yarn add redux react-redux redux-thunk next-redux-wrapper
```

## Default directory with babel-plugin-root-import
Use "@" as a default directory for easier refer file suh as
Example: pages/example.babel-root-import.js

```
import test as "@/components/test"
```

Need to comfigure.babelrc and install package babel-plugin-root-import
```
yarn add babel-plugin-root-import
```
.babelrc
```
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["babel-plugin-root-import", [
      {
        "rootPathPrefix": "@"
      }
    ]]
  ]
}
```

# Reference

+ [https://github.com/nndung179/nextjs-full-demo] (https://github.com/nndung179/nextjs-full-demo)
+ [https://github.com/zeit/next.js/](https://github.com/zeit/next.js/)

