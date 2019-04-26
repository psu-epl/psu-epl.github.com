---
title: 3D Printing Guide
layout: doc
date: \today
fontsize: 12pt
documentclass: article
classoption: twocolumn
geometry: margin=0.75in
numbersections: true
#toc: true
pagestyle: plain
output:
  pdfdocument:
    latex_engine: xelatex

---

### This guide is written both for Managers and for users of the EPL! Some steps apply to only one or the other.

# Before You Start (Managers, Users)

Do you have a 3D print you want to have made?  This guide will help you. Before you begin, you will need a few things.
 
1. You will need a .stl version of your part.
1. You will need to know the approximate dimensions of your part or widget (ie it is 2.1" at the extreme in the z axis)
1. You should have a good idea of which printer you want to print it on, and your settings preferences (color, material type, quality, etc)
1. **All 3D prints must be paid for before we will print them! More on this later in the guide**

For material, type, and price please refer to: **LINK HERE**


# General Procedure Overview (Managers, Users)
In general, 3D printing at the EPL works like this
1. Create a 3D model of your print, and export it as an .stl
1. Get this print added to the 3D print queue.
    * Either email the .stl file along with your preferences to lid@pdx.edu
    * Or add the print to the queue manually
1. Have your print sliced and priced
	* If you are at the EPL in person, you can slice the print yourself, just have a manager calculate the resulting price. Don't forget to add the preform or gcode to the queue. The Mojo has its own software on the computer next to it.
	* Otherwise, the managers will do this for you and inform you of the price
1. Pay for the print and have a manager approve that you are paid
	* If you submitted via email, you will be sent an email by the manager asking you to pay.
	* If you are submitting in person, you will have the opportunity to pay as we add your print to the queue
1. Your print will be printed when its turn comes
1. When your print is done, the managers will email you to let you know, and you can drop by and pick it up.

# Getting Your Print on the Queue via Email (Users)
Just send an email to lid@pdx.edu. Include the following information:
- Your name
- STL file for your print (attached)
- The material and machine you wanted printed out of / on
- __The bounding box of the part with units! (so we get the size right)__
- Any special requests

# Adding a Print to the Queue Manually (Managers, Users with Supervision)
For each school year, there is a folder named "Queue" on the desktop in which we keep all print files. At the time of writing, this folder is named "Queue 2018-2019".

Create a folder with the name of the person requesting the print inside this queue folder. For instance, there is a folder named "Josh Goodroe" which contains all of the files that Josh Goodroe has printed during the 2018-2018 school year.

Add the .stl file for the print to this folder.

Create an entry at the bottom of the 3D printer queue spreadsheet, and fill out the following information:
- The name of the person requesting print
- Their email
- Today's date
- Name of STL file
- Name of folder with the STL (same as mentioned above)
- Any Special notes
- __Bounding box of the part with units!__
- Material
- Machine

**Some prints may ask for multiple copies of a single .stl file, or multiple .stl files. Comma-separate .stl files under the stl file colum to indicate the latter. Add duplication to the special notes column to indicate the former.**

# Slicing and Pricing a 3D Print (Managers, Users with Supervision)

To slice and price an unpriced print in the queue, open the .stl file in the appropriate slicer. For ultimakers, this is Cura. For form labs, this is the custom PreForm software.

Follow the guide for your printer for specific instructions on how to slice.

[See here to find the appropriate guide](/doc/equip/printer)

When you are done, save either the G-Code (.gcode) or PreForm (.form) in the same folder as the .stl, and add this to the gcode column of the queue. 

**As a final step, have a manager calculate the price and print time using the G-Code or PreForm, add this to the price column.**

# Paying for a Print (Users)

At some point, you must pay for your print. You can do this in person, or 
[check out online](https://commerce.cashnet.com/cashneti/selfserve/BrowseCatalog.aspx):

**If you choose to check out online, you must forward a copy of your receipt to lid@pdx.edu, and the manager who emailed you your price**

Once your print is paid for, a manager will mark it as paid, and it will officially be on the queue.

# Executing a Print (Managers, Trained Users under supervision)

When it comes time to actually execute your print, use the generaged G-Code or Preform and follow the appropriate SOP for the printer.

[See here to find the appropriate guide](/doc/equip/printer)

**Mark the print as started in the queue!**
**Write the number of the print on a sticky note and place that sticky note on the printer!!!**

# Post-Processing (Managers, Users with Supervision)
Some prints require post-processing.  For example, Formlab prints require an alcohol bath and UV light exposure.  If a print requires special post-processing, make sure the sticky note stays with the part on whatever machine it is currently in.  If support material needs to be trimmed, this should be done by the user, to avoid potential damage to the print.  

Mark the part as post-processing on the queue.

# Finishing a Print (Managers)
When a print is done, email the person who requested the print to let them know.

Move the print to the finished print shelf, **along with its sticky note.**

**Mark the print as finished on the queue!**

# Dealing with Failed Prints (Managers)
- Mark it as "ERROR" in the queue
- __Describe the failure in the "manager's notes" field__
- Describe the failure on the sticky note
- Email the person who ordered the print


# Picking Up Your Print (Users)
Once your print is done, a manager will email you to let you know to pick it up. Simply drop by the EPL and receive your print!






