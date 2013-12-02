# Overview

The "Torch" reflow oven - worst name for a reflow oven, ever - is a temperature controlled oven used for soldering PCBs that use solder paste and surface mount parts. Essentially, you put solder paste on your PCB, you drop your components on the paste, put it in the oven, let it bring your board up to soldering temperatures, let it cool off, and voila, you have a soldered board.

![Torch T200N+ Reflow Oven](images/Torch_ovenClosed_24C.JPG)

# Reflow SOP for LEADED solder paste

1. Switch on the oven (switch on back, upper right corner).
1. Turn on the soldering exhaust fan, located under the soldering table.
   - ![](images/Soldering_exhaustFan_on.JPG)
1. Verify that one of the black exhaust fan tubes is placed next to the oven's vent on the back side of the oven.
   - ![](images/Torch_exhaustSetup.JPG)
1. Make sure the latch on the left side is closed so the lid is securely down.
1. Open the oven door using the red "Drawer in/out" button
   - ![](images/Torch_ovenOpened_70C.JPG)
1. Carefully put your board on the tray, centered on the tray.
1. Close the oven door using the red "Drawer in/out" button
   - **CAREFUL!** Don't let anything pinched, this thing will happily squash fingers.
1. Launch oven control software ("Pat's reflow controller").
1. Make sure the 'leaded-profile.prfl' is loaded. You can load other profiles if you want, but of course you need to know what you're doing or you'll, uh, "torch" your board.
1. Hit "Start".
   1. Monitor the red temperature graph - it should basically mirror the green set points.
1. When the peak temperature is hit, and the temperature starts coming down, twist the latch on the left of the oven, remove the latch, and crack open oven's lid. Hold the lid open until your board is safely under 150 deg C. Then just leave the lid cracked open while the whole thing cools down.
1. When the temperature is less than about 50 deg C, your board is cool enough to move and pick up - the internal temperature of the oven is displayed in red on the front of the oven:
    - ![](images/Torch_ovenClosed_70C.JPG)
1. Close up the lid and twist the latch shut.
1. Open the oven door using the red "Drawer in/out" button
1. Remove your board.
1. Repeat the above steps to reflow another board, or shut down the machine
1. When you're done:
   1. Switch off the oven (switch on back, upper right corner).
   1. Switch off the exhaust fan.

