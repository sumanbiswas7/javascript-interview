# Javascript Interview

basic to intermediate level questions and answers, resources to prepare for javascript interview

## Table of contents

| No  | Core concepts                                                             |
| --- | ------------------------------------------------------------------------- |
| 1   | [Check if the user exists in the given object](#Check-if-the-user-exists) |
| 2   | [Explain "this" keyword in javascript](#header)                           |

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

**[⬆ Back to Top](#table-of-contents)**
