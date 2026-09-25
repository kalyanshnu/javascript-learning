# 📜 JavaScript Practice Questions & Solutions

This document contains JavaScript practice questions with detailed solutions focused on **Loops** and **Arrays**.

Click on any question to reveal the answer. 🚀

---

## 3️⃣ Loops

### 11. Write a `for` loop to print numbers from 10 to 1 in reverse.

<details>
<summary>💡 Show Solution</summary>

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

**Output:**

```text
10
9
8
7
6
5
4
3
2
1
```

</details>

---

### 12. Use a `while` loop to print multiples of 3 from 3 to 30.

<details>
<summary>💡 Show Solution</summary>

```javascript
let num = 3;

while (num <= 30) {
    console.log(num);
    num += 3;
}
```

**Output:**

```text
3
6
9
12
15
18
21
24
27
30
```

</details>

---

### 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

<details>
<summary>💡 Show Solution</summary>

```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum); // Output: 5050
```

**Output:**

```text
Sum: 5050
```

</details>

---

### 14. Create a nested loop to print a star pattern.

<details>
<summary>💡 Show Solution</summary>

```javascript
for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}
```

**Output:**

```text
*
**
***
****
*****
```

</details>

---

### 15. Use a `for...of` loop to iterate over the string `"JavaScript"`.

<details>
<summary>💡 Show Solution</summary>

```javascript
let str = "JavaScript";

for (let char of str) {
    console.log(char);
}
```

**Output:**

```text
J
a
v
a
S
c
r
i
p
t
```

</details>

---

## 4️⃣ Arrays

### 16. Remove duplicate values from an array.

<details>
<summary>💡 Show Solution</summary>

```javascript
let arr = [1, 2, 3, 2, 4, 3, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4, 5]
```

**Output:**

```text
[1, 2, 3, 4, 5]
```

</details>

---

### 17. Find the second largest number in an array.

<details>
<summary>💡 Show Solution</summary>

```javascript
function secondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => b - a);

    return sorted.length > 1 ? sorted[1] : null;
}

console.log(secondLargest([10, 20, 5, 30, 30])); // Output: 20
```

**Output:**

```text
20
```

**Note:** Duplicate values are removed before finding the second-largest number.

</details>

---

### 18. Sort an array in descending order.

<details>
<summary>💡 Show Solution</summary>

```javascript
let numbers = [5, 2, 9, 1, 5, 6];

numbers.sort((a, b) => b - a);

console.log(numbers); // [9, 6, 5, 5, 2, 1]
```

**Output:**

```text
[9, 6, 5, 5, 2, 1]
```

</details>

---

### 19. Reverse an array without using `.reverse()`.

<details>
<summary>💡 Show Solution</summary>

```javascript
function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```

**Output:**

```text
[4, 3, 2, 1]
```

</details>

---

### 20. Find the most frequent element in an array.

<details>
<summary>💡 Show Solution</summary>

```javascript
function mostFrequent(arr) {
    let freqMap = {};
    let maxFreq = 0;
    let mostFrequentNum = null;

    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;

        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mostFrequentNum = num;
        }
    }

    return mostFrequentNum;
}

console.log(mostFrequent([1, 3, 3, 2, 3, 2, 2, 2, 2])); // Output: 2
```

**Output:**

```text
2
```

**Note:** If multiple elements have the same highest frequency, this implementation returns the element that reaches that frequency first.

</details>

---

## 📌 Topics Covered

- `for` loop
- `while` loop
- Nested loops
- `for...of` loop
- Arithmetic accumulation
- Star patterns
- Removing duplicates using `Set`
- Sorting arrays
- Reversing arrays using loops
- Frequency counting using objects
- Functions and conditional expressions
