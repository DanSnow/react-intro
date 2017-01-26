React Intro
===========

[![Greenkeeper badge](https://badges.greenkeeper.io/DanSnow/react-intro.svg)](https://greenkeeper.io/)

This is a React component for step-by-step guide and feature introduction.   
Inspire by [intro.js](http://introjs.com/).   
Currently, it is a very simple version.

## Usage ##

See [example](examples/simple/components/App.js) for usage example.

## API ##

### <IntroRoot /> ###

|    Prop    |    Type    |          Description          |
| ---------- | ---------- | ----------------------------- |
| start      | bool       | Control start or not          |
| onFinish   | func       | Emit on it is finish          |
| children   | node(opt.) | Children                      |

### <Intro /> ###

|    Prop    |    Type      |          Description                |
| ---------- | ------------ | ----------------------------------- |
| text       | string       | Intro. text                         |
| step       | number       | Step number                         |
| position   | string(opt.) | Pos. of intro. Only bottom or right |
| children   | node         | Only allow a child                  |
