## Programming Languages
The most popular of programming languages indicated by ihe TIOBE index are all . 
The index can be used to check whether your programming skills are still up to date or to make a strategic decision about what programming language should be adopted when starting to build a new software system. The definition of the TIOBE index can be found here.
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
