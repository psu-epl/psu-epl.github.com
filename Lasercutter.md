***

# Full Spectrum Laser Pro24x12

How to use the laser cutter:

## Theory of Operation

There are two basic modes of operation:

 1. **Vector** -- draw lines, "CNC style" set of paths at various power levels. It's fast and clean looking.
 1. **Raster** -- draw "scan lines" which are pixels across the entire piece. Can only pulse on or off every pixel, so you essentially get dots. To get gray scale, use [Halftone techniques](http://en.wikipedia.org/wiki/Halftone). Slow and pixelated.

In either case, setting the power level correctly is not trivial. 

**See the [[material database]] for help with settings.**

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
 1. Press **'H'** to home the laserhead. You'll get "0 0 0" for your current position and "Connected" and "Homed" in the status bar.
 1. **Open the file** you've designed
 1. File > **Print**
 1. Select **"Full Spectrum Engineering Driver"**.
 1. Click OK, Print and then **wait**.
 1. Inside RetinaEngrave3D set the layer order, speed, power, repeat and vector current. See [[material database]] and/or the test pieces for setting these levels.

### Cutting

**IMPORTANT READ THIS CAREFULLY**

Your pattern is from (0,0) to (+i,+j) in RetinatEngrave3D. However, the laserhead parks at (0,0) and **CAN'T go positive**, it can only go negative. So, you need to move the laser head to the origin of your workpiece (which is the upper left corner, like in RetinaEngrave3D).

The laser cutter is at 0,0 where + is off to the right and - if off to left, but this is **NOT** how your pattern out is aligned: your pattern is from (0,0) off to the right.

**TL;DR: YOU WILL HURT THE LASER CUTTER BY ENTERING POSITIVE 'MOVE TO' VALUES**

 1. **Put in your material** in laser cutter wherever you want.
 1. Use the arrow keys on the PC's keyboard to **move the lasercutter head to the upper left corner** of where you want to cut. It's got a red laser so you can see exactly where it's going to start.
 1. **Test the outline** of your image to make sure it fits on your material. Hit the 'P' key (for _Perimeter Steps_) once per side and watch where the laser goes. Adjust your material or head appropriately. Make sure that the laser head is back in the upper left hand corner of your piece (on the screen, the red dot should be in the upper left at (0,0).
 1. **Turn on water pump, air pump, and ventilator** are on by turning on the power strip.
 1. **Verify** that the water pump, air pump, and ventilation pump are on by feeling them.
 1. Hit **'G'** for go and while it's cutting, **WATCH THE CUTTING. HIT THE STOP BUTTON IF ANYTHING GOES WRONG.**
 1. Move the head out of the way of your material by homing the laser head by hitting **'H'**.
 1. Yay! You cut a part. Rinse, lather, repeat.


# TODO

 - Explain modes and setup
 - Write Z axis table SOP
 - Things that go wrong
 - Maintenance
 - Ideas for improvement