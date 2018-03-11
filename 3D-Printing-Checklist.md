---
title: 3D Printing Checklist
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

# Enqueueing Parts
- Your name
- Your email
- Today's date
- Name of STL file
- Name of folder with the STL (should be your name)
- Special notes
- __Bounding box of the part with units!__
- Material
- Machine

# Using the Ulitmaker 3

## Generating Gcode
- Part is oriented with the largest flat surface down
- Problem surfaces (highlighted red) have support material
- Support material is checked in the print settings
- Gcode preview (eye button -> Layers) looks reasonable
- Supports appear in the gcode preview
- Part sizes match the specified bounding box.
- Add the name and location of the gcode to the queue
- Add the cost and print time to the queue

## Starting a Print
- Gcode looks reasonable in Cura (see previous section)
- Build plate has a thin layer of glue
- Spool has enough fillament
- There are no jobs ahead of this print in the queue
- __Make a sticky note for the print__
	- Name of the person ordering the print
	- Name of the gcode file
	- Price of the print
	- Stick in on the printer
- __Mark it as "printing" in the queue__

## Removing a Print
- Plastic is cool
- Use something softer than glass to gently pry/peel (Fingernail, plastic, or steel. No aluminum or ceramic.)
- Place the print _and its sticky note_ on the shelf
- __Mark the print as "Finished" in the queue__

# Using the Formlabs 2

## Generating Print Files
- There are no large horizontal surfaces
- There are no large-point supports in critical areas of the part
- PreForm says the item is printable (bottom right)
- Comment in the "manager's notes" field when you send it to the printer's queue
- Add the cost and print time to the queue
- __Make a sticky note for the print__
	- Name of the person ordering the print
	- Name of the STL files
	- Price of the print
	- Stick in on the _side_ printer

## Starting a Print
- Build plate is empty and clean (thing on top) 
- Tank vent is open (giant shampoo bottle thing in back)
- __Mark as "printing" in the queue__
- Move the sticky note to the _front_ of the printer
	- If there's no sticky note, make one! (see previous section)

## Removing a Print
- Soak the print in the left alcohol bath
	- Start a timer on your phone for 30 minutes
	- Move the sticky note to the bath
	- Indicating on the sticky note when you started the soak 
	- Swirl the alcohol bath
- Soak again in the right bath
- Wash the part
- Remove the support material (bend and pry with palms)
- UV cure the part
	- Start a timer (30 to 60 min)
	- Move the sticky to the UV oven
	- Note the start time
- __Mark the print as "Finished" in the queue__

# Dealing with Failed Prints
- Mark it as "ERROR" in the queue
- __Describe the failure in the "manager's notes" field__
- Describe the failure on the sticky note
- Email the person who ordered the print
