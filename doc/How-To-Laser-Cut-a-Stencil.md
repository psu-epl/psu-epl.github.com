A quick note about Kerf: kerf is the edge-to-edge gap left behind after cutting any material.  This can be measured by cutting a straight line, placing the material under the microscope with the calibration slide as a ruler and counting the larger 0.1mm graduation marks.  For cutting out PCB pads, we care about where the center of the laser beam should be in order for the edge of cut to align with the edge of the pad.  So we want the material specific center-to-edge or half kerf measurement to plug into our CAD software.

If you haven't done this before, try parchment paper.  It is cheap, easy and works really well.  When setting up a jig for "printing" your solder paste with a parchment paper stencil, use Kapton tape to hold the top edge of the stencil.  Painters tape (blue tape) will not hold parchment paper securely.

## EAGLE

Go to Tools > DRC then the Masks tab.  In the Cream row, set both Min and Max to the half kerf listed in the [[material database]] next to the material you are using.
 
Go to File > CAM Processor and set the output device as GERBER_RS274X, and make sure that only the tcream layer is selected on the right. Select an output location and filename and then process the job, it will create a gerber file of just the tcream layer.

## KiCad

To account for the laser kerf in Pcbnew, go to Dimensions > Pads Mask Clearance and adjust the solder paste clearance to the half kerf listed in the [[material database]] next to the material you are using.  If the half kerf for your material is 5mil, then you will want to set -0.005in (or -0.127mm).  Now go to File > Plot and make sure the Plot format is Gerber and the Paste layers you care about are selected.  Choose an output path and press the Plot button.

## From the laser computer...

Follow standard laser cutter operations.  Full Spectrum RetinaEngrave3D must be running before you can print to it.

Start Gerbv, go to File > Open layer(s) and select the gerber tcream/Paste file you created earlier.  It may help to make the pads black and the background white in Gerbv before you print.  Then print from Gerbv, selecting the full spectrum engineering driver as your printer.  Take a look in RetinaEngrave3D and make sure all of your pads are there.  If not, go back and adjust the pad/background colours in Gerbv as recommended above.

Use the recommended power, speed and vector current settings from the [[material database]] for the material you want to work with (regular paper/parchment paper/kapton). Make sure to tape or clip the material down onto an acrylic sheet or it will move when the compressed air under the laser cutter head passes over.  Minimizing material movement and carefully setting the focus will produce the best results. 
