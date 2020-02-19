---
title: Stratasys Mojo 3D Printer
layout: sop
author: 
date: 
---

# Before You Start
[Check the general 3D Printing Guide](/doc/equip/printer/3D-Printing-Checklist)

# Mojo 3D Printer Standard Operating Procedures
## Preparing model to print
1. Open the “Mojo Print Wizard”:
   - Start -> All Programs -> Mojo -> Print Wizard.
1. Select your part in pop-up file explorer.
1. Verify STL units matches what's expected.
1. Verify that the part has the correct size, and adjust the scale if necessary:
 - Check the dimensions displayed above the “Orient Part” button.
 - Make sure the size of the part in the 3D view looks correct relative to the print bed.
1. Orient the part as desired.
1. Select desired support structure:
    - Default of “Sparse” is typically sufficient?

## Printing
1. Hit “Print” in the Print Wizard:
    - Print Wizard will prepare the job by slicing the parts into layers, generating a support structure,  and computing the tool path that will guide the print heads:
    - Print Wizard will display a summary of the model and support material used and the estimated print time.
    - Record the model and support material used to determine the cost of the print job.  (Compute the cost as $X * ModelMaterialInCubicInches + $Y * SupportMaterialInCubicInches).
    - Note: Your job is not printing yet! It has only been queued up.
1. Open the “Mojo Control Panel”:
    - Start-> All Programs->Mojo->Mojo Control Panel
1. If your part is not displayed, and the printer is not currently printing another job, click the “Select Part” button and select your part.
1. Verify there are enough model and support material left to complete your job:
    - The model and support material bar graphs should be green.
1. Select the appropriate build raft:
    - If your part will fit inside a 1-inch cube then there is a reusable Kapton build raft that may be used.  However, there may be some warping around the bottom edge of your part.
    - Any parts that are larger than a 1-inch cube must use the standard non-reusable build raft.
1. Load build raft into the printer:
    - Align the clips on the bottom of the raft with holes in metal build platform and push into the printer until the raft clicks into place.
    - Raft front edge should be flush with the metal build platform.
1. Click the “Print” button in the Mojo Control Panel.

## Cleaning
1. All prints will use some amount of support material.  Depending on the design, it may be easy enough to manually separate the support from the model, otherwise, it's best to use the bath.
1. If your parts are small, install the white plate into the bottom to keep the parts from getting sucked down into the stirrer. (Normally this would be done before adding water and the cleaning tablet.  How should we do this since we are not replacing the bathwater with each cleaning cycle?)
1. Push the button on the top of the Wavewash support removal bath.  An LED in the button should illuminate, the magnetic stirrer should activate, and the bath will begin to heat up.  It's best to start the process before adding your part to allow the bath to heat up.
1. Depending on your design and how thick the support material has been built up, it may take a few hours to completely dissolve the support material.  The wave-wash will run for an 8-hour cycle and automatically stop.
1. Stop the Wavewash (if it hasn't automatically stopped yet) to stop the vortex created by the stirrer from sucking your parts down to the bottom.
1. Use the tongs to remove your parts and visually verify the support material has all been removed.  If not, then put your parts back in and start the Wavewash again.
1. Place your parts in the rinse bucket, and rinse them off thoroughly with tap water in the bathroom sink.

## Maintenance

### Print and support material replacement
1. TBD (It's pretty simple though!).

### Wavewash bath replacement
1. Dump out the old bathwater in the bathroom sink.  The solution is supposedly safe enough to do this.
1. Rinse out the carafe and refill with water.
1. Install the carafe back onto the Wavewash.
1. Start the Wavewash to heat the bath up.
1. Add a cleaning tablet.
1. Wait for the tablet to dissolve before adding the parts

## Tips
### Model preparation
#### Printing orientation -- Considerations for how to orient your model on the print bed:
1. Optimize orientation to reduce required support material.
1. Optimize orientation for strength:
    - X-Y axis (parallel to the print bed) strength will be higher than the Z-axis strength.  This is because the Z-axis strength depends on the adhesion between separate layers.
    - The z-axis adhesion of the ABS-Plus material has been significantly better than achieved from hobby-grade printers, and better from professional printers using standard ABS.
1. Optimize orientation to fit parts on the print bed, if printing multiple copies or multiple parts:
    - Note:  Adding a 2nd copy by opening the same part again will allow different orientations, which may allow for better bed space utilization.
    - It is not possible to nest parts – parts are automatically fitted based on a rectangular bounding box.
    - It is not possible to stack parts – all parts are automatically positioned on the bed surface.

#### Printing procedure -- what to expect
1. The printer will spend a few minutes preparing to print:
    - Heats up the build chamber.
    - Cleans model material print head.
    - Raises build platform to print heads.
    - Touches the build raft in multiple places to calibrate the height.
    - Cleans model material print head again.
2. Printer begins printing:
    - Lays down 5 layers of model material to stick parts to the build raft.
    - Cleans support material print head.
    - Lays down 4 layers of support material to allow for easy separation of parts from build raft.
    - Prints part using model material and support material, while cleaning the heads periodically.
