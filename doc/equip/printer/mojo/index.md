---
title: Mojo 3D Printer SOP
layout: doc
author: 
date: 

---

# Before you start!
## [Check the general 3D Printing Guide](/doc/equip/printer/3D-Printing-Checklist)

# Mojo 3D Printer Standard Operating Procedures
## Preparing model to print
1.	Open the “Mojo Print Wizard”
 1.	Start->All Programs->Mojo->Print Wizard
2.	Select part in pop-up file explorer
3.	Verify STL units matches expected
4.	Verify part is the correct size, and adjust scale if necessary
 1.	Check dimensions displayed above the “Orient Part” button
 2.	Make sure the size of the part in the 3D view looks correct relative to the print bed
5.	Orient part as desired.
6.	Select desired support structure
 1.	Default of “Sparse” is typically sufficient?

## Printing
1.	Hit “Print” in the Print Wizard
 1.	Print Wizard will prepare the job by slicing the parts into layers, generating support structure, and computing the tool path that will guide the print heads.
 2.	Print Wizard will display a summary of the model and support material used and the estimated print time.
 3.	Record the model and support material used to determine the cost of the print job.  (Compute the cost as $X * ModelMaterialInCubicInches + $Y * SupportMaterialInCubicInches)
 4.	Note: Your job is not printing yet!  It has only been queued up.
2.	 Open the “Mojo Control Panel”
 1.	Start-> All Programs->Mojo->Mojo Control Panel
3.	If your part is not displayed, and the printer is not currently printing another job, click the “Select part” button and select your part.
4.	Verify there is enough model and support material left to complete your job
 1.	The model and support material bar graphs should be green
5.      Select the appropriate build raft
  1.    If your part will fit inside a 1 inch cube then there is a reusable Kapton build raft that may be used.  However there may be some warping around the bottom edge of your part.
  2.    Any parts that are larger than a 1 inch cube must use the standard non-reusable build raft.
6.	Load build raft into printer
  1.	Align clips on bottom of raft with holes in metal build platform and push into printer until the raft clicks into place
  2.	Raft front edge should be flush with metal build platform
6.	Click the “Print” button in the Mojo Control Panel

## Cleaning
1.	All prints will use some amount of support material.  Depending on the design, it may be easy enough to manually separate the support from the model, otherwise it's best to use the bath.
1.	If your parts are small, install the white plate into the bottom to keep the parts from getting sucked down into the stirrer. (Normally this would be done before adding water and the cleaning tablet.  How should we do this since we are not replacing the bath water with each cleaning cycle?)
1.	Push the button on the top of the Wavewash support removal bath.  An LED in the button should illuminate, the magnetic stirrer should activate, and the bath will begin to heat up.  It's best to start the process before adding your part to allow the bath to heat up.
1.	Depending on your design and how thick the support material has been built up, it may take a few hours to completely dissolve the support material.  The wavewash will run for an 8 hour cycle and automatically stop.
1.	Stop the Wavewash (if it hasn't automatically stopped yet) to stop the vortex created by the stirrer from sucking your parts down to the bottom.
1.	Use the tongs to remove your parts and visually verify the support material has all been removed.  If not, then put your parts back in and start the Wavewash again.
1.	Place your parts in the rinse bucket, and rinse them off thoroughly with tap water in the bathroom sink.

## Maintenance

### Print and support material replacement
1. TBD (It's pretty simple though!)

### Wavewash bath replacement
1.	Dump out the old bath water in the bathroom sink.  The solution is supposedly safe enough to do this.
2.	Rinse out the carafe and refill with water.
3.	Install the carafe back onto the Wavewash.
4.	Start the Wavewash to heat the bath up.
5.	Add a cleaning tablet
6.	Wait for tablet to dissolve before adding parts



## Tips

### Model preparation

#### Printing orientation -- Considerations for how to orient your model on the print bed:
 1.	Optimize orientation to reduce required support material
 2.	Optimize orientation for strength
   1.	X-Y axis (parallel to the print bed) strength will be higher than Z-axis strength.  This is because the Z-axis strength depends on the adhesion between separate layers.
   2.	The z-axis adhesion of the ABS-Plus material has been significantly better than achieved from hobby-grade printers, and better from professional printers using standard ABS 
 3.	Optimize orientation to fit parts on bed, if printing multiple copies or multiple parts
  1.	Note:  Adding a 2nd copy by opening the same part again will allow different orientations, which may allow for better bed space utilization
  2.	It is not possible to nest parts – parts are automatically fitted based on a rectangular bounding box
  3.	It is not possible to stack parts – all parts are automatically positioned on the bed surface

#### Printing procedure -- what to expect
 1.	Printer will spend a few minutes preparing to print:
  1.	Heats up the build chamber
  2.	Cleans model material print head
  3.	Raises build platform to print heads
  4.	Touches the build raft in multiple places to calibrate height
  5.	Cleans model material print head again
 2.	Printer begins printing
  1.	Lays down 5 layers of model material to stick parts to the build raft
  2.	Cleans support material print head
  3.	Lays down 4 layers of support material to allow for easy separation of part from build raft
  4.	Prints part using model material and support material, while cleaning the heads periodically
