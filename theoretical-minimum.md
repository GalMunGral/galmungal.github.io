## What Is a Computer
The characteristic of the world beneath the casing of a computer is, at least mathematically, distinct from its surroundings: The physical world that constitutes our sense-experience is usually modeled as a *continuous* system, whereas computers are conceived and engineered to be *discrete*, both in space (information is stored in discrete units) and time (computation is a by definition stepwise process).
## What Is Programming
A 
## (Imperative) Programming Languages
Regardless of language, under the imperative paradigm you use branching (`if-elseif-else`, `switch-case`) and looping (`for`, `while`,`do-while`) control sturctures to direct execution flow - essentially giving a textual description of a 'flowchart' for your program, the rest are simply language-specific conventions. We will introduce the most popular programming languages, as indicated by the TIOBE index, using their respective implementations of a binary search algorithm. As you will see, their syntax are very similar and even identical in some cases.
### Statically-typed Compiled Languages (C-family) 
#### C and C++/C#/Java
C is a structured programming language where a program comprises standalone functions, whereas C++, C# and Java are object-oriented (OO) languages where functions are bundled with the data they modify into objects, which are constructed from templates called classes. Classes are optional in C++ but mandatory in C# and Java.
```c++
//class SomeWrapperClass {
    int binarySearch(int arr[], int l, int r, int x) { 
      while (l <= r) { 
        int m = l + (r - l) / 2; 
        if (arr[m] == x)
          return m;
        if (arr[m] < x)
          l = m + 1;
        else
          r = m - 1;
      } 
      return -1; 
    }
//} (C++ requires a semicolon here)
```
### Dynamically-typed Scripting Languages
Types are determined at run-time, so there is no type declaration in source code.
#### JavaScript
```javascript
function binarySearch(arr, l, r, x) { 
  while (l <= r) { 
    m = l + (r - l) / 2;
    if (arr[m] == x)
      return m;
    if (arr[m] < x)
      l = m + 1;
    else
      r = m - 1;
  } 
  return -1; 
}
```
#### PHP
```php
<?php
function binarySearch($arr, $l, $r, $x) { 
  while ($l <= $r) { 
    $m = $l + ($r - $l) / 2; 
    if ($arr[$m] == $x) 
      return $m;
    if ($arr[$m] < $x)
      $l = $m + 1;
    else
      $r = $m - 1;
  }
  return -1;
}
?> 
```
#### Python
```python
# In Python, blocks are indicated by indentations instead of curly braces.
def binarySearch(arr, l, r, x): 
  while l <= r: 
    m = l + (r - l) / 2
    if arr[m] == x: 
      return m 
    if arr[m] < x: 
      l = m + 1
    else: 
      r = m - 1
  return -1
```
## Graphical User Interface (GUI)
