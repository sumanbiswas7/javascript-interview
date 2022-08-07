# Javascript Interview

basic to intermediate level questions and answers, resources to prepare for javascript interview

## Table of contents

| No  | Core concepts                                                             |
| --- | ------------------------------------------------------------------------- |
| 1   | [Check if the user exists in the given object](#Check-if-the-user-exists) |
| 2   | [Explain "this" keyword in javascript](#this-keyword-in-javascript)       |

## Answers

### Check if the user exists

```javascript
const users = [
  { name: "paul", age: 22 },
  { name: "jerry", age: 18 },
  { name: "rita", age: 25 },
  { name: "max", age: 21 },
  { name: "harry", age: 21 },
];
```

to find if a given user exists in the users array we could use filter, loops, etc. but we only need true if the user exists or false if not. array.some() function can be the best option for dealing with this senario.

```javascript
users.some((user) => user.name === "paul"); //true
users.some((user) => user.name === "cillian"); //false
```

<br/>**[⬆ Back to Top](#table-of-contents)**

### This keyword in javascript

in javascript this keyword represents the execution context, basically, the object that's calling the func, there are so many caveats to keep in mind please go through these articles below to get a good understanding of this.

1. [Beginner explaination of this](https://www.youtube.com/watch?v=gvicrj31JOM)
2. [Intermediate explanation of this](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)

<br/>**[⬆ Back to Top](#table-of-contents)**
