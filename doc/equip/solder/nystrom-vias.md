---
title: Nystrom Vias
layout: doc
author: 
date: 

---

Using the Nystrom Method of making vias in milled PCBs

The first step of the process is to choose the right geometry for your vias during board design. The hole size is very critical - .35mm or 14 mil (0.014") is the correct size for the drill. The pad can be made as small as 25 mil, but 30 is more comfortable. These sizes are comparable to 'production' via geometries on 'normal' boards. Smaller vias tend to cost extra because the drill hole and/or the annular ring must be made smaller to get a smaller via.

Once your PCB is milled with the correct via geometry, the steps to making awesome vias are:

1. Make sure the PCB surface is clean & bright. Any oxidation or debris on the surface will cause sub-optimal results.

2. Shim the PCB. On one side of the board, place shim tape, about 5 mils thick, every few inches. On small boards (3" x 3" or so), 3 places will be enough. Larger boards will require extra support. The idea is that we want the PCB suspended above the base plate by 5 mils. At EPL, there is a page of yellow board marker tapes near the arbor press. These work well for shims.

3. Place the PCB, shims down, on the metal base plate. The plate should be larger than your PCB. The EPL has a large piece of iron plate for this purpose.

4. (Optional) Connect a continuity beeper, one terminal to the metal base plate, and the other to the 28 ga. wire spool. To do this, unwind about a foot of 28 ga. wire and clip the continuity tester to the wire near the spool. By doing this, you can easily tell when pushing wires through the PCB via holes when they're really all the way through (since the wire will touch the metal base plate.)

5. Insert wire into each via. This is the most critical step, and the one it will take a bit of practice to get right. The 28 ga. wire just fits into the .35mm drill hole, and must be pushed all the way through the board. If you are right-handed, using your left hand to push the wire through while holding side cutters in your right hand works well. When the wire is pushed through the board (if you're using the continuity beeper, it will beep when the wire touches the base plate), use the side cutters to clip it almost flush with the board. This is the part which can vary the most, depending on the side cutters you're using (most won't clip exactly flush) and the way you hold and use them. Ideally, you should leave 3 to 5 mils on top of the board after the wire is clipped.

6. Set the vias. In this step, the arbor press will be used to lightly compress the vias into the board so they can't fall out. To do this, set the metal base plate on the arbor press. Adjustable board supports can be used to support the outer edges of the metal base plate if necessary. Slide the PCB to a location such that some vias you wish to set are underneath the arbor plunger. Next, put the metal cover plate (the small silver 4 x 6" plate) on top of the PCB, and rotate the arbor press handle to compress the top plate, PCB, and base plate together. No more than 10 - 15 lb pressure is necessary in this step. Repeat this step, moving the PCB to different locations relative to the arbor plunger, until all vias have been set.

7. Remove the shims. If they are not mangled, put them back on the board marker sheet for re-use.

8. Final press. Repeat step 6, except put more force into each press. This is the step where the vias become flush with the PCB. Without the shims, the excess via wire will be flattened against the board.

At this point, the vias should be almost invisible against the copper foil. They will also be conductive, but may not remain so over time because of corrosion and physical flexing of the board. The final step for long-term stability is to solder each via to its surrounding copper. There is a very easy way to do this if you will be stenciling solder paste - simply include the vias in your stencil art. That way, after you place the parts and reflow, your vias will get soldered at the same time. This obviously works for the component side only. For the backside, or if stenciling will not be used, a syringe of solder paste can be used to manually place a tiny dot of solder paste over each via, then hot air pencil can be used to reflow them.
