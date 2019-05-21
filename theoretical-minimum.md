- CS 4470: Introduction to User Interface Software & CS 6456 Principles of User Interface Software
    - http://www.kedwards.com/classes/AY2017/cs4470_fall/
    
# 0. Preliminaries
Since the 1990s, computers wtih 2D graphical user interface (GUI) has become an extension of our physical environment, but hidden from sight, the world of electronic circuitry beneath the shell of a computer behave in a fundamentally different way than the external world that we experience: We perceive reality as continuous, but computers are designed to be a system with discrete space (information is stored in discrete units) and discrete time (computation is a stepwise process). So how is it possible for computers to produce the kind of interaction that is now integrated into our daily sense-experience?
## What Is a Computer
CPU
Instruction Sets
High-levle Languages and Compilers
## Computer Programming (Imperative)
Regardless of language, under the imperative paradigm you use branching (`if-elseif-else`, `switch-case`) and looping (`for`, `while`,`do-while`) control sturctures to direct execution flow - essentially giving a textual description of a 'flowchart' for your program, the rest are simply language-specific conventions. We will introduce the most popular programming languages, as indicated by the TIOBE index, using their respective implementations of a binary search algorithm. As you will see, their syntax are very similar and even identical in some cases.
### Statically-typed Compiled Languages
#### C (C++/Objective-C)
```c
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
<details>
<summary><b>C++/C#/Java</b></summary>

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
</details>

### Dynamically-typed Scripting Languages
Types are determined at run-time, so there is no type declaration in source code.
<details>
<summary><b>JavaScript</b></summary>

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
</details>
<details>
<summary><b>PHP</b></summary>

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
</details>

<details>
<summary><b>Python</b></summary>

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
</details>

# 1. Abstraction, Abstraction, Abstraction

These languages

## Operating Systems
A program consumes memory space and CPU time, A GUI program, in addition occupies screen space. However they all share the same hardware resources, so how does

## Fundamental Theorem of Software Engineering (FTSE)
> We can solve any problem by introducing an extra level of indirection. &mdash; David Wheeler


## User Interface
End users interact with computers through the **operating system shell**, which is named in contrast to "kernel". For someone familiar with the workings of computers, it is fairly natural to use command-line interface (CLI, such as Bash on Unix/Linux), where you issue commands to perform tasks and use the shell-specific scripting languages (such as Bash script) for automation. However, for the unitiated, this way of interaction is very unituitive compared to graphical user interface (GUI), which is a major type of direct manipulation interface.

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
## UI Software Organization and Toolkit
Mordern UI (direct manipulation) interfaces tend to be collections of quasi-independent interactors ("objects of interest"), which naturally leads to object-based architectures where each interactor corresponds to an object instance. At runtime, interactor objects are organized hierarchically into a **interactor tree** (e.g. a DOM tree), which normally reflect spatial containment relationships. 

As a standard OO approach, classes are organized into a **subclassing hierarchy**, in which the top-level class describes basic interactor capabilities, the leaf-node classes describe what you actually see on the screen, and intermediate classes describe common behaviors. In case of DOM/Web API, `Element` is the the base class, and the leaf-node classes include `HTMLButtonElement`, `HTMLInputElement`, `HTMLTable​Element`, etc.

To create UI software, we need a system, commonly referred to as a UI toolkit, to provide development-time and runtime support. In Web developmemnt, the browser itself is the toolkit, which provides the underlying mechanism for creating interactors (DOM elements), managing interactor states and handling I/O (*event dispatching, layout and drawing*) behind the scenes.
  
### Core functions
- **Hierarchy management**:
Create, maintain, tear down tree of interactor objects
Hierarchy Management
The DOM specification
l Swing interfaces are trees of components
l To make something appear, you must add
it to the tree
l Swing takes care of many of the details
from there
l Screen redraw
l Input dispatch
l Lots of methods for manipulating the tree
l add(), remove(), removeAll(), getComponents(), getComponentCount(),
isAncestorOf(), ...
l Common mistake
l If nothing shows up on the screen, make sure you’ve added it!
- **Geometry management**:
Dealing with coordinate systems and on-screen bounds of interactors. 
Every component maintains its own geometry. In **CSS Box Model**, every DOM element is considered as rectangular box, whose position and size are determined by the browsers rendering engine.
  As with most computer graphic systems, (0,0) is at parent’s top left corner
- **Interactor status/information management**:
Each component (DOM elements) maintains information about its state, such as its attributes and CSS style properties. Each individual attribute can be accessed through `Element​.get​Attribute()` and modified through `Element.setAttribute()`. The final computed CSS styles can be accessed through `Window.getComputedStyle()` and the inline style attribute of an element through `HTMLElement​.style`.


### Input
- **Picking**: figuring out what interactors are under a given screen point. In the case of DOM / Web API:
```js
var element = document.elementFromPoint(x, y);
```
- **Event dispatch, translation, handling**: This is where a lot of the work goes
bubbling

##  Application interface - Event-Driven Architecture
How the UI system connects with application code: Callbacks
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


### Output
- **Layout**: Establishing the size and position of each object, both initially, and after a resize.  
- **(Re)drawing**  
- **Damage management**: Knowing what needs to be redrawn

**Damage Management & Layout**

Need to keep track of parts of the screen that need update
interactor has changed appearance, moved, appeared, disappeared, etc.
done by “declaring damage”


dirty list: list of regions that need to be redrawn
... can collapse multiple dirty regions into a few larger ones to optimize  

Typical overall “processing cycle”
```
loop forever
  wait for event then dispatch it
  (causes actions to be invoked and/or update interactor state)
  (typically causes damage)
  if (damaged_somewhere)
    layout
```
Layout
Deciding size and placement of every object
Dynamic layout: Change layout on the fly to reflect the current situation
Need to do layout before redraw, Because you have to draw in strict order, but layout (esp. position) may depend on size/position of things not in order (drawn after you!)

invalidate() method
invalidate() is often called automatically
e.g., in response to changes to components’ state
validate() method
Starts the process that makes an invalid layout valid--recomputes sizes and positions to get correct layout

Layout with containers
Containers (parent components) can control size/position of children
Two basic strategies  
Bottom-up (AKA inside-out)  
Top-down or outside-in layout: Parent determines layout of children, Typically used for position, but sometimes size  
Bottom-up or inside-out layout:Children determine layout of parent, Typically just size  
Neither one is sufficient  Need both May even need both in same object



