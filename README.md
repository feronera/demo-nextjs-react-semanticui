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