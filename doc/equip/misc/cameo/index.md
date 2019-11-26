---
title: Silhouette Cameo
layout: doc
author: 
date: 

---

# Silhouette Cameo
The Silhouette Cameo is a craft focused cutting plotter.

## Overview
Uses:
* Signs
* Stickers
* Shirt transfers
* Stencils

Compatible Materials:
* Adhesive backed vinyl, tape
* Thermal transfer vinyl
* Card stock, construction paper, writing paper, photo paper
* Magnetic sheet
* Mylar, Vellum, Polyamide film

This crafty little cutter slices, dices, and makes funny sounds all at the same time!  So why would you want to use it?  Well, it isn't half bad for making simple block letters out of adhesive backed vinyl (stickers!).  Some people over the Internet rainbow have had success using the Cameo for cutting solder paste stencils.  Want some laser cut paper without the carbon coated edges?  This could be the tool for you.

## Theory of Operation
Cutting plotters are sort of like a CNC millig machine with very limited Z-axis and zero kerf.  By limited Z-axis, I mean it can either be up or it can be down.  It is possible to adjust the amount of pressure and the blade depth to compensate for material hardness and thickness respectively.  To understand how the blade works, imagine surrounding an exacto knife with a bearing assembly.  With the knife shaft perfectly vertical, drag the whole assembly around on a cutting mat.  The cut point will lag slightly behind the assembly center, but you will end up with something pretty close to what you want.

Fiddly bits:
1 Printing
1 Speed & Pressure
1 Blade Depth
1 Line type
1 Position, orientation, dimensions

### Printing
The Cameo print driver does some strange document size math which is likely to crop off the top and left edges of your art.  So make sure that you add a little extra padding to your page margins.  In InkScape, try re-sizing your document in the Document Properties dialogue (Ctrl+Shif+D), make the top and left margins at least 5% of the actual document size.

From InkScape or another program which supports vector graphics, use the standard Windows print method.  When the Print dialogue pops up, select "Silhouette Cameo".  This is not the default printer, because- Andrew.  Press the Preferences button.  You will probably want to un-check Eject Medium.  If you are using the cutting mat, check Carrier Sheet.

### Speed and Pressure
From the Print Preferences dialogue, click Controller to open the Cameo Controller.  Here you will find speed and pressure settings pre-defined for a variety of materials.  Simply select the material you are working with in the Media Type dropdown box to find the default settings.  If you want to improve precision, try slowing down the speed.

### Blade Depth
Once you have selected the Media Type, a recommended blade depth will be displayed.  Setting the blade depth is a manual adjustment that you must make before you start cutting.  Open the Cameo by lifting the service lid from the front of the cutter.  Rotate the blade retaining clip counter-clockwise to release the blade.  Slide the blade up and out of the carriage.  Place the blade into the depth adjustment socket so the red dot is aligned with the arrow.  Rotate the the blade housing until the arrow points at the desired blade depth number.  Lift the blade and verify the red dot is aligned with the desired number.  Replace blade in carriage.  Rotate the blade retaining clip clockwise to lock the blade in place.

If you are not cutting all the way through a soft material with the recommended blade depth setting, then it is probably time to replace a dull blade.  In some cases, increasing the blade depth (soft material) or pressure (harder material) may be required.

If you are working with this material for the first time and want to check your settings, use the Test Cut button in the Cameo Controller after positioning a sample piece of your material.  When you are happy with the cut, click the Close button in the Cameo Controller.

### Line Type
Back in the Print Preferences dialogue, find the Cutline Settings tab.  Here you can map any color cutline to a Solid Cut Line or a Dashed Line.  By default, only grey is set to Solid Cut Line.  If your lines are red, click Modify Color and choose red.  If you want Dashed Lines (good for fold lines in card-stock), change the Cutline in the drop-down to the right.

To skip this step, you can ensure all of the lines you want to cut are grey (RGBa 808080ff) in InkScape.

### Position, Orientation, Dimensions
Returning to the Print Preferences dialogue Basic Setup tab, note the orientation of the art in the illustration.  The house and tree are upside down in portrait mode.  Standard portrait cuts are rotated 180 degrees.  Alignment is based on the bottom left corner of your art, which winds up in the top right of the cutting mat.  So place your material on the mat accordingly.  Once your material is on the mat, press the leading edge of the mat against the front rollers of the Cameo, and press Enter while Load Cutting Mat is selected with the black dot.  Make sure the outer edges of the rollers engage with the mat and the mat doesn't end up crooked.  The carriage should move to the top right corner of the mat. 

You should not need to adjust the Paper Size if you added the 5% margins in InkScape.

With your material loaded, you can use the arrow buttons on the Cameo, or in the Cameo Controller to position the blade over your desired starting position.  For a portrait cut, the starting point will be the bottom left of your art, and the resulting cut will be rotated 180 degrees.

Press OK, Print, OK.
