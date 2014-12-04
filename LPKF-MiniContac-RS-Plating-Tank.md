# About the Plating Tank

The plating tank allows you to plate copper onto the component holes and vias of your PCB.

## Advantages

* it works, and is semi-automatic
* If a PCB is double-sided, through-plating makes it MUCH easier to work with - no more putting via wires in, and you can route to both sides of through-hole component pads without worrying about getting to the pad under the component to solder it

## Disadvantages

* it uses caustic chemicals, which means you'll be using lots of waterproof gloves
* it's a wet process which can be messy
* it requires a lot of care to keep the tanks from getting contaminated
* it takes about 3 hours to complete, and some user intervention is required during the process

All of this means that there might be cases where plating a board is too much trouble, for example if you have fewer than 20 vias and mostly surface-mount components, it's probably faster to put in Nystrom vias.

# Using the plating tank

## Overview

The plated PCB process consists of these steps:

* cutting the blank to the minimum size required
Copper is going to be plated onto all of the copper, not just the holes. Plating current is proportional to the area of copper being plated, and you wouldn't want to plate a blank more than once (because the copper quickly becomes too thick to route isolation channels into), so you want to start with a blank which is only as large as necessary.

Use these guidelines to size your blank:

1. The blank's x dimension must be at least 6.5". This is because the clamp screws on the board holder can't hold a narrower board.
2. The y dimension must hold the PCB, plus a border of about 0.7", plus another .2" on the top. The board clamps from the top and there's .5" of airspace above the liquid, and the board must be taped down on the routing machine and the head can't hit the tape.



