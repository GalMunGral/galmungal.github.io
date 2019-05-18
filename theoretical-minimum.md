### Programming Languages
The most commonly used ones are C-family languages
### Statically-typed Compiled Languages
#### C/C++/C#/Java
C is a structured programming language, where as C++, C# and Java are object-oriented (OO) languages.
Classes are optional in C++ but mandatory in C# and Java.
```c++
/* class SomeWrapperClass { // C++/C#/Java */
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
/* }  // C#/Java */
/* }; // C++     */

```
### Dynamically Typed Scripting Languages
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
