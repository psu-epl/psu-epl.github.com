---
title: QD 1390 Laser Cutter
author: 
date: 

---

# QD-1390 Laser Cutter

[Operating Manual](https://www.noisebridge.net/images/9/9b/FSL_40w_Hobby_Laser_Manual.pdf)

# General Notes:

* This laser cutter will work with DXF vector files (for cutting and rastering) and image files (rastering only).

* Do not cut PVC or Vinyl on this cutter as it can release harmful smoke.

## Safety:

* IR beams are invisible but very damaging. Never run the laser with hood up, and always wear eye protection.

* It’s good practice to keep the IR laser switched **off** until you are sure you are ready for cutting. 

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_0.png)

* Make sure the fire extinguisher is nearby.

# Prepping the Laser 

1. Turn the key on the top of the laser to the on position.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_1.png)

2. Turn on the water chiller to the right of the laser. This step is important so the laser doesn’t overheat.

    1. It may sound an alarm for a few seconds but it should go away quickly.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_2.png)

# Preparing your Job 

1. Login to the computer next to the laser cutter.

2. Open RDWorks which is the software used to control the laser cutter.

3. Import the file you wish to work with.

    1. Click File > Import

        1. You can import most vector files and images, but a safe bet is to use DXF vector files.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_3.png)

4. Check your job.

    2. There are several issues that can happen upon importing a vector image.:

        2. The vectors are messed up, in which case you will have manually edit your job by clicking "Edit Nodes", and adding nodes to the parts you want to remove, or move. It takes practice.

        3. Your vector image is scaled way too small. Select your vector shapes, and check the width and length in the upper left corner (not the x and y values, that is the position of your piece). The program has a tendency to take inch dimensions and just turn them into millimeters (not convert, just changes it, ex. 6 inches becomes 6 mm). You can fix this by highlighting all of your shapes, and converting your dimensions in inches into millimeters (multiply each dimension by 25.4) and entering that in for the height and width.

## Cut Power and Speed or Rastering

Image files (.jpg, .png, etc.) will **always** raster, meaning it will not cut. It will just etch the image onto the material. If you want to cut, you need to add vector shapes which can be done directly in RDWorks using the shape and line tools.

Different materials and thicknesses will require different laser powers or speeds to cut through the material.

### Material Cut Settings

Below you can find some examples of cuts made in various materials.

#### 1/16" Clear Acrylic

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_4.png)

#### 1/16" Bamboo

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_5.png)

### Changing Cut Setting in RDWorks

In the upper right hand corner of RDWorks you should see a small window that will probably have a single black block followed by cut and speed settings. It is possible to use different cuts and speeds for different parts of your job by using different "colors" to identify different layers on your piece.

#### Using different cut settings in your job (i.e. cutting or etching, etc.): <<Add Images>>

1. Click on the vector you wish to edit the cut settings for.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_6.png)

2. Click on one of the colors at the bottom of the software to change it. The shape should change to that color and a new color and item should appear in your layer window in the upper right hand window.

    1. Note: The color only identifies the layer of the vector.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_7.png)

3. Double click on the layer you wish to edit in the upper right-hand window.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_8.png)

4. In the dialog box that pops up, edit the speed of laser to your desired settings.

5. Edit the minimum and maximum power of the laser to your desired settings.

    2. Usually you will just make the minimum and the maximum the same.

    3. Sometimes it gives you the option to change two power settings. Just uncheck one of them.

6. You can change the cut type from cut (will just use the laser to etch the lines on your vector) to scan (will use the laser to ‘fill’ in your vector shape--usually used to etch opaque shapes)

    4. Note: Scanning large images can take a very long time as opposed to cutting. If you can cut instead of scan, please do so. Also make sure you are using much lower power settings and higher speed settings for scanning.

Any vector you change to this color will have those cut settings.

Alternatively, if you just want to use the same cut settings throughout your job, just change the single black layer that is there by default and directly edit the settings there.

## Aligning and Testing

1. When you think your job is ready in RDWorks, open the hood (make sure the IR laser switch is **still** OFF) and place your material under the laser head.

    1. The green square in RDWorks is laser head start position. It will usually be positioned to the upper left of your piece. So you should place your material down so the laser head is directly above the upper left of your material.

2. You will need to focus the laser for your material using the focusing tool (wooden toilet seat) by placing it on top of your material, and using the top adjustment grip on the laser head to loosen it (twist to the left) and slide the entire laser head so that the tip of the laser rests slightly on the top of the focusing tool. Gently tighten the adjustment grip and remove the focusing tool before closing the hood.

    2. *Note: Be careful to not over-tighten the focusing knob!*

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_9.png)

3. Close the hood, and click "Start" in the laser control on RDWorks (lower right hand menu).

    3. Since the IR laser shouldn’t be on yet, it will not burn your piece. This is just to make sure that the laser will stay on your piece and not cut off of it (which may damage the laser bed).

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_10.png)

4. Once you are sure that the laser will stay on your piece it’s time to start cutting.

## Final Prep

1. Before turning on the beam for cutting, turn on the air filter to the left of the laser. The switch is behind it.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_11.png)

2. Then turn on the green air compressor to the right of the machine by pushing the red switch into the down position.

    1. Air should be flowing out of the laser head continuously at this point. If it is not, check that the handle on the valve is zip-tied into the on position.

    2. The air pressure in the line should not be more than 5 psi. Adjust the pressure using the knob to the right of the switch and read the pressure off of the right gauge.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_12.png)

3. Press the "Laser" switch on the side of the cutter into the on position, turning on the IR laser.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_13.png)

4. Press start on RDWorks to start the cutting job.

![image alt text](https://github.com/psu-epl/psu-epl.github.com/blob/master/images/qd1390/image_14.png)

## While the laser is Running

* Do NOT leave your job unattended. You must monitor it constantly in case of a fire and to ensure correct completion of your job.

* When the laser is running, do NOT open the hood.

* It is not recommended to stare at the cutting laser light. Eye damage may occur.

* Eye protection is recommended.

* Press the **red emergency stop** knob on the machine to stop the job for any reason. 

# Finishing Up

1. Once your job is finished, turn the "Laser" switch on the side of the cutter off.

2. Open the hood and check that your job cut properly. 

    1. If it didn’t you may have to change your cut settings accordingly.

3. Clear the bed of any little pieces of material (these can cause fires if left there).

4. If you are completely done, follow the shut-off procedure in the following sequence:

    2. Turn off the air compressor.

    3. Turn off the air filter.

    4. Turn off the laser cutter by turning the key into the off position.

    5. Wait about 10-15 minutes before turning off the water chiller.

5. Close RDWorks. (saving your job is optional, but recommended)
