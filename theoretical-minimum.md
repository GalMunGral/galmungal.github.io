### Programming Languages
The most commonly used ones are C-family languages
#### C/C++
C is only structured, where as C++ can also be used for object-oriented programming.

```c++
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
```
#### C++/C#/Java
Classes are optional in C++ but mandatory in C# and Java.
```java
class SomeWrapperClass {
  static int binarySearch(int arr[], int l, int r, int x) { 
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
} // ; for C++
```
#### JavaScript (Scripting)
JavaScript is dynamically typed, meaning that types are not declared in source code.
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
#### PHP (Scripting)
PHP is also dynamically typed. Variables names are prefixed by `$`.
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
In Python, blocks are indicated by indentations. Semicolons are usually not used at the end of statements.
```python
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
