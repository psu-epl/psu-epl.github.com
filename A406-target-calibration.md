
Your target needs to be calibrated. There is access to this function

0. Get ready.
   - Put in a router tool. It's the most robust tool we have.
   - Put in a PCB of some standard height.
1. Determine the layer stack height (backing + PCB)
   - Hit the "spindle follow mouse button"
   - Put the head above a blank PCB. 
      - Hold left control and move the cursor where on the PCB you want to go and click to move the head.
   - Press the "Home Z" button.
   - It thinks it knows the layer stack. But if it's wrong you need to 
2. Make the tool *just* touch the PCB
   - Use a DMM in "beep" Ohm mode and touch one lead to the PCB and one to the router bit. When it beeps, it touches. Duh.
   - Start with 10 mil steps, go down to 1 mil steps, and end on 0.1 mil steps until it beeps.
   - The Z readout tells you the correction you need.
3. Correct the target.
   - In CNC mode, push and hold "Left Control" and "Caps lock", select CNC menu.
   - You will find more options: choose "Target button calibration".
   - Enter in the *negative* of the value in the Z axis which should be the correction.
   - Choose Save
4. Now test it. 
   - RAISE the head - do NOT use the router bit as a scribe ;)
   - Home the Z axis again.
   - Choose "camera follows mouse"
   - Hold left control and use right mouse click to choose a blank area of the board. You only need 0.1 in^2.
   - Click on the camera window button in the lower right hand corner.
   - In the camera window, choose autofocus.
   - Find a clear area of copper
   - Right click within the camera within the camera and choose "Tool test at camera position".
   - Then enter a penetration depth of something ridiculously light: 0.1 mils.
   - It'll try to route a cross. But at 0.1 mils, it should really only scratch the surface. Maybe even just have a few points of contents.
   - Then do another one at 1.5 mils, which is a standard penetration depth, and should do it.

