## LPKF S63 Circuit Board Plotter
Steps to produce a PCB:
* Login to controller PC
* Turn on the S63

    Open the cover. The power switch is on the bottom right front corner.
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
* Mount Material
    * Prepare backing surface
* Edit Material Settings
    * Set material thickness
* Edit pattern placement on blank
* Run Process
* Check Isolation
* Flip Material
    * Prepare backing surface
* De-burr back of blank
* Run Process
