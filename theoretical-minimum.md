- CS 4470: Introduction to User Interface Software & CS 6456 Principles of User Interface Software
    - http://www.kedwards.com/classes/AY2017/cs4470_fall/
    
# 0. Preliminaries
Since the 1990s, computers wtih 2D graphical user interface (GUI) has become an extension of our physical environment, but hidden from sight, the world of electronic circuitry beneath the shell of a computer behave in a fundamentally different way than the external world that we experience: We perceive reality as continuous, but computers are designed to be a system with discrete space (information is stored in discrete units) and discrete time (computation is a stepwise process). So how is it possible for computers to produce the kind of interaction that is now integrated into our daily sense-experience?
## What Is a Computer

## Computer Programming (Imperative)
Regardless of language, under the imperative paradigm you use branching (`if-elseif-else`, `switch-case`) and looping (`for`, `while`,`do-while`) control sturctures to direct execution flow - essentially giving a textual description of a 'flowchart' for your program, the rest are simply language-specific conventions. We will introduce the most popular programming languages, as indicated by the TIOBE index, using their respective implementations of a binary search algorithm. As you will see, their syntax are very similar and even identical in some cases.
### Statically-typed Compiled Languages
#### C (C++/Objective-C)
C is a structured programming language. A C program is made up of stand-alone functions. C++/Obj-C are supersets of C with additional OOP (object-oriented programming) features, therefore the following is also a valid C++/Obj-C program. 
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
C++, C# and Java are **OOP languages** where functions are bundled with the data they modify into individual objects, which are constructed from templates called classes. Classes are optional in C++ but mandatory in C# and Java.
```c++
class SomeWrapperClass {
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
} (C++ requires a semicolon here)
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
## User Interface
End users interact with computers through the operating system shell. For someone familiar with the workings of computers, it is fairly natural to use command-line interface (CLI, such as Bash on Unix/Linux operating systems), where you issue commands to perform tasks and use the shell-specific scripting languages (such as Bash script) for automation. However, for the unitiated, this way of interaction is very unituitive compared to graphical user interface (GUI), which is a major type of direct manipulation interface.

From the Wikipedia article:
> Direct manipulation is a human–computer interaction style which involves **continuous representation of objects of interest** and **rapid, reversible, and incremental actions and feedback**. ...the intention of direct manipulation is to allow a user to manipulate objects presented to them, **using actions that correspond at least loosely to manipulation of physical objects**. ... Having **real-world metaphors for objects and actions** can make it easier for a user to learn and use an interface, and rapid, incremental feedback allows a user to make fewer errors and complete tasks in less time, because they can **see the results of an action before completing the action, thus evaluating the output and compensating for mistakes.**

# 2. Graphical User Interface
Digital displays create the illusion of continuity through high spatial and temporal resolutions. Modern computers typically have high DPI (dots per inch) displays with 60 Hz refresh rate. The goal for a GUI program then is to generate frames at the rate of 60 FPS (frame per second). Using the expressive tools we learned in last chapter, we can write the skeleton of a GUI program in JavaScript-like pseudocode as
```javascript
while (true) {
  updateFrame();
  if (shouldDrawFrame()) {
    drawFrame()
  }
}
```
Now we can delve into the archetectural and algorithmic details of GUI systems, then we will be able to explain what goes into that `updateFrame()`;
## UI Software Organization
Direct manipulation interfaces tend to be collections of quasi-independent interactors ("objects of interest"), which naturally leads to object-based architectures where each interactor corresponds to an object instance. At runtime,interactor objects are organized hierarchically into a **interactor tree**, which normally reflect spatial containment relationships.

Classes are organized into a **subclassing hierarchy**. The top-level class describes basic interactor capabilities, leaf-node classes are for the things you actually see on the screen, and intermediate classes are for common behaviors.
In the case of Web pages, `Element` is the the root class, which is inherited by `HTMLElement` and `SVGElement`; the leaf-node classes include `HTMLButtonElement`, `HTMLInputElement`, `HTMLTable​Element`, etc.
    
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


