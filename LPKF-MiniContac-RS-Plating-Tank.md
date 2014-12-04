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


***
# Using the plating tank

## Overview

The plated PCB process consists of these steps:

* cutting the blank to the minimum size required
    Copper is going to be plated onto all of the copper, not just the holes. Plating current is proportional to the area of copper being plated, and you wouldn't want to plate a blank more than once (because the copper quickly becomes too thick to route isolation channels into), so you want to start with a blank which is only as large as necessary.

    Use these guidelines to size your blank:

    1. The blank's x dimension must be at least 6.5". This is because the clamp screws on the board holder can't hold a narrower board.
    2. The y dimension must hold the PCB, plus a border of about 0.7", plus another .2" on the top. The board clamps from the top and there's .5" of airspace above the liquid, and the board must be taped down on the routing machine and the head can't hit the tape.

* drilling the board
    use any PCB milling machine to drill all of the component holes and vias. Make sure you have at least two good fiducial holes for alignment (on the LPKF you should specifically place fiducials; on the A406, you can use any two well-separated holes, including vias)

* check tank levels
    1. The left-most two tanks are for cleaning and degreasing the board. Each tank has a fill indicator on its left wall. These two tanks share a cover plate. Make sure the other two tanks are covered and remove the left-most cover plate. If the fluid levels are below the fill indicator, add distilled water to top them off, then replace the cover over both tanks. Never, ever use tap water in any of the tanks - it will wreck them instantly. 
    2. The third tank is the activator and is the most sensitive to contamination. Only ever take the cover off this tank when the other tanks are covered. If the activator level is low, add more from the extra bottles of Aktivator 310. Use the funnel to help not spill this expensive stuff anywhere. Rinse the funnel with distilled water and make sure it's absolutely dry (use compressed air) before pouring the Aktivator 310 through it.
    4. The fourth tank must be checked for CuSO4 crystals on the walls and corners. The procedure for removing these and putting them back into the bath is not yet known and will be detailed here later.
    

