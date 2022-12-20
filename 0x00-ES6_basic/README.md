# ES6 Basics

> I learnt the basics of ES6 and **accomplished** the **project's objectives** below:

## Objectives

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks

1. **Const or let?**

   **Modify**

   1. function `taskFirst` to instantiate variables using `const`
   2. function `taskNext` to instantiate variables using `let`

   ```javascript
   export function taskFirst() {
     var task = "I prefer const when I can.";
     return task;
   }

   export function getLast() {
     return " is okay";
   }

   export function taskNext() {
     var combination = "But sometimes let";
     combination += getLast();

     return combination;
   }
   ```

   **Execution example:**

   ```javascript
   bob@dylan:~$ cat 0-main.js
   import { taskFirst, taskNext } from './0-constants.js';

   console.log(`${taskFirst()} ${taskNext()}`);

   bob@dylan:~$
   bob@dylan:~$ npm run dev 0-main.js
   I prefer const when I can. But sometimes let is okay
   bob@dylan:~$
   ```

2. **Block Scope**

   Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

   ```javascript
   export default function taskBlock(trueOrFalse) {
     var task = false;
     var task2 = true;

     if (trueOrFalse) {
       var task = true;
       var task2 = false;
     }

     return [task, task2];
   }
   ```

   **Execution:**

   ```
    bob@dylan:~$ cat 1-main.js
    import taskBlock from './1-block-scoped.js';

    console.log(taskBlock(true));
    console.log(taskBlock(false));
    bob@dylan:~$
    bob@dylan:~$ npm run dev 1-main.js
    [ false, true ]
    [ false, true ]
    bob@dylan:~$
   ```

3. **Arrow functions**

   Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

   ```javascript
   export default function getNeighborhoodsList() {
     this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

     const self = this;
     this.addNeighborhood = function add(newNeighborhood) {
       self.sanFranciscoNeighborhoods.push(newNeighborhood);
       return self.sanFranciscoNeighborhoods;
     };
   }
   ```

   **Execution:**

   ```
    bob@dylan:~$ cat 2-main.js
    import getNeighborhoodsList from './2-arrow.js';

    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
    bob@dylan:~$
    bob@dylan:~$ npm run dev 2-main.js
    [ 'SOMA', 'Union Square', 'Noe Valley' ]
    bob@dylan:~$
   ```

4. **Parameter defaults**

   Condense the internals of the following function to 1 line - without changing the name of each function/variable.

   > Hint: The key here to define default parameter values for the function parameters.

   ```javascript
   export default function getSumOfHoods(
     initialNumber,
     expansion1989,
     expansion2019
   ) {
     if (expansion1989 === undefined) {
       expansion1989 = 89;
     }

     if (expansion2019 === undefined) {
       expansion2019 = 19;
     }
     return initialNumber + expansion1989 + expansion2019;
   }
   ```

   **Execution:**

   ```
    bob@dylan:~$ cat 3-main.js
    import getSumOfHoods from './3-default-parameter.js';

    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));
    bob@dylan:~$
    bob@dylan:~$ npm run dev 3-main.js
    142
    56
    41
    bob@dylan:~$
   ```

5. **Rest parameter syntax for functions**

   Modify the following function to return the number of arguments passed to it using the rest parameter syntax

   ```javascript
   export default function returnHowManyArguments() {}
   ```

   Example:

   ```bash
    > returnHowManyArguments("Hello", "Holberton", 2020);
    3
    >
   ```

   **Execution:**

   ```bash
   bob@dylan:~$ cat 4-main.js
   import returnHowManyArguments from './4-rest-parameter.js';

   console.log(returnHowManyArguments("one"));
   console.log(returnHowManyArguments("one", "two", 3, "4th"));
   bob@dylan:~$
   bob@dylan:~$ npm run dev 4-main.js
   1
   4
   bob@dylan:~$
   ```

6. **The wonders of spread syntax**

   Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

   ```javascript
   export default function concatArrays(array1, array2, string) {}
   ```

   **Execution:**

   ```bash
    bob@dylan:~$ cat 5-main.js
    import concatArrays from './5-spread-operator.js';

    console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

    bob@dylan:~$
    bob@dylan:~$ npm run dev 5-main.js
    [
      'a', 'b', 'c',
      'd', 'H', 'e',
      'l', 'l', 'o'
    ]
    bob@dylan:~$
   ```

