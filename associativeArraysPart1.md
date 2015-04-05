##Algorithms and Data Structures in JavaScript - PART I

"Algorithms + Data Structures = Programs" Niklaus Wirth

In this series of posts, I aim to explain data structures and algorithms in JavaScript. Let's get started!

An **algorithm** is a series of computational steps that transform an input into the desired output.

A **data structure** is a way to store and organize data to make access and modifications to that data possible and easier.


###Data Structures - PART I - Associate Arrays

**Associate arrays** are fundamental data structures. You can think of them as ```key -> value``` pairs. In JavaScript, we also have objects that also hold a key and a value pair. So, basically objects are associate arrays.

####Associate Arrays vs Arrays:
  - Associate arrays use strings instead of integers as index values.

  ```javascript
  var regularArray = new Array(); //var regularArray = [];
  regularArray[0] = "Los Angeles";
  regularArray[1] = "New York";
  regularArray[2] = "Istanbul";
  ```
  ```javascript
  var associativeArray = new Array();
  associativeArray["dreamCity"] = "Los Angeles";
  associativeArray["visitedCity"] = "New York";
  associativeArray["homeCity"] = "Istanbul";
  ```
  - Associate arrays do not have the ```.length``` value unlike arrays.

  ```javascript
  regularArray.length; // result -> 3
  associativeArray.length // result -> 0;
  ```

  - Possible to get values using ```.property``` notation.

  ```javascript
  associativeArray.dreamCity; // result -> "Los Angeles"
  associativeArray[0]; // result -> undefined
  ```

  ####Associate Arrays vs Objects:
  - Associate arrays are treated as objects in JS.





  
