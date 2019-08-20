---
title: Keithley 2182 Nanovoltmeter
layout: doc
author: Jennifer Jordan
date: 5th August 2019

---

## Table of Contents
{:.no_toc}
* ToC
{:toc}

# About this Machine
<img src="/doc/equip/testing/ETL/keithley2182/s-l600.jpg" width="400">

This instrument makes stable, low noise voltage measurements and characterizes low resistance materials and devices. There are two channels, channel 1 has a range from 1nV to 120V and channel 2 has a range from 10nV to 12V.

This SOP outlines basic voltage and temperature measurement setup and procedures.

If you need to operate this instrument at a higher level, please refer to the manual. Additional instrument operations include:

- Concurrent Voltage and Temperature measurements. (page 2-16)
- Set up procedures for calibration, autozeroing modes, line cycle synchronization, pumpout current modes and SCPI programming. (page 2-5)
- Information of Thermal EMFs and Noise. (page 2-22)
- Range, Digits, Rate, and Filter Operations. (page 3-3)
- Relative, mX+b, and Percent Operations. (page 4-3)
- Ratio and Delta Operations. (page 5-2)
- Buffer Operations. (page 6-2)
- Triggering Operations. (page 7-3)
- Limit Operations. (page 8-3)
- Stepping and Scanning. (page 9-3)
- Analog Output Operations. (page 10-3)
- Remote Operation Setup and Operation with option of using GPIB buses or RS-232. (page 11-3)
- Additional Information on common commands. (page 12-3)
- Additional Information on SCPI signal oriented measurement commands (page 13-2), SCPI Reference Tables (page 14-1), and additional SCPI Commands (15-3).
- And More.

