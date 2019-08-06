---
title: Keithley 6430 Sub-FemtoAmp SourceMeter
layout: doc
author: Jennifer Jordan
date: 6th August 2019

---

## Table of Contents
{:.no_toc}
* ToC
{:toc}

# About this Machine
~~/////////////////////////![picture of the machine](images/kitten.jpg)~~

The Keithley 6430 has four-quadrant sourcing plus measurement sensitivity down to the sub-femtoamp and micro-volt levels. You can measure resistance with either the constant voltage or constant current method. This equipment has remote preamp design features which minimize cable/noise effects and increase the measurement accuracy. This instruments low noise and drift performance makes it ideal for research on single electron devices, highly resistive nanowires and nanotubes, polymers, and electrochemical applications.

This SourceMeter has 0.012% basic accuracy with broad source and measurement ranges.
- Source voltage from 5μV to 210V; measure voltage from 1 μV to 211V.
- Source current from 0.5fA to 105mA; measure current from 10aA to 105.5mA. 
- Measure resistance from 100μΩ (<100μΩ in manual ohms) to 21.1TΩ.
- Maximum source power is 2.2W.

This SOP mainly focuses on Basic Source-Measurement Operations and Ohms Measurements. 

If you need to operate this instrument at a higher level, please refer to the manual. Some additional capabilities of the SourceMeter include:
- Perform measurements at the DUT using the small Remote PreAmp.
- Concurrent measurements of all three functions over the remote interface.
- Source-measure sweep capabilities (linear and logarithmic staircase sweeps, source sweep list of up to 1000 points, and memory sweep of up to 100 instrument setups).
- 6-wire ohms measurement with programmable I-source or V-source with V or I clamp.
- 2.2W, 4-quadrant source and sink operation.
- Up to 11 stages of limit testing with a built-in comparator for pass/fail testing.
 - Digital I/O for stand-alone binning operations or interface to component handler.
- Programming language and remote interfaces – The SourceMeter uses the SCPI programming language and two remote interface ports (IEEE-488/GPIB and RS-232C).
- Math expressions – 5 built-in, up to 5 user-defined (bus only).
- Reading and setup storage – Up to 2500 readings and seven setups (five user defaults, factory default, *RST default) can be stored and recalled.
- Closed-cover calibration – The instrument can be calibrated either from the front panel or remote interface.

Applications include:
- Testing carbon nanotube transistors, switches, arrays, nano-bioelectronics, molecular electronic cells, and molecular transistors using I-V measurements.
- Testing single electron transistors using ultra-sensitive I-V measurements.
- Testing molecular diodes using breakdown voltage, I-V curves, and conductance.
- Testing nano-photovoltiacs using I-V, C-V measurements.
- Testing polymer nanofibers and nanowires using I-V measurements, conductivity/resistivity, high resistance measurements, low current measurements (1M ohm - 1*10^14 ohms).
- Testing nanotube (CNT) composites and structures, nanoparticles, composites, and structures using I-V measurements, conductivity, resistivity, thermal conduction, nanomanipulation, elastic constance, Young’s Modulus, cantilever force, I-V characteristics.
- Testing self-assembly using source V, measure I, source I, measure V.
- Testing carbon nanotube (CNT) field emission using I-V measurements, and high voltage sourcing.
- Testing nanobatteries and energy using I-V measurements and charging/discharging.
- Testing quantum scale sensors and detectors and nanobiosensors using I-V measurements.

