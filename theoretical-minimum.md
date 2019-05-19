- CS 4470: Introduction to User Interface Software & CS 6456 Principles of User Interface Software
    - http://www.kedwards.com/classes/AY2017/cs4470_fall/
    
Since the 1990s, 2-dimensional graphical user interface (GUI) has become an extension of our physical environment
# Chapter 0: Preliminaries
## What Is a Computer
The world of transistors and circuitry beneath the casing of a computer is distinct in nature from the external world: The physical reality that constitutes our sense-experience is usually modeled mathematically as a *continuous* system, whereas computers are designed to be *discrete*, both in space (information is stored in discrete units) and time (computation is by definition a stepwise process). Fortunately, the discontinuities elude our perception when the spatial and temporal resolutions are high enough. Modern computers typically have high DPI (Dots per inch) displays with 60 Hz refresh rate, which almost perfectly disguises the discrete nature of a computer - but there is a potential problem.
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

## UI Software Organization
Modern (“direct manipulation”) interfaces tend to be collections of quasi-independent agents,or interactors (“object of interest” on the screen),which leads to object-based architectures.
- Each on-screen interactor corresponds to an object instance
- Classes are organized into a subclassing hierarchy
    - Typically a top-level “Component” or “Widget” class that describes basic interactor capabilities
    - Leaf-node classes for the things you actually see on the screen (buttons, scrollbars, etc.)
    - Intermediate classes for common behaviors (text or mouse processing)
- Objects are organized hierarchically at runtime (Interactor trees)
     - Normally reflecting spatial containment relationships
    - NOTE: different than class hierarchy created at development time
    
UI Toolkits (Browser)
- System to provide development-time and runtime support for UIs
    - Core functionality
    - Input & output handling
    - Connecting to the application
- Also: specific interaction techniques
    - Library of interactors
    - Look and feel (sometimes pluggable)

## UI Toolkit
### Core functions
- Hierarchy management: Create, maintain, tear down tree of interactor objects
- Geometry management: Dealing with coordinate systems and on-screen bounds of interactors
- Interactor status/information management: Is this interactor visible? Is it active?
### Output
- Layout: Establishing the size and position of each object, both initially, and after a resize
- (Re)drawing
- Damage management: Knowing what needs to be redrawn
### Input
- Picking: Figuring out what interactors are “under” a given screen point
- Event dispatch, translation, handling: This is where a lot of the work goes
###  Application interface
- How the UI system connects with application code: Callbacks
    

Example: Java Swing
l All functions of interactors encapsulated in base class
l javax.swing.JComponent
l All objects on-screen inherit from this class
l Terminology:
l interactor, widget, component, control, ...

Standard object-oriented
approach
l Base class (or interface) defines the set of things that every
interactor must do
l e.g., public void paintComponent(Graphics g);
l Subclasses provide specific specialized implementations
l Do the right drawing, input, etc., to be a button vs. a slider vs. ...

JComponent API defines methods
for
l Hierarchy management
l Geometry management
l Object status management
l Layout
l (Re)drawing
l Damage management
l Picking

In subclasses and other parts of
the toolkit:
l Input dispatch and handling
l Application interface
l Pluggable looks and feels
l Undo support
l Accessibility

Hierarchy Management
l Swing interfaces are trees of components
l To make something appear, you must add
it to the tree
l Swing takes care of many of the details
from there
l Screen redraw
l Input dispatch

Hierarchy Management
l Lots of methods for manipulating the tree
l add(), remove(), removeAll(), getComponents(), getComponentCount(),
isAncestorOf(), ...
l Common mistake
l If nothing shows up on the screen, make sure you’ve added it!

Geometry Management
l Every component maintains its own geometry:
l Bounding box: getX(), getY(), getWidth(), getHeight()
l X,Y are relative to parent
l i.e., 0,0 is at parent’s top left corner
l Other operations: setSize(), setLocation(), setBounds(), getSize(),
getLocation(), getBounds()
l All drawing happens within that box
l System clips to bounding box
l Including output of children!
l Drawing is relative to top-left corner
l Each component has its own coordinate system

Object Status
l Each component maintains information about its “state”
l isEnabled(), setEnabled()
l isVisible(), setVisible()
l Lots of other methods of lesser importance

Each component handles:
l Layout (we’ll talk about this later...)
l Drawing
l Each component knows how to (re)create its appearance based on its
current state
l Responsible for painting three items, in order:
1. Component
2. Borders
3. Children
l paintComponent(), paintBorder(), paintChildren()
l These are the only places to draw on the screen!!!
l Automatically called by JComponent’s paint() method, which is itself
called by the Swing RepaintManager (figures out “damaged” regions)

Damage Management
l Damage: areas of a component that need to be redrawn
l Sometimes: computed automatically by Swing RepaintManager
l e.g., if another window is dragged over your component, or your
component is resized
l Other times: you need to flag damage yourself to tell the system that
something in your internal state has changes and your on-screen image
may not be correct
l e.g., your component needs to change the color of a displayed label
l Managing damage yourself:
l repaint(Rectangle r)
l Puts the indicated rectangle on the RepaintManager’s queue of regions
to be redrawn
l Terminology: damage is not a Swing term; generic

Picking
l Determine if a point is “inside” a component
l contains(int x, int y)
l Is the point inside the bounding box of this component (uses local
coordinate system of component)
l Terminology: likewise, picking is not a Swing term

Other stuff
l Input (we’ll talk about this later...)
l Application interface
l Glue between component and application functionality
l Not directly in component, but there is a convention for how to
associate your functionality with a component
l Callbacks: you register code with a component to say “call this code
when something happens”
l Terminology: Swing uses the term listener for a piece of application
code that will be called back in response to something happening
l The code “listens for” something happening


Listeners
l Any given component may have multiple situations in which it invokes
a listener
l Button pressed, list scrolled, list item selected
l Different types of listeners representing different types of things happening
l Therefore, each component has a list of listeners for each situation
l Standardized names for accessing these lists
l addPropertyChangeListener(), getPropertyChangeListeners(),
removePropertyChangeListener()
l addActionListener(), getActionListeners(), removeActionListener()

More on listeners
l There is generally a separate interface for each type of listener
l PropertyChangeListener
l ActionListener
l Your code must implement the appropriate listener interface and be
registered with the list of appropriate list of listeners on the
appropriate component
l Example: button press causes listeners on the button’s ActionListener
list to be called
l Define your code so that it implements ActionListener
l Register it with the button using addActionListener()

Events
l Most listener interfaces define methods that take an event object that
describes what just happened
l Separate classes of events for each listener interface
l ActionListener: ActionEvent
l MouseListener: MouseEvent
l Passed as a parameter containing details of what happened
l e.g., MouseListener: mouse coordinates, whether it was pressed,
released, etc


