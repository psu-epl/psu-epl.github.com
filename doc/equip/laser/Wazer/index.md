---
title: Wazer
layout: doc
author:
date:

---

## Overview

We have a [Wazer](https://www.wazer.com/specs). Here is a quick overview:

The WAZER is a table-top waterjet cutter. Waterjet cutting uses a mixture of high-pressure water and an abrasive, it has the ability to cut through many materials. The WAZER is limited only by the repository of materials that are currently available on their online Material Library. In order to set up a cut, a 2D design must be created in an outside program (Solidworks, Illustrator,  Fusion360, Inkscape,  AutoCad, Onshape, etc) and then take a DXF or SVG file and upload it to WAM which is the slicing software. WAM is browser based and its use is outlined in a separate document [HERE](https://docs.google.com/document/d/e/2PACX-1vR1dXCqtqhrKVkHyGhJJPfcSqz3ATtw6Qzo6puR2IplyjMEwYYs1ZHa1CS6VhqkCRD1tPU0lUCym6Kx/pub)

## Anatomy

The WAZER has two main components: the main unit and the pump box. The pump box is the smaller enclosure on the right and is responsible for pressurizing the water that comes out of the building’s water system. The main unit is the larger of the two and contains the cut bed and control panel. The main unit is the only part of the WAZER that needs to be interacted with, the pump is fully controlled by the WAZER and should not be messed with.

The main unit has several parts to be aware of:

<center>![Wazer Central Parts](images/wazersop1.png)</center>

The **Abrasive Hopper** holds the garnet sand that is mixed with the pressurized water at the cutting head.

The **Enclosure** holds the cutting bed, water, used abrasive and material.

The **Control Panel** is the main interface through which the Wazer is operated.

<center>![SD Card Slot](images/wazersop2.png)</center>

The **SD Card Slot** is where cut files are uploaded to the Wazer.

The **Power Switch** is located underneath on the right side.

<center>![Wazer Insides One](images/wazersop3.png)</center>

<center>*Wazer insides (pictured above and below)*</center>

<center>![Wazer Insides Two](images/wazersop4.png)</center>

<center>*Cut bed size: 12" x 18"*</center>

## Operation

The WAZER will not turn on unless there is a certain amount of water in the tank (about 2/3rds) but should not be attempted to run unless the water level is within ¼ inches of the top of the cut bed.

In order to run, the water supply from the building’s plumbing MUST be turned on otherwise the pump box will be severely damaged.

### Detailed Procedure

1. **Check water levels**
  - must be within 0.25 inches of the top of the cut bed, if not, add water manually using a large cup/container/bucket.

1. **Turn on water supply**
  - There is a sink to the left of the WAZER. Underneath there is a white valve and a blue lever switch. Make sure this switch is HORIZONTAL before continuing.
<center>![General Water Supply Reference](images/wazersop5.png) ![Specific Water Supply Reference](images/wazersop6.png)</center>

1. **Prepare abrasive system**
  - The WAZER assumes there is approximately 35 lbs of abrasive loaded at the start of each cut, and tracks the amount of abrasive by the length of cut versus measuring the amount in the hopper. Therefore, it is imperative that the hopper is fully loaded to ensure that you will not run out of abrasive during a long cut.
  - On the left side of the Main Unit, there is a drawer that has a bucket with two screens on top. Pull it out slowly and carefully. Remove the screens and if there is “enough” abrasive move on, otherwise take a cup and pour the abrasive through the screens (in case there are any large chunks) until there are small peaks poking above the screens.
    - Before adding sand to the hopper, make sure there is no wet sand in the hopper. If there is wet sand in the hopper, do not attempt to remove it. Get the manager on duty (if they're trained on the wazer) to service the hopper for you, as you don't want to be responsible for causing the equipment to need to be serviced.

**IMPORTANT: At no point should any abrasive material be physically added to the inside of the main tank, abrasive needs to be completely dry when it is mixed with the high pressure stream of water inside the cutting head.**

<center>![Abrasive Fill Amount](images/wazersop7.png)</center>
<center>*The above amount pictured would constitute “enough”.*</center>

  - Next, back to the inside of the main unit, take off the front bucket cover by pulling up on the metal handle  and empty out any used abrasive from the collection buckets and then carefully re-insert them. Water may be poured back into the WAZER and the used abrasive then scooped out and discarded into a provided 5-gallon bucket.


# Power and Speed settings

There are slightly different settings depending on whether you're using vector or raster modes:

## Vector mode

 - **Vector Current %** [0 - 100] must be set per job, where 100% is presumably 80W for our lasercutter.
 - **Speed** [0 - 100] is the speed that the head moves along the vector path -- the faster it goes, the _less_ power it transfers to your material and thus the less effective power.
 - **POW** [0 - 100] is the pulse width modulation of the beam, and is set per layer, where each layer is defined by color (RGB value), where there are 7 possible layers: black, red, green, blue, yellow, cyan, and magenta.

## Raster mode

 - **Raster power** [0 - 100] presumably the same as vector current, which is where 100% is presumably 80W for our lasercutter
 - **Raster speed** [0 - 100] which is like vector speed - the faster, the less effective power.

***

# Lasercutting overview

Lasercutter software shows up as a color printer in Windows. You can "print" to the laser using any software that has a print button, however using something that has good control over dimensions and is vector based is recommended.

Here is how to cut something in the either of the two different modes:

## Vector mode

 1. Turn on the laser cutter and run **RetinaEngrave3D** and leave both up and running.
 1. Use a vector image program, like Inkscape or a PDF viewer, and print to the lasercutter.
 1. Assign the 7 colors to their layers, which you set the order of cutting as well as vector speed and POW.
 1. Run your job

## Raster mode

 1. Turn on the laser cutter and run **RetinaEngrave3D** and leave both up and running.
 1. Inside RetinaEngrave3D, import a bitmap from **File > Open**.
 1. Play with the pixelization, halftoning, DPI, size, etc using RetinaEngrave3D settings.
 1. Run your job.

## Raster and Vector:

 1. Make the Rastered part of you're project (logos, text, etc) black and the cut lines lighter colors like yellow.
 1. Print to RetinaEngrave
 1. On the Raster tab set the B/W cutoff to a high enough value so only the black raster shows
 1. On the vector tab set the repeat of the black layer to '0' to suppress vectoring
 1. Choose **Raster then Vector** for the mode.
 1. Run your job

***

# Detailed Procedures

### Computer prep

 1. **Login** to the computer
 1. **Turn key on** laser cutter to turn on laser cutter. If that doesn't turn it on, rotate the stop button until it snaps out.
 1. Wait for laser cutter to boot and get an IP address (shown on the LCD front panel).
 1. Start up **RetinaEngrave3D** by clicking on the desktop icon
    - ![Retina Engrave 3D icon](images/retina_icon.png)
 1. Press **'H'** to home the laserhead. You'll get "0 0 0" for your current position and "Connected" and "Homed" in the status bar.

#### Retina Engrave Toolbar:

![Retina Engrave Toolbar](images/retina_header_icons_labeled.png)

 1. **Open the file** you've designed in the design software of your choice (or just a pdf or whatever)
 1. File > **Print**
 1. Select **"Full Spectrum Engineering Driver"**
    - ![Print to laser cutter](images/laser_print.png)
    - If you have trouble printing with a message like "bounding box image invalid" try setting the paper to C size: ![c size paper settings](images/laser_paper_settings.png)
 1. Click OK, Print and then **wait**.
 1. Inside RetinaEngrave3D set the layer order, speed, power, repeat and vector current. See [[material database]] and/or the test pieces for setting these levels.

## Using Retina Engrave

**IMPORTANT READ THIS CAREFULLY**

Your pattern is from (0,0) to (+i,+j) in RetinatEngrave3D. However, the laserhead parks at (0,0) and **CAN'T go positive**, it can only go negative. So, you need to move the laser head to the origin of your workpiece (which is the upper left corner, like in RetinaEngrave3D).

The laser cutter is at 0,0 where + is off to the right and - if off to left, but this is **NOT** how your pattern out is aligned: your pattern is from (0,0) off to the right.

**TL;DR: YOU WILL HURT THE LASER CUTTER BY ENTERING POSITIVE 'MOVE TO' VALUES**

## Getting Ready To Cut

 1. **Put your material** in laser cutter wherever you like.
 1. Use the arrow keys on the PC's keyboard to **move the lasercutter head to the UPPER LEFT corner** of where you want to cut. It's got a red laser so you can see exactly where it's going to start
 1. **Test the outline** of your image to make sure it fits on your material. Hit the 'P' key (for _Perimeter Steps_) once per side and watch where the laser goes. Adjust your material or head appropriately. Make sure that the laser head is back in the upper left hand corner of your piece (on the screen, the red dot should be in the upper left at (0,0)
 1. **Set the focus** see "Adjusting Focal Length" below
 1. **Turn on water pump, air pump, and ventilator** are on by turning on the power strip
 1. **Verify** that the water pump, air pump, and ventilation pump are on by feeling them
 1. Hit **'G'** for go and while it's cutting, **WATCH THE CUTTING. HIT THE STOP BUTTON IF ANYTHING GOES WRONG.**
 1. Move the head out of the way of your material by homing the laser head by hitting **'H'**
 1. Yay! You cut a part. Rinse, lather, repeat

## Adjusting Focal Length

Chuck has cut out a focal length measurement tool - the FOCUS!

![Focus Tool](images/focalLengthTool.png)

 1. Place the material you are cutting onto the cutting bed.
 1. Jog the laser focusing assembly over your material.
 1. Put the focal length measurement tool into the focusing assembly, and loosen the focusing assembly’s z-axis lock in order to move the assembly until the measurement tool is just barely contacting your material.

***

# Laser Settings Detail

## Raster Mode

### From Image

You can import a grey-scale bitmap image as your project. Be sure to set the DPI of the bitmap file in your image program to get the correct size of the final piece.

 1. In Retina Engrave choose **File > Open File or Project**
 1. **Choose** your image file (.bmp)
    - Example Image:
    - ![kittens!!!](images/kitten.jpg)
 1. If your bitmap has greyscale data it is clipped by default. The B/W Threshold slider in the control panel controls what level is the difference between black and white
    - ![Imported raster image](images/raster_1.png)
 1. If you desire greyscale you have to pick a **dithering** scheme
    - **Simple Dither** makes dots further apart for lighter and closer together for darker
    - **Halftone Dither** Attempts to use a halftone algorithm to space the dots
    - ![imported raster image dithered](images/raster_2.png)
 1. Set **Raster Power** and **Raster Speed** for your material
 1. Follow above directions for placing and testing the perimeter and running the laser

### From printer

 1. In your graphics software get your job ready for printing
    - Size should be respected from your drawing tool's geometry
 1. Follow the above directions for printing a file to Retina Engrave
    - Note: make sure "Ignore Raster" is NOT checked in Import Options in the Control Panel
 1. Follow the above directions setting the dither or black/white cutoff value
 1. Set **Raster Power** and **Raster Speed** for your material
 1. Follow above directions for placing and testing the perimeter and running the laser

## Vector Mode

 1. In your graphics software get your job ready for printing
 1. See above directions for printing to Retina Engrave
 1. Check that the file imported everything
    - It sometimes chokes on large or complicated paths. Repeat import until it works.
 1. In the control panel a **Vector Layer** will have been created for each color it detects
    - ![imported vector job](images/retina_job.png)
 1. Set the desired settings for each layer
    - **Layer**: The color of line
    - **Order**: When the laser will cut this line. Useful for cutting inside details before cutting out an outline
    - **Speed**: Speed of laser head during cut
    - **Power**: The PWM power of the laser during cut
    - **Repeat**: How many times to make pass over this cut. Set 0 to ignore a color
    - **Contained Objects First**: If checked it will try to cut lines inside closed shapes first. Does not seem to work currently

 1. See above directions for placing material and running laser
 1. Run job


## Raster then Vector (both in one job)

If you want to, say etch words in the top of a panel, then cut out a part and not have to run two jobs (and therefore not have to do alignment between runs) you can choose to run raster then vector in the same job.

 1. In your graphics software get your job ready for printing
 1. Be sure to have the part you want rastered in black and cut lines in a lighter color like yellow
 1. In the raster tab set the B/W Threshold so no cut lines show in the raster view
 1. Set raster power and speed
 1. In the vector tab set the speed and power for your cut lines
 1. Be sure to set the black layer to repeat: 0. This will ignore the black since it will be rastered
 1. Follow the above directions for placing and running the laser
 1. Select **Raster then Vector** from the laser mode drop down
 1. Run job

# TODO

 - Write Z axis table SOP
 - Things that go wrong
 - Maintenance
 - Ideas for improvement
