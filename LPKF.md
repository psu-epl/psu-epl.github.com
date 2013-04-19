The LPKF S63 is small computer-controlled milling machine that is meant to mill blank printed circuit boards (PCBs).

* [[Before you get started]] - you MUST read this before using the LPKF
* [[Design rules]] - How to design your board, including LPKF capabilities
* [[Plated-through hole hacks]] - How to fake having plated through holes
* [[SOP]] - How to use the damn thing. Please reference this as you mill your board.
* [[Maintenance]] - Including changing bits, tool collet, etc.
* [[Troubleshooting]] - When Things Go Wrong.

----

# Using the LPKF S63 Circuit Board Plotter

Steps to produce a PCB:
* Login to controller PC
* Turn on the S63 (Open the cover; The power switch is on the bottom right front corner.)
* Start the LPKF CircuitPro software
* Select the job type

    For two-sided boards, use DoubleSided_NoTHP.cbf

* You may have to manually connect the software to the LPKF.

    Choose "Machining | Connect" from the menu. The connection process takes a bit of time.

* Import Gerber/Excellon data

    * Select "File | Import ..." (or hit Ctrl-I)
    * Navigate to the folder containing your Gerber and Excellon data. For a two-sided board, you need 4 files:

        * Top Gerber
        * Bottom Gerber
        * Board Outline Gerber
        * Excellon Drill Data

            The Gerber files should be in RS-274X format, which means that each file contains the aperture list for that file, as opposed to plain RS-274, which requires separate aperture files. All modern PCB design packages can export RS-274X.

    * assign layers

        The import dialog will show a list of the four data files. There is a column labeled 'Layer/Template' which maps each data file to a processing layer. These fields should be set to TopLayer, BottomLayer, BoardOutline, and DrillUnplated, respectively. DrillUnplated is the Excellon layer. If you have other layers, you can ignore them.

    * verify preview

        Click on each layer and make sure the preview looks sane. If your drills are messed up, you'll need to set the import parameters manually.

        The Excellon format is ambiguous regarding scale; the software must be told how the data was generated. The options which must be set are:

        * Unit (inches or millimeters)
        * Values (set to Absolute, not relative)
        * Leading/Trailing zero supression (Omit Leading/Omit Trailing)
        * Digits (where the decimal place is implied; this is determined by the output settings of the PCB CAD software)

        When these things are set properly, the picture of the board will have holes which appear in the correct places relative to the Gerber drawings.

        If everything looks sane, hit 'OK'.

* Add **fiducials** 

    Fiducials are holes used to align the blank during processing, typically when the board is flipped to do the second side. You should use three or more fiducials, usually located near the corners of the board. There are two ways to do fiducials:

    * Use existing holes

        To use existing holes, select them by clicking the first one, then shift-clicking the others you wish to use. 3 holes is optimal. They need not be the same size, but they should have a few millimeters of blank board space around them. If this isn't true, then the machine may accidentally select another hole nearby as it's searching for the real fiducial. When all of the desired holes are selected, right-click on one and choose 'Copy objects to layer' and select 'Fiducial'.

        If using existing holes, the 'Drill Fiducial' process step can be skipped (because the holes will already be drilled in the normal drill step.)

    * Add dedicated holes

        To add dedicated fiducial holes, choose Insert | Fiducial | Fiducial... This will invoke a dialog which is modeless - that is, it can be moved out of the way so the artwork is visible. Click on the points where you would like the fiducial holes to be. This is typically just outside of the outer board boundary, but can be anywhere, as long as the fiducial holes don't have other holes nearby (within a few mm.) Use 'close' instead of 'apply'. If you click 'apply' you can remove the fiducial by 'undo' or Ctrl+Z. 
        
