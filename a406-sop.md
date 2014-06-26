Using the A406

The A406 does not have a safety cover. Its steppers are very strong. Before turning on the machine or performing any operation, make sure the table area is clear of obstacles. Resist the temptation to place anything besides the pcb blank on the work area of the machine. Most importantly, **keep your hands away from the working area whenever the head is moving!**

1. Turn on the machine. The power switch is located just above the power cord entry on the left rear of the machine.
2. Start the PhCNC software
There are two 'views', CAM and CNC. You can toggle between them with this button:
<start>
Go to the CNC view. The CNC button will be colored and the machine controls will show on the left panel:
<cnc>
The Emergency Stop button will be lit because the machine has not been homed. This is true whenever the software is started or after a user-initiated emergency stop. Click the emergency stop button. A dialog will appear. Choose 'Yes' to home the machine.
3. Go to the CAM view by clicking the CNC button.
4. Import your artwork by selecting File | Import Gerber & Drill (GV) or clicking this button:
<import-btn>
The following dialog will appear:
<import>
Check that the photoplot resolution is set to 4,000. If it isn't, type in 4000 in the edit box. You must do this before you import any files. The reason is that if you have artwork which is truly 8/8 mil and try to isolate to 8 mil, the software will detect spacing violations (which means it thinks it can't get the 8 mil bit through an 8 mil space). This is partially due to discretization error and can be minimized by selecting 4000 pixels/inch.

Use the 'Select' button on the upper left to navigate to your Gerber/Excellon file directory.
You should see a list of files in the left column.
Files on the left must be 'mapped' for the import process. You will need three or four files depending on if your board is one or two layers:
Top copper 
Bottom copper (if applicable)
Outline
Drills
Mapping is done by selecting a filename on the left, then checking the appropriate box on the right:
<mapping>
The Gerber interpreter is automatic. Excellon data is trickier. When you select your drill file, you will have the option of 'Top' or 'Bottom'. This means you can drill holes from the top or bottom layer. Always choose 'Top', because PhCNC's natural processing order does the top of the board first, and
if holes are drilled on the first side processed, they can be used as fiducials to align the second side.
When you select the side (by checking 'Top'), the following dialog will appear:
<excellon>
If you are lucky, the default decimal places and zero suppression settings will 'just work'.
The software will draw the drill holes as yellow dots on your artwork. Look carefully and see if the holes seem to be in the right places. If they aren't, you'll need to double-click on the drill layer in the upper right pane and edit the settings. They must match the export settings used when your artwork was generated.
Don't forget to import an outline (mechanical) layer to define the cutout boundary.
Once all your layers have been mapped, click the 'Import' button on the upper right.
