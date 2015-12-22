Go to the masks tab in DRC in eagleCAD and set spacing values to account for laser kerf. Our laser kerf settings are 3mil, so set both min and max to 3mil in the row titled cream.

 
Go to process CAM jobs in eagleCAD and set the output device as GERBER_RS274X, and make sure that only the tcream layer is selected on the right. Select an output location and filename and then process the job, it will create a gerber file of just the tcream layer.

If using KICAD to account for the laser kerf go to Dimensions > Pads Mask Clearence and adjust the solder mask clearance to -3mil (.076mm or .003in)

Open the gerber tcream layer you just created in gerbv. If not all of your pads make it in the printing process it may help to make the pads black and the background white in gerbv before you print. The print from gerbv to the laser cutter via the full spectrum engineering driver printer option.

Follow standard laser cutter operations, and use the settings for the stencil material being used (regular paper/parchment paper/kapton). Make sure to tape the paper/kapton down onto an acrylic sheet, as it is light and will blow away if not secured. 
