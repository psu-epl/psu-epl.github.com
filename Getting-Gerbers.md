# Eagle
## Getting Gerbers and Drill Files
This guide will provide a step-by-step instruction on how to retrieve Gerber files from EagleCAD.  First it might be useful to describe what a Gerber is and why we need it.  Very simply put: a gerber file is a standardized instruction used by most manufacturers to define 2D board layers.  Each Gerber will represent one visible layer on your board and you might need different Gerbers for different jobs.  Think of a gerber as a set of instructions for a CNC machine and each instruction is specific to that particular layer.  For prototyping in the LID we will mostly be dealing with four 4 layers:  Top, Bottom, Dimension and Drills.

### Top, Bottom and Dimension

* Open your project and navigate to File > CAM Processor.
* In the CAM Processor window click File > Open > Job.
* Navigate to your cam job folder the default is $HOME/Your_Username/Current_Eagle_Version/cam.
  * Where Your_Username is the current user and CURRENTVERSION is your current eagle version i.e: eagle-7.5.0
  * As an example /home/fire-hamster/eagle-7.5.0/cam
* Open the job gerb274x.cam.  This should open several tabs in the CAM processor window.
* Each tab will produce a unique Gerber file for that layer.  For each tab you will need to specify the folder you want to store the Gerber files, leaving the filename as %N will save the Gerber file as your project name.
  * Component Side (Top).  Make sure Top, Pads and Vias are highlighted.
  * Solder Side (Bottom).  Make sure Bottom, Pads and Vias are highlighted.
  * Silk Screen CMP (Dimension).  Make sure Dimension tPlace and tNames are highlighted.
  * If you need a solder mask there are two extra tabs available.
  * You can either generate all five files by clicking __Process Job__ or you can create the active tab file by clicking __Process Section__

The Top Bottom and Outline will make up three of the four board files needed to run a job in the LID.
### Drill Files
* Open the CAM processor as above (if you're still there then great!)
* Open the job excellon.cam (this should be located in the same folder as your gerber274x.com file): File > Open > Job.  This should open the _Generate Drill data_ tab in the CAM processor window.
* As before specify the file location and make certain Drills and Holes are highlighted.
* Click __Process Job__ or __Process Section__ to generate the file.a

Congratulations!  You're done!
# KiCAD

Coming Soon!