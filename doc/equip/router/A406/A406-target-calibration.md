---
title: A406 Target Calibration
layout: doc
author:
date:

---

Whenever you test the depth of your cut, and you have to adjust the penetration depth less than 2 mils or greater than 3 mils for a standard V cutter, then your target needs to be calibrated. We're so, so, sorry. There are support groups for this sort of thing.

0. Get ready.
   - Make sure there's a router bit in the tool holder, because router bits have the best tip for this test.
     - Choose "ATC Control Panel" button (ATC = automatic tool change) at the top of the screen.
     - Choose the tool that you want by choosing the blue "THXX" button and then "Get Tool".
   - Put in a PCB of some standard height.
1. Determine the layer stack height (backing + PCB)
   - Hit the "spindle follow mouse button"
   - Put the head above a blank PCB. 
      - Hold left control and move the cursor where on the PCB you want to go and click to move the head.
   - Press the "Home Z" button.
1. Turn camera on by pressing "camera follows mouse".
1. Find a place over the PCB to do a tool test. Hit Control-Space to focus the camera.
1. Zoom way into the video window that's embedded in the CNC view (NOT the floating video window), right click in that video window, and choose "Tool Test at Camera Position".
1. In the tool penetration test dialog, choose 0.1 mils for the "tool penetration depth". 0.1 mils should barely scratch the surface. Hit OK.
1. It'll try and route the cross, and then go back to the camera view. Refocus by using control-space if necessary. You should have a calibration mark that is just really faint scratches on the surface.
   - If there's no calibration mark, then you'll need to keep doing "Tool test at camera position" and make the penetration depth larger and larger until you just barely scratch the surface. An uneven scratch is just fine - you really want to just barely mark the surface.
   - If you have a calibration mark that's too deep at 0.1 mils, then you'll need to use negative values in the penetration depth. 
1. IF AND ONLY IF the you have a penetration depth that is not 0.1 mils -- in other words, you have to enter in a different value into the penetration depth -- then save the correction to the target depth.
   - In CNC mode, push and hold the "Left Control" and "left shift" keys and select "CNC" menu.
   - You will find more options: choose "Target button calibration".
   - Enter in the value of the penetration depth you had to enter in order to get the light scratched in calibration target (this is usually positive but can be a negative value).
   - Choose Save
4. Now test it. Do another "tool test at camera position" at 0.1 mils penetration depth. If everything has gone right, it'll scratch the surface just like above.
