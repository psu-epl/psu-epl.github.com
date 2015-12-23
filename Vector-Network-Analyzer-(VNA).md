# VNA SOP

## table of contents

 * [Setting up the VNA](https://github.com/psu-epl/psu-epl.github.com/wiki/Vector-Network-Analyzer-%28VNA%29/_edit#setting-up-the-vna)
 * [calibrating the VNA](https://github.com/psu-epl/psu-epl.github.com/wiki/Vector-Network-Analyzer-%28VNA%29/_edit#calibrating-the-vna)
    * [1-Port Calibration](https://github.com/psu-epl/psu-epl.github.com/wiki/Vector-Network-Analyzer-%28VNA%29/_edit#1-port-calibration-reflections)
    * [2-Port Calibration](https://github.com/psu-epl/psu-epl.github.com/wiki/Vector-Network-Analyzer-%28VNA%29/_edit#full-2-port-calibration-reflections-and-transmissions-in-both-directions)

##Setting up the VNA

1. ALWAYS ware the grounding strap when using the VNA.
2. Turn the VNA on.
3. Set the starting frequency point by pressing the start bottom in the stimulus group than typing in the frequency on the number pad and then the frequency units located on the right side of the number pad (G,M,K,X1(Hz)).
4. Set the ending frequency point by pressing the stop bottom in the stimulus group than typing in the frequency and unit as before in step 3.
5. if needed, set the stimulus power by pressing the menu button in the stimulus group, then press the soft key labeled PWR RANGE to switch to manual mode. otherwise skip to step 7.
6. press the POWER RANGES soft key and then the corresponding power range that is desired.
7. carefully remove the rubber SMA protectors from the VNA and coax cables and place them in a safe spot so they won't get lost.
8. touch the ends of the coax cables to discharge any built up energy and then screw one end into port one by hand, use the calibrated tension wrench to torque the SMA connector the rest of the way. stop when the tension wrench clicks.
9. for a 2 port measurement repeat steps 7 and 8 for port 2.
10. for a 2 port measurement press Display, DUAL|QUAD SETUP, and then DUAL CHAN to turn both ports on. For a single port measurement skip this step.
11. For best results let the VNA worm up for 30min prior to calibrating.<br>

## Calibrating the VNA.
1. Press the Cal soft key.
2. press the CAL KIT soft key.
3. Press the SELECT CAL KIT soft key
4. Press the 3.5mmD 85033D/E soft key
5. Press the Cal soft key
6. Press the CALIBRATE MENU soft key

### 1-Port Calibration (Reflections)
1. for a 1-port measurement press the S11 1-PORT soft key.
2. Attach the Open calibration load to the coax cable on port 1 and torque it down with the calibrated tension wrench while using a second 5/16th inch wrench to hold the calibration load steady. (**IMPORTANT:_Never twist calibration loads and hold the tension wrench at the very end!!! failure to do this can damage the center conductors and ports_**) then press the OPEN soft key.
3. replace the open load with the short load and press the SHORT soft key.
4. replace the short load with the 50 ohm load and press the LOAD soft key.
5. Press DONE soft key.<br>
You are now ready to take one port measurements.
If the frequency window or power level ever changes the device must be re calibrated.

### Full 2 Port Calibration (reflections and transmissions in both directions)
1. press the reflections soft key
2. Attach the Open calibration load to the coax cable on port 1 and torque it down with the calibrated tension wrench while using a second 5/16th inch wrench to hold the calibration load steady. (**IMPORTANT:_Never twist calibration loads and hold the tension wrench at the very end!!! failure to do this can damage the center conductors and ports_**) then press the OPEN soft key.
3. replace the open load with the short load and press the SHORT soft key.
4. replace the short load with the 50 ohm load and press the LOAD soft key.
5. repeat steps 2-4 on port 2
6. Press the standards done soft key
7. press the transmission soft key
8. attach both coax cables to the female to female connector
9. press the "Do Both FWD + REV" soft key
10. Press the standards done soft key
11. press the isolation soft key
12. press the Omit Isolation soft key
13. press the Isolation Done Soft Key
14.Press the Done 2-Port CAL soft key<br>
You are now ready to take two port measurements.
If the frequency window or power level ever changes the device must be re calibrated.