## Useful Links
- [Manufacturer Website](https://www.tek.com/keithley)
- You can find the manual [here](/doc/equip/testing/ETL/keithley2182/2182.pdf).
- You can view the datasheet [here](/doc/equip/testing/ETL/keithley2182/KEITH_218231849.pdf)

## Machine Safety
- Exercise extreme caution when a shock hazard is present. Lethal voltage may be present on the cable connections or test fixtures. A shock hazard exists when voltage levels greater than 30V, 42.4V peak, or 60VDC are present. A good safety practice is to expect that hazardous voltage is present in any unknown circuit before measuring.
- Do not touch the circuit under test until it is removed from power. It’s good practice to discharge any capacitors and/or inductors.
- If you are using an ice bath, be sure to properly secure the receptacle to prevent spillage, damage to equipment, and electric shock.
- Do not exceed the maximum signal levels of this machine as seen [here](https://82fai3h5wg8220a0l3ilfiz1-wpengine.netdna-ssl.com/wp-content/uploads//2015/09/KEITH_218231849.pdf).

## How to Get Help
Ask a Manager if you have any questions.

# Using this Machine
## Front Panel:
<img src="/doc/equip/testing/ETL/keithley2182/frontpanel.jpg" width="400">

1. **Special keys and power switch**
- “SHIFT” Use to select a secondary function/operation.
- “LOCAL” Cancels GPIB remote mode.
- “POWER” Power switch. In is on, out is off.

2. **Function and Operation keys**

*Top Row Primary*

- “DCV1” Selects Channel 1 voltage measurement function.
- “DCV2” Selects Channel 2 voltage measurement function.
- “V1/V2” Selects Ration (Channel 1 voltage reading/Channel 2 voltage reading).
- “ACAL” Selects automatic gain calibration.
- “FILT” Enables/disables filter for selected measurement function.
- “REL” Enables/disables relative for selected measurement function.
- “TEMP1” Selects Channel 1 temperature measurement function.
- “TEMP2” Selects Channel 2 temperature measurement function.

*Top Row Secondary*

- “MX+B” Multiplies a scale factor (M) to the reading (X) and then adds an offset (B).
- “%” Calculates percent deviation from a specified reference.
- “V1-V2” Selects Delta; (V1t1-V1t2)/2.
- “LSYNC” Enables/disables line cycle synchronization. When enables, noise induced by the power line is reduced at the expense of speed.
- “TYPE” Select filter (analog and/or digital) and configure digital filter (window, count, and type).
- “OUTPUT” Enables/disables relative for Analog Output.
- “Aout” Enables/disables Analog Output.
- “TCOUPL” Configure temperature measurement (units, junction type, thermocouple type, sensor type).

*Middle Row Primary*

- “EX-TRIG” Selects external triggering (front panel, bus or trigger link) as trigger source.
- “TRIG” Triggers a measurement from the front panel.
- “STORE” Sets reading count for buffer and enables buffer.
- “RECALL” Displays stored readings (including maximum, minimum, peak-to-peak, average, and standard deviation). The “^” and “˅” range keys scroll through the buffer, and the “<” and “>” key toggles between reading number and reading.
- “VALUE” Set the upper and lower limits for limit testing.
- “ON/OFF” Enables/disables limit testing, and selects beeper mode for limit testing.
- “<” And “>” Controls cursor position for making selections or editing values.

*Middle Row Secondary*

- “DELAY” Sets user delay between trigger and measurement.
- “HOLD” Holds reading when the specified number of samples is within the selected tolerance.

*Bottom Row Primary*

- “STEP” Steps through channels; sends a trigger after each channel.
- “SCAN” Scans through channels; sends a trigger after last channel.
- “SAVE” Saves present configuration for power-on user default.
- “RESTR” Restores factory or user default configuration.
- “DIGITS” Changes number of digits of reading resolution.
- “RATE” Changes reading rate; number of power line cycles (PLC).
- “EXIT” Cancels selection, moves back to measurement display.
- “ENTER” Accepts selection, moves to next choice or back to measurement display.

*Bottom Row Secondary*

- “CONFIG” Configures a scan (type, timer, channel count, and reading count).
- “HALT” Turns off step/scan operation.
- “GPIB” Enables/disables GPIB, sets address, and selects language.
- “RS232” Enables/disables RS-232 interface, selects baud rate, flow control, and terminator.
- “CAL” Accesses calibration.
- “TEST” Tests display annunciators and front panel keys.


3. **Range Keys**


- “^” Selects the next higher voltage measurement range.
- “˅” Selects the next lower voltage measurement range.
- “AUTO” Enables/disables autorange.


4. **Display Annunciators**


- “ * ” Readings being stored in buffer.
- “↔” Indicated additional selections are available.
- “🔊” Beeper on for limit testing.
- “AUTO” Autorange enabled.
- “BUFFER” Recalling readings stored in buffer.
- “CH1” Channel 1 input displayed.
- “CH2” Channel 2 input displayed.
- “CH1 and CH2” Ration (V1/V2) reading displayed.
- “ERR” Questionable reading, or invalid cal step.
- “FAST” Fast (0.1 PLC) reading rate selected.
- “FILT” Filter enabled.
- “HOLD” Instrument in hold mode.
- “LSTN” Instrument addressed to listen over GPIB.
- “MATH” mX+b or Percent (%) calculation enabled.
- “MED” Medium (1 PLC) reading rate selected.
- “REAR” Indicated that Analog Output is on.
- “REL” Relative enabled for present measurement function.
- “REM” Instrument in GPIB remote mode.
- “SCAN” Scan mode selected.
- “SHIFT” Accessing a shifted key.
- “SLOW” Slow (5 PLC) reading rate selected.
- “SRQ” Service request over GPIB.
- “STAT” Displaying buffer statistics.
- “STEP” Step mode sele3cted.
- “TALK” Instrument addressed to talk over GPIB bus.
- “TIMER” Timer controlled scans in use.
- “TRIG” External triggering (front panel, bus, or trigger link) selected.


5. **Input Connector**


- “CHANNEL 1” Measure voltage or temperature. Volts Ranges: 10mV, 100mV, 1V, 10V, and 100V.
- “CHANNEL 2” Measure voltage or temperature. Volts Ranges: 100mV, 1V, and 10V.


6. **Handle**


- Pull out and rotate to desired position.

## Rear Panel:

<img src="/doc/equip/testing/ETL/keithley2182/rearpanel.jpg" width="400">

1. **Analog Output**: Provides a scaled non-inverting DC voltage. With analog output gain set to one, a full range input will result in a 1V analog output.
1. **Trigger Link**: Eight-pin micro-DIN connector for sending and receiving trigger pulses among connected instruments. Use a trigger link cable or adapter, such as Models 8501-1, 8501-2, 8502, and 8503.
1. **RS-232**: Connector for RS232 operation. Use a straight-through (not null modem) DB-9 shielded cable.
1. **IEEE-488**: Connector for IEEE-488 (GPIB) operation. Use a shielded cable, such as the Models 7007-1 and 7007-2.
1. **Power Module**: Contains the AC line receptacle, power line fuse, and line voltage setting. The instrument can be configured for line voltages of 100V/120V/220V/240VAC at line frequencies of 45Hz to 66Hz or 360Hz to 440Hz.

## Setup

### Cable Setup:

Before operating this instrument, make sure the line cord is connected to a properly grounded power receptacle. Inspect the connecting cables, test leads, and jumpers for possible wear, cracks, or breaks before each use.

To optimize your connections use copper-to-copper connections when possible and use silver solder on all solder connections to minimize thermal EMFs. If available, clean all connector terminals free of oxidation using a small amount of DeoxIT.

Choose your channels carefully. Remember that channel 1 voltage range is between 1nV to 120V and channel 2 voltage range is between 10nV to 12V. There should be a Model 2107 input cable already attached or near this instrument. Refer to the cable guide below to select your channels,

<img src="/doc/equip/testing/ETL/keithley2182/inputcable.jpg" width="400">

### Voltage Measurement Setup:

For single channel voltage measurement, connect the terminals as seen below. If you are only using one channel, make sure that any floating terminals/wires are properly shielded and short protected.

<img src="/doc/equip/testing/ETL/keithley2182/fig4.jpg" width="400">

For dual channel voltage measurements, connect the terminals as seen below.

<img src="/doc/equip/testing/ETL/keithley2182/fig5.jpg" width="400">

### Temperature Measurement Setup:

For temperature measurements using an internal reference, connect the terminals and your thermocouple as seen below.

<img src="/doc/equip/testing/ETL/keithley2182/fig6.jpg" width="400">

For temperature measurements using an external reference, connect the terminals, your thermocouples, and set up an ice bath as shown below.

<img src="/doc/equip/testing/ETL/keithley2182/fig7.jpg" width="400">

### Voltage Temperature Measurement Setup:

Channel 1 should be used for voltage measurements since it supports a wider range of measurements, leaving Channel 2 to measure temperature. 

For temperature measurements using an internal reference, connect the terminals and your thermocouple as seen below.

<img src="/doc/equip/testing/ETL/keithley2182/volttemp1.jpg" width="400">

For temperature measurements using an external reference, connect the terminals, your thermocouples, and set up an ice bath as shown below.

<img src="/doc/equip/testing/ETL/keithley2182/volttemp2.jpg" width="400">

## Operation

### Selecting operating modes:

Most of the front panel buttons have a dual operation or function. The label on a button indicates its primary function/operation. The label in blue above a button indicates its secondary function/operation. To select a primary function, press the button. To select a secondary function, press SHIFT first and then the desired button.

*For example, press DCV1 to select the Channel 1 voltage measurement function. Press SHIFT then MX+B to choose the mX+b function.*

<img src="/doc/equip/testing/ETL/keithley2182/front1.jpg" width="400">

### Before Measuring:

*Use the REL mode to null out any offsets.*

1. Connect your circuit as required (refer to setup), but leave the source disconnected.
1. Select DCV1 (voltage channel 1), DCV2 (voltage channel 2), TEMP1 (temperature channel 1), or TEMP2 (temperature channel 2) as appropriate.
1. Press REL to null any offsets.
1. Repeat for other channels as needed.
1. Proceed with connecting the source and making your measurements (see below).

### Measuring Voltages:

Once your circuit is all wired up (see voltage measurement setup), you can follow the procedure below,


1. *Select channel and function.* Press DCV1 to measure voltage on Channel 1. Press DCV2 to measure voltage on Channel 2.


<img src="/doc/equip/testing/ETL/keithley2182/front2.jpg" width="400">


2. *Select range.* Use RANGE Up and Down keys to manually select the range. Or you can press AUTO RANGE (AUTO annunciator on) to enable auto range.


<img src="/doc/equip/testing/ETL/keithley2182/front3.jpg" width="400">


3. *View readings.* You can observe the voltage readings on the front panel display.


<img src="/doc/equip/testing/ETL/keithley2182/front4.jpg" width="400">

### Measuring Temperatures:

Once your circuit is all wired up (see temperature measurement setup), you can follow the procedure below,


1.  *Configure temperature.* Press SHIFT then TCOUPL


<img src="/doc/equip/testing/ETL/keithley2182/front5.jpg" width="400">


2. Select your desired units to be degrees Celsius, Fahrenheit, or Kelvin (C, F, or K)


<img src="/doc/equip/testing/ETL/keithley2182/front6.jpg" width="400">
**Insert image of front panel UNITS options**


3. Select your sensor option. Typically you will want to select “TCOUPLE” to perform temperature measurements at the thermocouple. If you want to measure the internal temperature of the 2182 instrument select “INTERNL”.


<img src="/doc/equip/testing/ETL/keithley2182/front7.jpg" width="400">
**Insert image of front panel SENS options**


4. Select your TYPE. You will have the options, J, K, T, E, R, S, B, and N. This is the thermocouple type that you are using to measure the temperature. For more information on thermocouple types check out the Wikipedia article [here](https://en.wikipedia.org/wiki/Thermocouple) or view [this](http://1oomzzme3s617r8yzr8qutjk-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/WHTH_FAQ_Thermocouples_Pt1_Fig2.jpg) helpful chart.


<img src="/doc/equip/testing/ETL/keithley2182/front8.jpg" width="400">
**Insert image of front panel TYPE options.**


5. Select your junction. This is referring to which of the two setups you are using to measure temperature. If you are using the internal reference junction (the first setup), you will want to select “INTERNL. If you are using the external reference junction (the second setup), you will want to select “SIM”. If you select “SIM” you will be prompted to enter the simulated reference temperature (i.e. the temperature of the ice bath).


<img src="/doc/equip/testing/ETL/keithley2182/front9.jpg" width="400">
**Insert image of front panel JUNC options.**


6. *Select your channel and function.* Press TEMP1 to measure the temperature on Channel 1. Press TEMP2 to measure temperature on Channel 2.


<img src="/doc/equip/testing/ETL/keithley2182/front10.jpg" width="400">


7. *View Readings.* You can observe the temperature readings on the front panel display.


<img src="/doc/equip/testing/ETL/keithley2182/front11.jpg" width="400">

## Shutdown
- Once you have completed your measurements turn off your voltage source or remove your source for temperature measurement.
- Turn off the NanoVoltmeter.

## Cleanup
- Remove the terminals from your item under test.
- Remove any additional wires from your item under test.
- Clean up your workstation.
- If you set up an ice bath for your test, please be careful in removing and disposing of the liquid. Make sure you don’t spill or damage any equipment while cleaning up.

# Tips and Tricks
- Manager’s Only: there are fuses inside this piece of equipment. If a fuse is blown, make sure that the replacement is the same type and rating to protect against equipment damage and fire hazards.
- Manager’s Only: to clean, use a damp cloth or mild, water based cleaner. Clean the exterior of the instrument only. Do not apply cleaner directly to the instrument or allow liquids to enter or spill on the instrument.