* Generate Machine Codes (Insulate)

    Open Toolpath > Technology Dialog. 

    Most of the options controlling how the board will be milled are set here. 

    More soon, but the important one are:

    * Isolation type - controls how much copper will be removed around your features. This selection will greatly affect the run time and bit usage of a board. The most economical setting is Basic. Only one channel (typically 8 mil or .2mm) will be cut around each feature. A Basic board will be a bit harder to solder because the single isolation channels are fairly easy to accidentally bridge. The next level, Basic Pads Double, helps some by isolating an extra channel around all flashed apertures. Typically, pads and vias are flashed, which means the places you'll be soldering will have a bit more room around them. The next level, Partial Rubout, will remove copper from the defined rubout regions. This is an expensive operation, so it is typically only used for boards which have RF or galvanic isolation features which the remaining copper would cause a problem. Finally, Full Rubout will remove all extra copper from the board, leaving only your features. Change which isolation type you want by clicking the left and right triangles.

        After selecting the isolation level, select 'Show Details'. If your board does not have spacing closer than 8 mil (.2mm), un-check the Micro Cutter .1mm tool in the tool list. If you don't do this, thousands of superfluous vectors will be generated using that tool, which is not required for your board. If you do have finer spacing, you'll have to leave it enabled and endure a very long run time. The Micro Cutter also wears quickly, so should be avoided if possible. 

    * Routing Type

    This option controls how your board will be separated from the blank. You can choose any style of tabs you like. The option with a single tab in the middle of each edge works well ('Edge Gap'). Change which routing type you want by clicking the left and right triangles.

    The default cutting tool used to separate the board is a 2mm milling bit. There are at least two good reasons to change this to a 1 mm contour router (it wastes less blank material, and it damages the backing material less). This can be changed by selecting 'Show Details' and choosing the 1mm contour router from the drop down list on the right.
            
     Once all your options are set, hit 'start' and the software will calculate the toolpaths. Check the warnings very carefully! Ignore only the warning about pockets. Hit 'close' when all is good. 

     Click on machine view and verify that the color coded tool paths look about right. To see which tool is which, see: Check Tool Magazine below. 

* Check Tool Magazine

    Open Edit > Tool Magazine. Under the list of required tools, make sure there are no red X's. If there are, you need to physically add the tools (bits) to the tool magazine in the machine. IMPORTANT: DO NOT CHANGE POSITIONS 1, 2, OR 3. EVER. EVER EVER. 

    In the tool magazine dialog, choose one of the unused (no green check mark or says NONE) slots and use the dropdown menu to select the first tool that you need. Then open the machine cover and carefully remove/replace the tool in that position using the blue tool changing thingy. Repeat as necessary. 

    Click 'OK'. You shouldn't need to recalculate the toolpaths. 

* Physically Mount Material
    * Select a PCB blank

   Choose some vaguely planar untwisted blank PCB that has enough room on it for your board. In particular, don't forget that you may have fiducial holes outside of your board, and you will want some PCB ribbing around your board to hold it in place during routing. So, don't get to close to holes or edges in the blank. A good idea is to draw on your board where you want it to be.

    * Prepare backing surface

    This is **really important**: the white backing material must be as smooth and flat as possible. This machine has no idea where the material surface is, beyond what the user tells it. That is, it thinks it knows the height of the top of your blank, but it assumes it is a perfect plane. If it deviates even by 2 mils (.05mm), isolation **will not work**. So, with the PCB blank not mounted, run your fingers over the surface of the white backing material and feel for any bumps or debris. If you feel any, blow off the debris or use the razor blade tool to remove the bumps. Bumps occur because drills and routing bits grind out and lift backing material. This is especially noticeable in the routed grooves where a PCB was separated from the blank. It's a good idea to run the razor blade over the surface even if you can't feel any bumps. Lift the white backing material out and check the backside too. 

    Next, attach the PCB blank to the vacuum table. The vacuum table will not sufficiently hold a board for routing, so you must put masking tape along at least two sides. Typically, a 6 inch strip along the left and right edges is sufficient. 

* Edit Material Settings

    * Set material thickness. The settings for half-ounce copper are 18 um copper thickness and 0.061 inch material thickness. Click 'OK'.

* Edit pattern placement on the PCB blank

    Place the head in the lower left hand corner of where you want the board to be routed on the PCB Blank. In the machining view, select the 'Mouse Cursor' mode in the left control panel. It's a bit awkward; if you have the 'Mouse Cursor' mode selected you can click anywhere to move the head to that location. The purpose of this exercise is to make sure the black collar around the bit will never go off the board or hit blue tape. De-select the 'Mouse Cursor' mode.

    In the machining view, right-click on the artwork and select 'Placement'. The design artwork should get a heavy line around it with a rotation handle on the top. Then click and drag the artwork's lower left-hand corner to the location of the head (which should be the appropriate place on the board). 

    Now reselect 'Mouse Cursor' and click on all four corners of the board artwork to verify that the black collar of the router stays on the board and away from tape or other obstacles. 

* Check cut width

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

