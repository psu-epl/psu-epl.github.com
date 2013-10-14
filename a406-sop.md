Using the A406

The A406 does not have a safety cover. Its steppers are stronger than you. Before turning on the machine or performing any operation, make sure the table area is clear of obstacles. Resist the temptation to place anything on the work area of the machine. Most importantly, **keep your hands away from the working area whenever the head is moving!**

1. Turn on the machine. The power switch is here:
<machine image here>
2. Start the PhCNC software
There are two 'views', CAM and CNC. You can toggle between them with this button:
<start>
Go to the CNC view. The CNC button will be colored and the machine controls will show on the left panel:
<cnc>
The Emergency Stop button will be lit because the machine has not been homed. This is true whenever the software is started or after a user-initiated emergency stop. Click the emergency stop button. This dialog will appear:
<emerg>
Choose 'Yes' to home the machine.
3. Go to the CAM view by clicking the CNC button.
4. Import your artwork by selecting File | Import Gerber & Drill (GV) or clicking this button:
<import-btn>
The following dialog will appear:
<import>
First, set the photoplot resolution to 4,000. There is no way to save this setting, so you must do this on every import.
Use the 'Select' button to navigate to your Gerber/Excellon files.
You should see a list of files in the left column.
3 or 4 files must be 'mapped' for the import process for one-layer or two-layer boards:
Top copper
Bottom copper (if applicable)
Outline
Drills
Mapping is done by selecting a filename on the left, then checking the appropriate box on the right:
<mapping>
The Gerber interpreter is pain-free (so far). Excellon data is trickier. When you select your drill file, you will have the option of 'Top' or 'Bottom'. This means you can drill holes from the top or bottom layer. Always choose 'Top', because:
PhCNC's natural processing order does the top of the board first
If holes are drilled on the first side processed, they can be used as fiducials to align the second side.
When you select the side (by checking 'Top'), the following dialog will appear:
<excellon>
If you know the decimal
The software will draw the drill holes as yellow dots on your artwork.