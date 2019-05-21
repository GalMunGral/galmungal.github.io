# Prelude: Turing & von Neumann
Since the 1990s, computers wtih 2D graphical user interface (GUI) has become an extension of our physical environment, but hidden from sight, the world of electronic circuitry beneath the shell of a computer behave in a fundamentally different way than the external world that we experience: We perceive reality as continuous, but computers are designed to be a system with discrete space (information is stored in discrete units) and discrete time (computation is a stepwise process). So how is it possible for computers to produce the kind of interaction that is now integrated into our daily sense-experience?

CPU
Instruction Sets

# Part I: Abstraction, Abstraction, Abstraction
Turing machine (or any model of computation for that matter) abstracts away the physical implementations: the view of space as discrete cells and time as sequence of steps is a logical rather than physical one. This is what lies the heart of mathematical modeling:  **Abstration**, the art of disregarding nonessential details thereby hiding underlying complexity and extracting a simplified, logical view. It turns out abstration plays an essential role in software engineering as well. 

## High-level Languages

At the machine/assembly language level, a program must be written in a specific instruction set and therefore will not run on others CPU architectures. To write portable code, computer scientists came up with the concept of high-level languages, using which programmer only need to write out the high-level algorithms in human-readable text, and a program called **compiler** (one for each CPU architecture) will take care of translating that to hardware-specific machine code. In other words, the complexity of CPU archtectures, which is nonessential algorithmically, is abstracted away from the programmer, who can now simply focus on the program logic. 

Regardless of language, under the imperative paradigm you use branching (`if-elseif-else`, `switch-case`) and looping (`for`, `while`,`do-while`) control sturctures to direct execution flow - essentially giving a textual description of a 'flowchart' for your program, the rest are simply language-specific conventions. We will introduce the most popular programming languages, as indicated by the TIOBE index, using their respective implementations of a binary search algorithm. As you will see, their syntax are very similar and even identical in some cases.

### Statically-typed Compiled Languages
#### C [C++/Objective-C]
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
An alternative to compilation is **interpretation**, where a program (**interpreter**) reads in program text written in a (usually) high-level language and executes it line by line. Interpreted languages can be though of as *software-processed* languages just like machine languages are *hardware-processed* languages &mdash; In a sense processors are really interpreters for their respective machine languages.

Scripting languages ubiquitous on the Web are all interpreted, and like most interpreted languages, **dynamically typed**, meaning that types are determined at run-time, and not declared in programs. Interpreted languages are usually more flexible and productive but much slower than compiled languages like C/C++, but the performance can be improved by using a JIT (just-in-time) compiler.

**JavaScript**  
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

## Operating Systems [(source)](https://learning.oreilly.com/library/view/linux-device-drivers/0596005903/ch01.html)
A running program consumes *memory space*, *CPU time* and other hardware resources. If you remember the **basic economic problem** from economics classes, all kinds of resources are scarce &mdash; that is, they are always insufficient to satisfy all human wants and needs. Computer hardware resources are no exception: People eventually started to want to execute multiple programs concurrently on a single machine because machines were expensive to build. This is where **operating systems** come into play. An operating system (OS) is the big chunk of executable code loaded into memory by the bootloader at start-up, and the **kernel** of an operating system is the program that is the core of a an operating system, responsible for providing access to and allocating the limited hardware resources. the kernel's role can be split into the following parts:

### Process management
The kernel is in charge of creating and destroying processes and handling their connection to the outside world (input and output). Communication among different processes (through signals, pipes, or interprocess communication primitives) is basic to the overall system functionality and is also handled by the kernel. In addition, the scheduler, which controls how processes share the CPU, is part of process management. More generally, the kernel's process management activity implements the abstraction of several processes on top of a single CPU or a few of them.
### Memory management
The computer's memory is a major resource, and the policy used to deal with it is a critical one for system performance. The kernel builds up a virtual addressing space for any and all processes on top of the limited available resources. The different parts of the kernel interact with the memory-management subsystem through a set of function calls, ranging from the simple malloc/free pair to much more complex functionalities.
### Filesystems
Unix is heavily based on the filesystem concept; almost everything in Unix can be treated as a file. The kernel builds a structured filesystem on top of unstructured hardware, and the resulting file abstraction is heavily used throughout the whole system. In addition, Linux supports multiple filesystem types, that is, different ways of organizing data on the physical medium. For example, disks may be formatted with the Linux-standard ext3 filesystem, the commonly used FAT filesystem or several others.
### Device control
Almost every system operation eventually maps to a physical device. With the exception of the processor, memory, and a very few other entities, any and all device control operations are performed by code that is specific to the device being addressed. That code is called a device driver. The kernel must have embedded in it a device driver for every peripheral present on a system, from the hard drive to the keyboard and the tape drive. This aspect of the kernel's functions is our primary interest in this book.
### Networking
Networking must be managed by the operating system, because most network operations are not specific to a process: incoming packets are asynchronous events. The packets must be collected, identified, and dispatched before a process takes care of them. The system is in charge of delivering data packets across program and network interfaces, and it must control the execution of programs according to their network activity. Additionally, all the routing and address resolution issues are implemented within the kernel.

## Windowing System
End users interact with computers at the top abstraction layer, through the operating system **shell**. For someone familiar with the workings of computers, it is fairly natural to use command-line interface (CLI, such as Bash on Unix/Linux), where you issue commands to perform tasks and use the shell-specific scripting languages (such as Bash script) for automation. However, for the unitiated, this way of interaction is very unituitive compared to graphical user interface (GUI), which is a major type of direct manipulation interface.

From the Wikipedia article:
> Direct manipulation is a human–computer interaction style which involves **continuous representation of objects of interest** and **rapid, reversible, and incremental actions and feedback**. ...the intention of direct manipulation is to allow a user to manipulate objects presented to them, **using actions that correspond at least loosely to manipulation of physical objects**. ... Having **real-world metaphors for objects and actions** can make it easier for a user to learn and use an interface, and rapid, incremental feedback allows a user to make fewer errors and complete tasks in less time, because they can **see the results of an action before completing the action, thus evaluating the output and compensating for mistakes.**

In addition to CPU and memory, all GUI programs running concurrently requires access to a single computer screen, which again requires management from the underlying system. This is handled by a window system (NOT Microsoft Windows!)

# Interlude: TCP/IP Model


# Chapter II: GUI Architecture [(source)](http://www.kedwards.com/classes/AY2017/cs4470_fall/)
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



- CS 4470: Introduction to User Interface Software & CS 6456 Principles of User Interface Software
    
