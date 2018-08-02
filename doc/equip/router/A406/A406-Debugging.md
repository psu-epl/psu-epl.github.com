---
title: A406 Debugging
layout: doc
author:
date:

---

### Improper tool length error.
If you are getting this error that means that the tool you are trying to use is out of the allowed tolerance for the A406.  The ring length measurement is made from the back of the plastic ring to the tip of the bit.

The target length is 20 mm (+/-) .1 mm

Using calipers measure the ring length.  Then using a pair of vice grips, clamp the back of the bit and use a pair of pliers to gently pull the plastic ring in the correct direction.  For lengths below 20 mm pull the plastic ring toward the back of the bit.  For lengths above 20 mm pull the ring towards the tip of the bit.

### No Bits in Tool Table

If you are importing your work and go to Project Tools only to find that the tool table is empty you will have to install them manually.

1. Go to CAM mode by clicking CNC (it will be high-lighted orange).  
2. Click "ATC Control Panel."
3. Take a screenshot (press Print Screen).
4. Paste your screenshot to a bitmap image.
5. Go back to CNC mode by clicking CNC (it should not be highlighted.
6. In the top menu select Tools > Tool table.
7. Now click "Add"
8. You will have to assign the diameters and bit-type manually.
9. At this point the computer should recognize that the bit is present.  If it is you will see a THxx highlighted in blue to the left of the bit you've just added (where xx is two numbers from 01-12).  That tool is now ready to use.
