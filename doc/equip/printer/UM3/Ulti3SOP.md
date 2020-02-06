---
title: Ulti 3 SOP
layout: doc
author: Tiffani Shilts
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

### This guide is written both for Managers and for users of the EPL. Some steps apply to only one or the other.

# How to murder the Ultimaker 3

- Poor build plate adhesion is the #1 root cause of ultimaker failure.
- Poor build plate adhesion leads to plastic dragging with the print head.
- Left uncaught, this blob of material will eventually block the print core.
- If left blocked for too long, material will flow ***backwards*** up the print core past the heat sink.
- Once plastic gets in there, you are hosed. It is a real pain to unclog the core
- Clogged cores lead to hate, hate leads to anger, and anger leads to a dead ultimaker
- Improperly unclogging a core in this condition is very likely how our print cores get destroyed most of the time, they are super fragile

## How to prevent this

- There are seven key things to get right to prevent print core failure:
1. Material settings must be accurate (improves build plate adhesion, prevents burnt material).
2. Material must be in good condition. Right now, our black nylon is an example of POOR condition. Use Amphora 3300.
3. Build plates should be cleaned before every print. Improves adhesion.
4. Monitor the build for the first 6 layers after it starts. You can do this in 5 minute intervals if you want, but make sure you don't forget -- this is the most dangerous time for the printers -- Adhesion failure is most likely during these layers, and the result of a failure is most catastrophic since the print core is up against the glass and there is less free volume for a forming blob.
5. Make sure the first layer lines are fusing to each other properly. Poor first-layer fusion is an indicator that the build plate is not properly leveled and needs to be realigned. Unfortunately, cleaning the build plates does knock the alignment out faster.
6. Build plate should be glued, but do not glue the whole surface. Alternating stripes of glue and no glue is best.
7. Do not attempt to unclog a core without being trained on that specific procedure first. All of the above should prevent us from ever clogging our cores, but if this does happen, you need to be careful not to put torque in the wrong places.

# SOP

1. Check the material currently loaded in the ultimaker. For now, make sure it is Amphora 3300. Later, we'll have settings for all materials.
2. Open Cura
3. Connect to the ultimaker. This is how cura knows which ultimaker you are going to print on, so do it first. A blue checkmark in the printers dropdown indicates you are connected.
4. Click on the material settings tab. Then click on the custom submenu, and select Amphora 3300.
5. On the machine profile on the right, first change the profile to "CRAZY / RESET PROFILE". Sometimes, settings get stuck. Buggy software. This helps unstuck them.
5. Now, change to the profile matching the material and machine you want to print on. Only profiles matching the currently selected machine should be available., so if your target printer profile is not available, double check your connection is correct.
6. Verify that the print core temperature and build plate temperature are somewhere around 240 and 80 respectively in the machine profile. I may update the profiles down the line (hint, I will, they need adjusting), but I won't be straying far from those numbers. This is just a sanity check for the bugs in Cura. Don't modify the profile, but try switching to crazy again and back.
7. Now you can mess with whatever settings you need to in the profile. Please do not save your changes to the profile, though. 8. If that ever happens by accident, shoot me an email just so I can double check the settings.
9. When you are done, slice.
10. When slicing is finished, switch to the preview tab and scroll through the layers using the sliders that are located (bizarrely) to the right of the machine profile window (wtf, cura...). Watch out for floating islands, things that don't look sane.
11. If everything looks fine, click the "Send print to network" button once. Trust me, nothing will happen, but it will remember every single time you click that and you will have to cancel all the duplicates manually one at a time.
12. Now, here is where things get tedious. Because we are using a nonstandard material, we have to do a material override before every single print. This is like three extra steps, because Ultimaker.
13. First, go to the "monitor" tab. I'm writing this form memory, but it is the third tab (Prepare and preview being the first two). You will be shown a list of 3d printers. Each one will have a "manage printer" link. Clicking that link will open the printer management interface in the web browser.
14. Once printer management is open, you should see that your print is there waiting to be printed. It will say "ACTION REQUIRED". CLick that, and confirm the manual override.
15. With any luck, at this point, the print will start.
16. NOTE: You will need to clear the "have you removed the previous print?" dialog before every new print. That can only be done from the wheel AFAIK.
