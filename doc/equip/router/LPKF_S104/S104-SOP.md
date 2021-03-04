---
title: LPKF S104 SOP
layout: doc
author: Seth Rohrbach
date: March 4th, 2021

---

# Using the LPKF S104 Circuit Board Router
<img src = "img/s104_1.jpg" width="650">

## Turning Everything On
The S104 expects things to be turned on in a particular on in a particular order. Please follow the correct order below. Do this BEFORE opening the router's software on the host computer.

1. Turn on the air compressor.

<img src ="img/s104_2.jpg" width="650">

Turn on the air compressor by setting the operating mode to AUTO. Ensure the red valve is in the position shown above (parallel with the piping, not perpendicular) to allow the air to flow.

2. Turn on the exhaust system.

<img src="img/s104_3.jpg" width="650">

Turn the exhaust system on by pushing the power button until the "System ON" light is on.

3. Turn on the S104.

<img src="img/s104_4.jpg" width="650">

The power switch for the S104 is on the back of the machine.


## Log Into the Host Computer and Connect to the S104

1. Log into the host computer.

The log in information should be on the monitor. If it is not, ask a manager on duty.

2. Launch LPKF CircuitPro PM 2.7.

<img src="img/s104_5.png" width="650">

It might ask for your license key. Ask a manager for help if this happens.

<img src="img/s104_6.png" width="650">

3. Connect Circuit Pro to the S104.

<img src="img/s104_7.png" width="650">

CircuitPro should attempt to connect to the S104 automatically. Be patient, it might take a few minutes. When it has finished connecting, it will go to the template selection menu.

Sometimes, CircuitPro might not attempt to connect to the S104. In that case, it will proceed directly to the template selection menu. We will connect to it manually in a moment.

<img src="img/s104_8.png" width="650">

Choose the appropriate template for your project. This will likely be SingleSided_Top, SingleSided_Bottom, or DoubleSided_NoTHP.

<img src="img/s104_9.png" width="650">

Next we will connect to the S104 manually. Do this by going to the "Machining" drop down menu, selecting "Connect...", and choosing S104 from the following menu.

## Import Your Project Files

<img src="img/s104_10.png" width="650">

For a two-sided board, you will (probably) require 4 files.

1. A top Gerber file.
This file describes what parts of the copper on the top of your board will be milled away.
2. A bottom Gerber file.
This file describes what parts of the copper on the bottom of your board will be milled away.
3. A board outline Gerber file.
This file describes what the boundaries of your board will be - where the cuts that will remove it from the copper blank will be.
4. An Excellion drilling file.
This file describes where holes will be drilled in your board.

Next, you will assign your files to the layers of the board.

<img src="img/s104_11.png" width="650">

For your top Gerber file, select the "TopLayer" template. For your bottom Gerber file, select the "BottomLayer" template. For your board outline Gerber file, select the "BoardOutline" template. For your Excellion drilling file, select the "DrillUnplated" template. Click OK.

Finally, you need to add fiducials to your project.
Fiducials are holes drilled into your board which are used so the software can determine where your board is after you have flipped it onto the second side. Fiducials are not necessary if your board is single sided, because you won't be flipping it and routing a second side.

<img src="img/s104_12.png" width="650">

In the CAM view mode, select from the drop down menus "Insert" --> "Fiducial" --> "Fiducial". Now click on 3 points on your project where you have room to add fiducials. Click "Close", not "Apply" when you have added 3 fiducials. If you click "Apply" instead, it will add another fiducial at a random location. If you mistakenly add a fiducial in an unacceptable location, simply undo the action with Control + Z - note that this can only be done once the fiducial insertion tool has been closed.

<img src="img/s104_13.png" width="650">

<img src="img/s104_14.png" width="650">


## Generate Your Toolpath

This is where we will set options that determine how the board is physically produced, such as the thickness of the board and the copper plating, as well as the tools being used and therefore the size of the features on the board.

Select from the drop down menus "Toolpath" --> "Technology Dialog"

<img src="img/s104_15.png" width="650">

At the top, under Global Processing Settings, ensure the Material Type is set to FR4 copper with a Copper layer thickness of 18 um. Those are the specifications of the PCB blanks sold in the EPL. If you purchased your PCB blank somewhere else, you should enter the dimensions of your actual PCB blank.

<img src="img/s104_16.png" width="650">

The Isolate settings control how much copper will be removed around your features. Basic, pads double is generally the best choice. If your board does not have spacing closer than 8 mil or 0.2 mm, un-check the Micro Cutter 0.1 mm in the available tools list.

<img src="img/s104_17.png" width="650">

Contour Routing settings control where the breakout tabs on your board will be, so that your board can be removed when it is finished. Horizontal Gaps, Vertical Gaps, or Edge Gaps work best.

Adjust the drills and fiducial settings if necessary. If you don’t have any special considerations for those settings, the defaults should be fine. Your board probably does not have pockets, so go to the pockets settings and deselect the “Process” box.

<img src="img/s104_18.png" width="650">

Push the Start button to generate the toolpath. A box will pop up with a summary of the toolpath, including the tools that will be necessary and how many times each will be used. If the results look sane, click close.

If there is a mistake, such as your board has 50 holes in it but a drill is only being used 3 times, it is likely that you made a mistake when assigning layers or de-selected the tool during the technology dialog. Review your layer assignment, then redo the technology dialog process and generate a new toolpath.

<img src="img/s104_19.png" width="650">

## Verify Tool Magazine

In this step, we will make sure the software knows which tools are actually holstered into the tool magazine and therefore available for use.

<img src="img/s104_20.png" width="650">

Select the tool magazine from the drop down menu, "Edit" --> "Tool Magazine".

<img src="img/s104_21.png" width="650">

The left-hand side contains a list of the tools required for your toolpath. If any have a red X near them, the machine does not know if it possesses them. It may not have them or the machine may have been improperly shut down at some point, causing it to ‘forget’ what tools are currently loaded in its magazine.
If the bits your tool path requires are not available, ask a manager for help identifying the correct tools. If all is well, click OK.


## Prepare the Cutting Area and Mount Copper Blank
