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
* Add fiducials
    Fiducials are holes used to align the blank during processing, typically when the board is flipped to do the second side. There are two ways to do fiducials:
    * Use existing holes
    * Add dedicated holes
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
