- Software Engineering
  - CS 6300 Software Development Process
  - CS 6340 Software Analysis and Testing
- UI Software
  - CS 7450 Information Visualization
  - CS 7270 Networked Applications and Services (topic 1 - 3)
    - https://www.cc.gatech.edu/~dovrolis/Courses/cs7270-S15.html
```    
For each triangle
  transform into eye space (perform projection) setup 3 edge equations
  for each pixel x,y
    if passes all edge equations
      compute z
      if z<zbuffer[x,y]
        zbuffer[x,y]=z framebuffer[x,y]=shade()
```
