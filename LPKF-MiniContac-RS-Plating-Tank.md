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

## Overview and Prep Work

The plated PCB process consists of these steps:

* Check tank levels
    1. The left-most two tanks are for cleaning and degreasing the board. Each tank has a fill indicator on its left wall. These two tanks share a cover plate. Make sure the other two tanks are covered and remove the left-most cover plate. If the fluid levels are below the fill indicator, add distilled water to top them off, then replace the cover over both tanks. Never, ever use tap water in any of the tanks - it will wreck them instantly. 
    2. The third tank is the activator and is the most sensitive to contamination. Only ever take the cover off this tank when the other tanks are covered. If the activator level is low, add more from the extra bottles of Aktivator 310. Use the funnel to help not spill this expensive stuff anywhere. Rinse the funnel with distilled water and make sure it's absolutely dry (use compressed air) before pouring the Aktivator 310 through it.
    3. The fourth tank must be checked for CuSO4 crystals on the walls and corners. The procedure for removing these and putting them back into the bath is not yet known and will be detailed here later.
    
* Turn on the plating tank. The switch is on the back right side near the bottom. This will pre-heat the first cleaning tank. It should be at least 50C before cleaning your board.

* cutting the blank to the minimum size required
    Copper is going to be plated onto all of the copper, not just the holes. Plating current is proportional to the area of copper being plated, and you wouldn't want to plate a blank more than once (because the copper quickly becomes too thick to route isolation channels into), so you want to start with a blank which is only as large as necessary.

### Board Sizing

Use these guidelines to size your blank:

 1. The blank's x dimension must be at least 6.5". This is because the clamp screws on the board holder can't hold a narrower board. Maximum: 9"
 1. The y dimension must hold the PCB, with about 1 inch on top to make room for the holder and the airspace above the liquid.

* Calculating the plating current

   1. Take the dimensions of your blank, in mm.
   1. Go to page 41 of the plating tank manual and calculate the plating tank current for your sized blank. Write this down.

* drilling the board
    use any PCB milling machine to drill all of the component holes and vias. Make sure you have at least two good fiducial holes for alignment (on the LPKF you should specifically place fiducials; on the A406, you can use any two well-separated holes, including vias)


## STEP 1: Clean board in Solution #1 

* pre-clean the blank
    Shine up the board on both sides using Scotch-Bright pad or fine sandpaper. Scotch-Bright will remove less copper and leave a better finish. Rinse under tap water in the sink and blow dry with compressed air.

* Mount the board in the non-metallic board holder (it's pretty obvious - loosen the screws, put the board all the way into the slots in the posts, and tighten the screws.)

* Remove the left-most tank cover and put the board into the first tank. When placing the board into any of the tanks, you want to dislodge any air bubbles from the surface and especially from the holes. The procedure is to secure the far end of the holder and tap the near end several times on the frame beside the pin, then finally secure the holder over the pin.

* Check that the thermometer says >= 50C; if not, wait for it to reach working temperature.

* The machine should boot with Profile 1 set as default. Check that this is true by looking at the LCD upper right corner. It should say 'Prof. 1'. If it doesn't, use the 4 arrow keys to select it. The interface is pretty clunky, but basically the right arrow is 'enter' and the left is 'escape'. 

* Select 'Phases', 'Phase 1', and 'Start'. The agitator should begin oscillating, moving the board back and forth in the cleaner. This step takes about 65 minutes and does not need to be attended. This might be a good time to laser-cut your stencil, organize the parts kit, write some code, or have a coffee.

## STEP 2: Clean board in Solution #2

* Carefully take the board out of Solution #1 and let it drip into Solution #1 by holding it up at a 45 degree angle so a corner of the board faces the tank. DO NOT LET IT DRIP INTO Solution #2!!

* When it's done dripping, immediately. rinse the PCB in hot water in the sink for at least 30 seconds, on both sides of the board. Make sure you rinse the plastic holder, too.

* CHECK: if you're board is truly clean, the tap water should form a nice clean "film" on the copper. If it beads up at all near the area you want to plate, you have a problem, and you'll have to re-clean your board.

* Blow off the board with the air supply until it's dry.

* Put the now dry board carefully into Solution #2. Again, tap out the air bubbles.

* Select "Phase 2" and "Start". Phase 2 takes 5 minutes.


### STEP 3: Prep the board for Solution #3 ("Aktivator 310")

* Like previously, rinse off the board with hot tap water for 30 seconds. Shake off the excess water.

* Take the spray bottle of distilled water, and thoroughly spray your board and the plastic holder with the distilled water. You want to rinse off all of the tap water with the distilled water.

* Carefully and thoroughly use the air gun to dry off the board. Make sure you dry out the holes, the plastic holder, everything.


### Step 4. Solution #3

* Put cover over Solutions #1 and #2.

* Remove the cover from Solution #3.

* Place your now perfectly clean and dry board into solution #3. Tap it against the rail to get our air bubbles, just like in previous steps.

* Choose "Phase 3" and "Start". This will take 15 minutes, but see the next step before you wander off.

* Go to the reflow oven and choose the "plated_PCB Plate Dry" profile. This will pre-heat the oven.

* NOW wait 15 minutes until it's done.


### Step 5: Pre PCB for drying and bake dry

* Clean off the blue squeegee using the distilled water and air gun to dry it. Also clean off 3 or 4 aluminum shims.

* Lift up the circuit board 45 degrees, and gently squeegee the excess Aktivator 310 back into the bath. Doesn't have to be perfect.

* Put a paper towel on the ground, and GENTLY blow off the excess Activator onto a paper towel. DON'T TOUCH IT, no one knows what's in it.

* The board will look like crap. That's fine, it doesn't have to look clean.

* REMEMBER: DO NOT EVER TOUCH THE BOARD IN ANY LOCATION WITH YOUR BARE HANDS. We don't want any junk eventually going into the plating tank.

* Put the aluminum shims in the oven.

* Put the board on the shims in the oven, and let bake for 5 minutes. 

* Take this time to put the cover onto Solution #3 tank.

### STEP 6: Calculate the plating current

Refer to page 

### Step 7. Solution #4 (Copper plating tank)

* Stop the oven, open the drawer, and let the board cool down until it's like 50 deg C.

* REMEMBER: DO NOT EVER TOUCH THE BOARD IN ANY LOCATION WITH YOUR BARE HANDS. We don't want any junk eventually going into the plating tank.

* Put the board in the plating tank copper electrode holder.

* Plug the electrode cable into the side of the plating tank.

* Take the plating tank cover off and put the board into the plating tank.

* Choose "Phase 4" and "Change" and set the "Current" to whatever you calculated in the prep phase above. Go back to the Phase 4 manu, and choose "Start".

* Double check in the lower right corner of the screen that the current is actually set to what you want.

* Wait for 15 minutes (there won't be an alarm). Choose "Pause". Carefully take the board out and make sure the sides and holes are being plated correctly. The PCB should look really pretty - kind of Salmon colored, and it should cover everything (edges of the board, holes, and even the flat board itself).

* Choose "Start" to resume the plating.

* At the 45 minute marker, the alarm will go off and prompt you to rotate the board. to do this carefully remove the PCB from the tank, flip the holder around and place it back onto the guide pins.

### Step 8. Finish up.

* Unplug the electrode cord from the tank.

* Remove the board, let it drip into the tank.

* Walk it over to the sink and rinse it off.

* Unscrew the board from the electrode.

* Don't forget to recover the plating tank.

* Turn off the tank.

* Finally, clean up and organize the mess you made on the counter with a damp cloth.

### Step 9. Continue routing your board.

* You're done! Go route that board.