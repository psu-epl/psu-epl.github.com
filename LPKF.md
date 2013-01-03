## LPKF S63 Circuit Board Plotter
Steps to produce a PCB:
* Import Gerber/Excellon data
    * assign layers
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
