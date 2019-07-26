---
title: Keithley 228A Voltage/Current Source
layout: doc
author: Jennifer Jordan
date: 25 July 2019

---

# SOP UNDER CONSTRUCTION

# About this Machine
The model 228 Voltage/Current Source is both a constant voltage and constant Current source with front panel and IEEE operation. The model 228 can be used as a constant Voltage Source or a constant Current source. It has four quadrant operation. This means that the voltage or current sources can operate as a source or a sink in either positive or negative polarities. Full power capability of 1OOW may be obtained in any quadrant.

Parameter entry is done in one of two ways. Either using the data keypad to enter the desired value into the display or using the display modify function. The display modify function allows the user to modify either display by selecting a digit of the display and incrementing or decrementing that digit with the appropriate keys. With the carry, borrow and autorepeat capability, front panel operation is flexible and easy to program. The user selects the range with the decimal point.

The model 228 has a 100 point data memory that allows the user to store up to 100 unique values of current, voltage and dwell time for future use. Once a particular level is stored in the data memory, the user need not reprogram that level.

The output terminals are located on a quick disconnect board that inserts into the rear panel of the mainframe. The output is disconnected from the quick disconnect board when it is removed from the mainframe. 

## Useful Links
- [manufacturer website](https://notanactualaddress.foo)
- You can find the manual [here](manual.pdf).
- more links to manufacturer docs, calculators, outside tutorials, etc.  
It's preferred that critical documents like manuals, TDSs, and MSDSs be kept in the repo when possible/allowed.
Markdown contains a feature to define a bunch of named links at the bottom of your document.
This can make it easier to create your "useful links" list and to refer to them throughout the document.

## Machine Safety
Include notes about possible hazards and the necessary procedures and equipment to avoid them.
Make it clear that the user is responsible for their own safety 
and that of the people around them while using this tool.

## How to Get Help
Include a list of which documents, websites, people, or mailing lists should be consulted in case of problems.

# Using this Machine
These sections describe the standard usage and common pitfalls.

## Setup
The model 228 includes the following features: 
- Six ranges that allow a wide variety of voltage/current values.  
- Seven front panel programs. 

The programs include: 
- Program 1 Copy for duplicating memory location information. 
- Program 2 Sink for sink only operation. 
- Program 3 IEEE for changing IEEE primary address. 
- Program 4 MOD V for modulating output voltage. 
- Program 5 MOD 1 for modulating output current. 
- Program 6 Test for model 228 self test. 
- Program 9 Reset for resetting the model 228 to factory set values.

Dual displays for easy reference of the instrument’s status. The left display has two display modes (voltage and memory step). The right display also has two display modes amps and seconds).  

Two methods of modifying the source or sink value: Data entry from the data keypad, and increment or decrement of displayed valued using the decade keys.  

100 point data memory to store up to 100 unique values of voltage, current and dwell time. Each location also includes:  sink mode status and voltage current modulation status. All information stored in a memory location is battery backed up. This means that if the instrument is powered down, the stored information (voltage, current and dwell time parameters) remains in a particular location until changed by the user. 

## Operation
There is a switch that places the output in either the operate mode (displayed value is present at output) or in the standby mode (output is programmed to approximately zero).

Compliance status is easy to read on the front panel compliance graph. The graph shows the user at a glance how the model 228 is operating (source or sink polarity and voltage or current compliance).

IEEE-488 bus operation is standard. This enables the Model 228 to be incorporated into a system that uses programmed control over the IEEE-488 bus.

Single step, single cycle and continuous memory modes control the sequence between data points in the 100 point data memory. The program mode may be controlled in one of three ways; using the front panel START/STOP key, the external trigger pulse or by commands over the IEEE-488 bus.

Output terminals are located on the quick disconnect board for optimum safety. The output terminals, the sense terminals, current monitor terminals and the external modulation terminals are also located on the quick disconnect board. Several quick disconnect boards may be wired with their own unique wiring ‘configuration. When one configuration is required, simply insert into the mainframe. In this way, cumbersome rewiring of one board is avoided.

Remote and Local Sensing. This allows the user to sense at the output terminals or at the load or source. Remote sensing compensates for the effects of the l*R lead drop by maintaining regulation at the load instead of at the output terminals of the model 228.

Four Quadrant Operation. This means that the voltage or current outputs can operate as a source or a load in either positive or negative polarities. The front panel compliance graph shows the user where the model 228 is operating (source or sink).

## Shutdown
Explain how to safely shut down the machine.

## Cleanup
Explain how to reset the work station for the next user.

# Tips and Tricks
List some sections describing advaned techniques. 