7. **Take advantage of template literals**

    Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

    ```javascript
    export default function getSanFranciscoDescription() {
      const year = 2017;
      const budget = {
        income: "$119,868",
        gdp: "$154.2 billion",
        capita: "$178,479",
      };

      return (
        "As of " +
        year +
        ", it was the seventh-highest income county in the United States" /
          ", with a per capita personal income of " +
        budget.income +
        ". As of 2015, San Francisco" / " proper had a GDP of " +
        budget.gdp +
        ", and a GDP per capita of " +
        budget.capita +
        "."
      );
    }
    ```
    **Execution:**
    ```bash
      bob@dylan:~$ cat 6-main.js
      import getSanFranciscoDescription from './6-string-interpolation.js';

      console.log(getSanFranciscoDescription());

      bob@dylan:~$
      bob@dylan:~$ npm run dev 6-main.js 
      As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
      bob@dylan:~$
    ```
8. **Object property value shorthand syntax**
   Notice how the keys and the variable names are the same?

   Modify the following function’s `budget` object to simply use the keyname instead.
   ```javascript
    export default function getBudgetObject(income, gdp, capita) {
      const budget = {
        income: income,
        gdp: gdp,
        capita: capita,
      };

      return budget;
    }
   ```
   **Execution:**
   ```bash
    bob@dylan:~$ cat 7-main.js
    import getBudgetObject from './7-getBudgetObject.js';

    console.log(getBudgetObject(400, 700, 900));

    bob@dylan:~$
    bob@dylan:~$ npm run dev 7-main.js 
    { income: 400, gdp: 700, capita: 900 }
    bob@dylan:~$
   ```
9. **No need to create empty objects before adding in properties**
    Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object
    ```javascript
      function getCurrentYear() {
        const date = new Date();
        return date.getFullYear();
      }

      export default function getBudgetForCurrentYear(income, gdp, capita) {
        const budget = {};

        budget[`income-${getCurrentYear()}`] = income;
        budget[`gdp-${getCurrentYear()}`] = gdp;
        budget[`capita-${getCurrentYear()}`] = capita;

        return budget;
      }
    ```
    **Execution:**
    ```bash
      bob@dylan:~$ cat 8-main.js
      import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

      console.log(getBudgetForCurrentYear(2100, 5200, 1090));

      bob@dylan:~$
      bob@dylan:~$ npm run dev 8-main.js 
      { 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
      bob@dylan:~$
    ```
10. **ES6 method properties**
    Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
    ```javascript
      import getBudgetObject from './7-getBudgetObject.js';

      export default function getFullBudgetObject(income, gdp, capita) {
        const budget = getBudgetObject(income, gdp, capita);
        const fullBudget = {
          ...budget,
          getIncomeInDollars: function (income) {
            return `$${income}`;
          },
          getIncomeInEuros: function (income) {
            return `${income} euros`;
          },
        };

        return fullBudget;
      }
    ```
    **Execution:**
    ```
      bob@dylan:~$ cat 9-main.js
      import getFullBudgetObject from './9-getFullBudget.js';

      const fullBudget = getFullBudgetObject(20, 50, 10);

      console.log(fullBudget.getIncomeInDollars(fullBudget.income));
      console.log(fullBudget.getIncomeInEuros(fullBudget.income));

      bob@dylan:~$
      bob@dylan:~$ npm run dev 9-main.js 
      $20
      20 euros
      bob@dylan:~$
    ```
11. **For...of Loops**
    Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.
    ```javascript
      export default function appendToEachArrayValue(array, appendString) {
        for (var idx in array) {
          var value = array[idx];
          array[idx] = appendString + value;
        }

        return array;
      }
    ```
    **Execution:**
    ```
      bob@dylan:~$ cat 10-main.js
      import appendToEachArrayValue from './10-loops.js';

      console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

      bob@dylan:~$
      bob@dylan:~$ npm run dev 10-main.js 
      [ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
      bob@dylan:~$
    ```
12. **Iterator**
    Write a function named `createEmployeesObject` that will receive two arguments:

    - `departmentName` (String)
    - `employees` (Array of String)
    ```javascript
      export default function createEmployeesObject(departmentName, employees) {

      }
    ```
    The function should return an object with the following format:
    ```javascript
      {
          $departmentName: [
                $employees,
          ],
      }
    ```
    **Execution:**
    ```
      bob@dylan:~$ cat 11-main.js
      import createEmployeesObject from './11-createEmployeesObject.js';

      console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

      bob@dylan:~$
      bob@dylan:~$ npm run dev 11-main.js 
      { Software: [ 'Bob', 'Sylvie' ] }
      bob@dylan:~$

    ```
