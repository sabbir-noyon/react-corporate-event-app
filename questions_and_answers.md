<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>


<p>

#### My Answer:  B - ReferenceError: greetign is not defined.

<i>Explanation : In the code provided, there is a typo in the variable name. It should be greeting, not greetign. Due to the typo, JavaScript will treat greetign as an undeclared variable, which will result in a ReferenceError. Therefore, the correct answer is ReferenceError: greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### My Answer: A - NaN

<i>Explanation: JavaScript is dynamically typed, which means it performs type coercion when performing operations on different data types. In this case, when you add a number (1) to a string ("2"), JavaScript converts the number to a string and performs string concatenation. Therefore, the result is "12". The correct answer is "12", which represents the concatenation of 1 and "2".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### My Answer: A - ['🍕', '🍫', '🥑', '🍔']

<i>Explanation: In this code, food is an array, and info.favoriteFood is assigned the value of the first element of the food array, which is "🍕". Later, info.favoriteFood is changed to "🍝". However, changing the value of info.favoriteFood does not affect the original food array. Therefore, when you log food, it remains ['🍕', '🍫', '🥑', '🍔']. The correct answer is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### My Answer: B - Hi there, undefined

<i>Explanation: The sayHi function expects a parameter name, but when it is called with sayHi(), no argument is provided. In JavaScript, if a function parameter is not provided with a value, it defaults to undefined. Therefore, the function returns "Hi there, undefined" because name is undefined. The correct answer is "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### My Answer: B - [2] 

<i>Explanation: The forEach method iterates over the elements of the nums array, and for each element, it checks if the element is truthy. In JavaScript, 0 is considered falsy, and all other numbers are truthy. Therefore, the only elements in the array that pass the truthy check are 1, 2, and 3. As a result, the count variable is incremented three times, making it 3. The correct answer is 2, which represents the number of truthy elements in the array</i>

</p>
</details>
