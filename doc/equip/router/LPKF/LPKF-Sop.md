---
title: LPKF SOP
layout: doc
author: 
date: 

---

# Using the LPKF S63 Circuit Board Plotter

## Before You Start

 1. Login to controller PC
 1. Turn on the S63 (Open the cover; The power switch is on the bottom right front corner.)
 1. Start the LPKF CircuitPro software
 1. Select the job type
    - Single Sided: `single_sided`
    - 2 layer (no plating): `double_sided_NoTHP`
    - 2 layer (platting machine): `double_sided_GalvonicTHP` (see plating SOP)


-----------------------------------------------------------------------------------------------


## Import Files

(Refer to https://github.com/psu-epl/psu-epl.github.com/wiki/Design-rules for generating Gerber files.)

 1. Select **File | Import ...**
    - Navigate to the folder containing your files. For a two-sided board, you need 4 files:
        * Top Gerber
        * Bottom Gerber
        * Board Outline Gerber
        * Excellon Drill Data
 1. **Assign layers**

    The import dialog will show a list of the four data files. There is a column labeled 'Layer/Template' which maps each data file to a processing layer. These fields should be set to:
    - TopLayer
    - BottomLayer
    - BoardOutline
    - DrillUnplated (or DrillPlated if plating)

If you run into trouble assigning layers in a file gen, try editing the gerber file. Look for a line like %LNdefault*%. I've seen this string in gerbers generated by ADS, and it seems to force the LPKF software into assigning it to that named layer.

--------------------------------------------------------------------------------------------------------

## Add **Fiducials**

Fiducials are holes used to align the blank during processing, typically when the board is flipped to do the second side. You should use three or more fiducials, usually located near the corners of the board.

1. **Insert > Fiducial > Fiducial...**
    - Click on the points where you would like the fiducial holes to be.
    - Choose **close**


---------------------------------------------------------------------------------------------------------


## Generate Toolpath

Most of the options controlling how the board will be milled are set here.

 1. Open **Toolpath > Technology Dialog.**

#### Edit **Material Settings**

 - Set material thickness. The settings for half-ounce copper are 18 um copper thickness and 0.061 inch material thickness. Click 'OK'.

#### Set **Isolation type**

controls how much copper will be removed around your features.

 - Select **Show Details**.
    - If your board does not have spacing closer than 8 mil (0.2mm), **un-check the Micro Cutter**

#### Routing Type

 - Select **Show Details**.
    - Use the **1mm contour router bit**

#### Extra

Uncheck steps you won't be using (Drills? Fiducials? Pockets?)


---------------------------------------------------------------------------------------------------------


## Setup Machine To Cut

 1. Check Tool Magazine

    Open Edit > Tool Magazine. Under the list of required tools, make sure there are no red X's. If there are, you need to physically add the tools (bits) to the tool magazine in the machine.

(Trouble shooting tip: If the router throws a connection error, be sure the lid to the LPKF is closed, then go to Machining > Connect... if errors come up, alert the manager on duty)

    Click 'OK'. You shouldn't need to recalculate the toolpaths. 

* Physically Mount Material
    * Select a PCB blank

   Choose some vaguely planar untwisted blank PCB that has enough room on it for your board. In particular, don't forget that you may have fiducial holes outside of your board, and you will want some PCB ribbing (blue tape) around your board to hold it in place during routing. So, don't get to close to holes or edges in the blank. A good idea is to draw on your board where you want it to be.

    * Prepare backing surface

    This is **really important**: the white backing material must be as smooth and flat as possible. This machine has no idea where the material surface is, beyond what the user tells it. That is, it thinks it knows the height of the top of your blank, but it assumes it is a perfect plane. If it deviates even by 2 mils (.05mm), isolation **will not work**. So, with the PCB blank not mounted, run your fingers over the surface of the white backing material and feel for any bumps or debris. If you feel any, blow off the debris or use the razor blade tool to remove the bumps. Bumps occur because drills and routing bits grind out and lift backing material. This is especially noticeable in the routed grooves where a PCB was separated from the blank. It's a good idea to run the razor blade over the surface even if you can't feel any bumps. Lift the white backing material out and check the backside too. 

    Next, attach the PCB blank to the vacuum table. The vacuum table will not sufficiently hold a board for routing, so you must put masking tape along at least two sides. Typically, a 6 inch strip along the left and right edges is sufficient. 

* Edit pattern placement on the PCB blank

    Place the head in the lower left hand corner of where you want the board to be routed on the PCB Blank. In the machining view, select the 'Mouse Cursor' mode in the left control panel. It's a bit awkward; if you have the 'Mouse Cursor' mode selected you can click anywhere to move the head to that location. The purpose of this exercise is to make sure the black collar around the bit will never go off the board or hit blue tape. De-select the 'Mouse Cursor' mode.

    In the machining view, right-click on the artwork and select 'Placement'. The design artwork should get a heavy line around it with a rotation handle on the top. Then click and drag the artwork's lower left-hand corner to the location of the head (which should be the appropriate place on the board). 

    Now reselect 'Mouse Cursor' and click on all four corners of the board artwork to verify that the black collar of the router stays on the board and away from tape or other obstacles. 


* Check cut width

This step may not be necessary. If neither the material thickness nor the bit has been changed since the last job, the milling width will probably be fine. If it appears wrong (either leaving rough cut edges, or wrong isolation width, or both), the first thing to check is the bit. To do this, remove the bit from the tool magazine using the bit removal tool (the blue cylindrical thing which is stuck magnetically to the shelf support.) Look at it under the microscope under maximum zoom. If the straight V cutting edges look at all dented, the bit is finished. After the bit is verified/changed, if the milling width is still wrong, then do the following:
   * Edit > Tool Magazine
   * Check the blue check box next to 0.2 mm Universal Cutter
   * Click on the "Check Milling Width..." button below.
   * Click on the screen behind the dialog to move the yellow box to a place where the milling can be done on your PCB. MAKE SURE THERE ARE NO OTHER MILLING WIDTH CHECK LINES AROUND - if it chooses the wrong one, you're hosed.
   * Click OK. It'll mill the line and check it.
   * Accept the correction if it looks sane. 

* Run Process

    Select Machining > Process All. It will warn you to tape the PCB blank down but you should have already done it because you're following this awesome guide. Hit 'OK'.
    The Material Settings dialog will come up but you've already done that too. Hit 'Continue'.
    The Placement dialog will come up but you've already done that too. Hit 'Continue'. 
    You'll be prompted to save. Go ahead, why not. 
    The machine should happily do its thing. 

* If you are plating through holes, the LPKF will drill holes first. Once all holes are drilled the material will be removed and run through the plating tank using [The Plating Tank SOP](https://github.com/psu-epl/psu-epl.github.com/wiki/LPKF-MiniContac-RS-Plating-Tank). When the plating process is finished re-mount the material with the bottom up and as close to the same position and orientation as when it was removed.

* Check Isolation

     Before going on, check that the traces are actually isolated by the router bit. Check all four corners of the board. Use the loop and a lamp. Use razor blade and/or sandpaper to make it smooth to the touch.

* Flip Material

    Remove the tape and flip the material. Make sure the white backing material is smooth before you lay down the PCB material. The back edge of the PCB should end up at the front of the table. Tape the left and right sides again, use the razor blade and/or sandpaper to make the top of the material smooth, and wipe away any debris. Close the lid and click 'OK' on the FlipMaterial dialog. 

    There will be one more dialog to 'Confirm the Focus Height'. Follow the instructions and make your selection.  

* Prepare backing surface

    Again, check and re-plane the backing if necessary. Follow dialogs and run process again. The head will automatically find the fiducials with its camera and align itself. 

* Remove the board

     When finished, use the sandpaper and/or razor blade to debur the board. Check to be sure all the traces are isolated. Use a pair of dikes to cut the surface of the tabs, then a razor blade to separate the board from the PCB material. Use a file to smooth the edges. 

* Safely exit and shut down the machine

     Click File > Exit. Close the lid and allow the machine to return its head to a safe position to shut down. Once the program has exited completely, open the lid and turn the power off using the switch on the lower left-hand front side of the machine. 
