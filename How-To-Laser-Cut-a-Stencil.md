Go to the masks tab in DRC in eagleCAD and set spacing values to account for laser kerf. Our laser kerf settings are 3mil, so set both min and max to 3mil in the row titled cream. 

Go to process CAM jobs in eagleCAD and set the output device as GERBER_RS274X, and make sure that only the tcream layer is selected on the right. Select an output location and filename and then process the job, it will create a gerber file of just the tcream layer.

Open the gerber tcream layer you just created in gerbv. Then export this layer as a .SVG file for cutting on the laser cutter.

Follow standard laser cutter operations, and use the settings for the stencil material being used (parchment paper/kapton).

Tape kapton/parchment paper securely to the top of an acrylic sheet for cutting.
