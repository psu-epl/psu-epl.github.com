## LPKF S63 Circuit Board Plotter
Steps to produce a PCB:
* Login to controller PC
* Turn on the S63 (Open the cover; The power switch is on the bottom right front corner.)
* Start the LPKF CircuitPro software
* Select the job type

    For two-sided boards, use DoubleSided_NoTHP.cbf

* Import Gerber/Excellon data

    * Select File | Import ... (or hit Ctrl-I)
    * Navigate to the folder containing your Gerber and Excellon data. For a two-sided board, you need 4 files:

        * Top Gerber
        * Bottom Gerber
        * Board Outline Gerber
        * Excellon Drill Data

            The Gerber files should be in RS-274X format, which means that each file contains the aperture list for that file, as opposed to plain RS-274, which requires separate aperture files. All modern PCB design packages can export RS-274X.

    * assign layers

        The import dialog will show a list of the four data files. There is a column labeled 'Layer/Template' which maps each data file to a processing layer. These fields should be set to TopLayer, BottomLayer, BoardOutline, and DrillUnplated, respectively.

    * check Excellon scale

        The Excellon format is ambiguous regarding scale; the software must be told how the data was generated. The options which must be set are:

        * Unit (inches or millimeters)
        * Values (set to Absolute, not relative)
        * Leading/Trailing zero supression (Omit Leading/Omit Trailing)
        * Digits (where the decimal place is implied; this is determined by the output settings of the PCB CAD software)

        When these things are set properly, the picture of the board will have holes which appear in the correct places relative to the Gerber drawings.

* Add fiducials

    Fiducials are holes used to align the blank during processing, typically when the board is flipped to do the second side. There are two ways to do fiducials:

    * Use existing holes

        To use existing holes, select them by clicking the first one, then shift-clicking the others you wish to use. 3 holes is optimal. They need not be the same size, but they should havea few millimeters of blank board space around them. If this isn't true, then the machine may accidentally select another hole nearby as it's searching for the real fiducial. When all of the desired holes are selected, right-click on one and choose 'Copy objects to layer' and select 'Fiducial'.

        If using existing holes, the 'Drill Fiducial' process step can be skipped (because the holes will already be drilled in the normal drill step.)

    * Add dedicated holes

        To add dedicated fiducial holes, choose Insert | Fiducial | Fiducial... This will invoke a dialog which is modeless - that is, it can be moved out of the way so the artwork is visible. Click on the points where you would like the fiducial holes to be. This is typically just outside of the outer board boundary, but can be anywhere, as long as the fiducial holes don't have other holes nearby (within a few mm.)
        
* Generate Machine Codes (Insulate)

    Most of the options controlling how the board will be milled are set here. More soon, but the important one are:

    * Isolation type - controls how much copper will be removed around your features. This selection will greatly affect the run time and bit usage of a board. The most economical setting is Basic. Only one channel (typically 8 mil or .2mm) will be cut around each feature. A Basic board will be a bit harder to solder because the single isolation channels are fairly easy to accidentally bridge. The next level, Basic Pads Double, helps some by isolating an extra channel around all flashed apertures. Typically, pads and vias are flashed, which means the places you'll be soldering will have a bit more room around them. The next level, Partial Rubout, will remove copper from the defined rubout regions. This is an expensive operation, so it is typically only used for boards which have RF or galvanic isolation features which the remaining copper would cause a problem. Finally, Full Rubout will remove all extra copper from the board, leaving only your features.

        After selecting the isolation level, select 'Show Details'. If your board does not have spacing closer than 8 mil (.2mm), un-check the Micro Cutter .1mm tool in the tool list. If you don't do this, thousands of superfluous vectors will be generated using that tool, which is not required for your board. If you do have finer spacing, you'll have to leave it enabled and endure a very long run time. The Micro Cutter also wears quickly, so should be avoided if possible.

    * Routing Type

    This option controls how your board will be separated from the blank. You can choose any style of tabs you like. The option with a single tab in the middle of each edge works well.

    The default cutting tool used to separate the board is a 2mm milling bit. There are at least two good reasons to change this to a 1 mm contour router (it wastes less blank material, and it damages the backing material less). This can be changed by selecting 'Show Details' and choosing the 1mm contour router from the drop down list on the right.
            

* Mount Material
    * Prepare backing surface

    This is **really important**: the white backing material must be as smooth and flat as possible. This machine has no idea where the material surface is, beyond what the user tells it. That is, it thinks it knows the height of the top of your blank, but it assumes it is a perfect plane. If it deviates even by 2 mils (.05mm), isolation **will not work**. So, with the blank not mounted, run your fingers over the surface of the backing material and feel for any bumps or debris. If you feel any, blow off the debris or use the razor blade tool to remove the bumps. Bumps occur because drills and routing bits grind out and lift backing material. This is especially noticeable in the routed grooves where a PCB was separated from the blank.

    The vacuum table will not sufficiently hold a board for routing. You must put masking tape along at least two sides. Typically, a 6 inch strip along the left and right edges is sufficient.

* Edit Material Settings

    * Set material thickness

* Edit pattern placement on blank

    From the machining view, right-click and select 'Placement'. The design artwork should get a heavy line about it, with a rotation handle on the top. It can then be dragged to the desired location on the blank. Make sure that wherever you place it that the black shroud will not encounter tape or other obstacles, and is completely on the blank. You can check this by selecting the 'Mouse Cursor' mode in the left control panel, visible in the machining view. It's a bit awkward; if you have the 'Mouse Cursor' mode selected, then click on the graphic view, the head will move to that location. But if you are in Placement Mode, moving the design about, the head will also move to wherever you release the drag, which typically will not be in the corner of your design. The best approach is to de-select 'Mouse Cursor' mode to move your design, and re-select it to check the location.


* Run Process
* Check Isolation
* Flip Material
    * Prepare backing surface

    Again, check and re-plane the backing if necessary.

* De-burr back of blank
* Run Process
