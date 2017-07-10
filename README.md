# parse-css-transition

> Parses CSS transitions into an object.

## Installation

With npm:

```sh
npm install --save parse-css-transition
```

With yarn:

```sh
yarn add parse-css-transition
```

## Usage

```js
import parseCssTransition from 'parse-css-transition';

parseCssTransition('color 2s ease 100ms');
// {
//   name: 'color',
//   duration: 2000,
//   timingFunction: 'ease',
//   delay: 100
// }
```