## Useful Links
- [Manufacturer Website]( https://www.tek.com/)
- You can find the manual ~~[here](manual.pdf)~~.
- [LabTracer Software Download](https://www.tek.com/source-measure-units/2400-software/labtracer-29-unsupported). Only compatible with Windows 98SE, NT4, 2000, or XP only. I.E. this program does not work with Windows 7 or newer. The LabTracer software can coordinate the operation of up to four Series 2400 instruments at once, and collect voltage and/or current readings (with a timestamp for each measurement set) from any connected instrument.

## Machine Safety
- Verify that the line voltage is in the range of 85 to 250V at a frequency of 50 or 60Hz. The SourceMeter can also operator at 400Hz however, accuracy specs are not guaranteed at this power frequency.
- Power must be off when connecting the Remote PreAmp to the mainframe.
- Make sure that the DUTs are disconnected from the SourceMeter before powering up the instrument.
- Exercise extreme caution when a shock hazard is present. Lethal voltage may be present on the cable connections or test fixtures. A shock hazard exists when voltage levels greater than 30V, 42.4V peak, or 60VDC are present. A good safety practice is to expect that hazardous voltage is present in any unknown circuit before measuring.
- Do not touch the circuit under test until it is removed from power. It’s good practice to discharge any capacitors and/or inductors. 
- Do not exceed the maximum signal levels of this machine as seen below,

~~**////////////////////////////////////ADD PIC OF SPECS AND OPERATING INFORMATION: https://www.tek.com/keithley-low-level-sensitive-and-specialty-instruments/keithley-high-resistance-low-current-electrom**~~

## How to Get Help
Ask a Manager if you have any questions.

# Using this Machine
To optimize your connections use copper-to-copper connections when possible and use silver solder on all solder connections to minimize thermal EMFs. If available, clean all connector terminals free of oxidation using a small amount of DeoxIT.

### Front Panel Overview
~~**/////////////////////////////////Add Pic of Front Panel**~~

1. Measurement (MEAS) function keys:
   - “V” Measure volts.
   - “I” Measure amps.   
   - “Ω” Measure ohms. 
2. SOURCE function keys:
   - “V” Source voltage (V-source).
   - “I” Source current (I-source).
   - “˄” Increase source or compliance value.
   - “˅” Decrease source or compliance value. 
3. Operation keys:
   - “EDIT” Select source or compliance reading for editing.
   - “TOGGLE” Toggle display positions of source and measure readings, or display V and I measurements.
   - “LOCAL” Cancel remote operation.
   - “REL” Enable/disable relative reading on present function.
   - “FILTER” Display digital filter status for present function and toggle filter on/off.
   - “LIMIT” Perform configured limit tests.
   - “TRIG” Trigger a measurement from the front panel.
   - “SWEEP” Start configured sweep.
   - “<” And “>” Move through parameter values or selections within functions and operations.
   - “DIGITS” Change number of digits of display resolution.
   - “SPEED” Change measurement speed by selecting accuracy or specifying NPLC.
   - “STORE” Set buffer size and enable reading storage.
   - “RECALL” Display stored readings and timestamp.
   - “CONFIG” Press CONFIG and then appropriate key to configure function or operation.
   - “MENU” Access and configure Main Menu selections. When entering numeric data, use to clear reading to minimum absolute value.
   - “EXIT” Cancels selection. Use to back out of menu structures.
   - “ENTER” Accepts selection.
4. RANGE keys:
   - “˄” Moves to next higher range, increments digit, moves to next selection.
   - “˅” Moves to next lower range, decrements digit, moves to previous selection.
   - “AUTO” Enables or disables measurement auto range.
5. Annunciators:
   - “EDIT” Instrument in edit mode.
   - “ERR” Questionable reading, invalid cal step.
   - “REM” Instrument in GPIB remote mode.
   - “TALK” Instrument addressed to talk over GPIB.
   - “LSTN” Instrument addressed to listen over GPIB.
   - “SRQ” Service request over GPIB.
   - “REAR” On = Remote PreAmp not connected. Off = Remote PreAmp connected.
   - “REL” Relative measure reading displayed.
   - “FILT” Digital filter enabled.
   - “MATH” Math function enabled.
   - “4W” Remove sensing enables.
   - “AUTO” Autoranging enabled.
   - “ARM” Source-measure operations being performed.
   - “TRIG” External trigger source selected.
   - “*” Reading being stored.
6. Source Control:
   - “ON/OFF” Turns the source on or off.
7. Handle:
   - Pull out and rotate to desired position.

### Rear Panel Overview
~~**/////////////////////////////////Add Pic of Rear Panel**~~

- High voltage differentials exceeding the high voltage differentials (42V peak and 250V peak) could damage the instrument and create a shock hazard.
- Remote PreAmp connector: Connect the Remote PreAmp to the mainframe using the supplied preamp cable (CA-176-1D).
- Interlock and digital input/output port: Male DB-9 connector for digital output lines, interlock, and component handler signals.
- Power module: Contains the AC line receptacle and the power line fuse.
- Trigger link connector: 8-pin micro-DIN connector for sending and receiving trigger pulses. Use a trigger link cable or adapter, such as Models 8501-1, 8501-2, 8502, or 8504.
- RS-232 Connector: Connector for RS-232 remove operation. Use a straight through (not null modem) DB-9 cable such as Keithley Model 7009-5.
- GPIB connector (IEEE-488 interface): Connector for GPIB remove operation. Use a shielded cable such as Model 7007-1 or 7007-2.

## Setup
### Cable Setup:
- Verify that the line voltage is in the range of 85 to 250V at a frequency of 50 or 60Hz. The SourceMeter can also operator at 400Hz however, accuracy specs are not guaranteed at this power frequency.
- Power must be off when connecting the Remote PreAmp to the mainframe. 
- Make sure that the DUTs are disconnected from the SourceMeter before powering up the instrument.

## Operation
### Power-up Sequence:
Once this instrument is powered up it will perform self-tests on its EPROM and RAM. If any kind of failure is detected it will display an error message; please refer to Appendix B in the manual if any error messages are displayed and correct the issue before operating this piece of equipment.

### Source-Measure Operation:
#### Source voltage – Display current and/or voltage measurement
The V-Source can output voltage from +/- 5µV to +/- 210V and limit crrent from 1fA to 105mA. The V-Meter can measure voltage from +/- 1 µV to +/- 211V. The V-Source and V-Meter each have four ranges; 200mV, 2V, 20V, ande 200V.
#### Source current – Display voltage and/or current measurement
With the Remote PreAmp, the I-Source can output current form +/- 0.5fA to +/- 105mA and limit voltage from 200µV to 210V. The I-Meter can measure current from +/- 10aA to +/- 105.5mA. The I-Source and I-Meter each have 12 ranges; 1pA, 10pA, 100pA, 1nA, 10nA, 100nA, 1 µA, 10 µA, 100µA, 1mA, 10mA, and 100mA. Without the Remote PreAmp, the 1pA, 10pA, 100pA, 1nA, 10nA, and 100nA ranges are not available.
#### Measure resistance – Display voltage or current component of measurement

#### Measure only (V or I) – Display voltage or current measurement


## Shutdown
1. Turn off the OUTPUT then power down the instrument.
1. Remove the Remote PreAmp from the mainframe.

## Cleanup
1. Remove the banana jacks from the item under test.
1. Remove any additional wires from the item under test and the SourceMeter.
1. Clean up your workstation.

# Tips and Tricks
- “Managers Only: there are fuses inside this piece of equipment. If a fuse is blown, make sure that the replacement is the same type and rating to protect against equipment damage and fire hazards.
- Managers Only: to clean, use a damp cloth or mild, water based cleaner. Clean the exterior of the instrument only. Do not apply cleaner directly to the instrument or allow liquids to enter or spill on the instrument.”
