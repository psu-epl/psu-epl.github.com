---
title: Q250 Scanning Probe Microscope
layout: doc
author: Jennifer Jordan
date: 21st August 2019
---

## Table of Contents
{:.no_toc}
* ToC
{:toc}

# About this Machine
This machine is a Quesant Q250 Atomic Force Microscope. Unless you know about scanning probe microscopy **Please read up on the basics of what this scanner can do [here](/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/index).**

Applications Include:
- Investigations on thin films
- Investigations on biological samples
- Studies on holograms
- Investigations on polymers
- Investigations on metal surfaces
- Characterization of semiconductor surfaces
- Studies on dielectrics surfaces
- Investigations on semiconductor quantum dots

Functions Include:
- Basic Operation: Contact Imaging
- Intermittent Contact Imaging
- Surface Force Measurements
- Lateral Force Imaging
- Phase Imaging
- Magnetic Force Microscopy
- Electric Force Microscopy

<img src="/images/ETL_AtomicForce.jpg" width="400">

## Useful Links
- Quesant was bought by Ambios Tech which which is currently owned by [KLA-Tencor](https://www.kla-tencor.com), all three companies have misc resources on this microscope. However, support for this model is discontinued. 
- You can find the manual [here](/doc/equip/testing/ETL/atomic-force-microscope/QScope-Manual.pdf).
- You can find the features, technical data, and specifications [here](/doc/equip/testing/ETL/atomic-force-microscope/Q250.pdf).

## Machine Safety
For your *personal safety* read the following:
- This microscope is placed on a suspended slab of granite. The granite and microscope must remain balanced. The granite slab is very heavy, do not move the microscope or the table it is on!
- Moving this microscope and/or the table can cause failed suspension of the instrument which can result in instrument damage and personal injury.

For *machine safety* read the following, keep in mind that if you don’t follow the safety you could damage parts that are **VERY EXPENSIVE** to repair:
- The probe holder at the front of the scanner is mounted at the end of a 7 cm long, thin-walled piezoelectric scan tube which is very fragile. Even a minor bump which does not cause a visible crack may cause microscopic damage to the piezo material, and because the piezoelectric phenomenon itself is fundamentally microscopic in origin, this will degrade the performance of the scanner.
- Whenever the scanner is removed from the microscope stage be sure to protect the scan tube by placing the tip protector on the end of the scanner.
- Always plug and unplug system’s electronic cables with the EIU power switched off. Some of the electronic components are susceptible to damage if the cables are plugged or unplugged when the EIU power is on.

## How to Get Help
When using the machine software, if you find that you have a question about the function of a particular control in a particular window just press the F1 keyboard button and the help file will appear with information pertaining to the controls in the window. The online help file is complimentary to the manual. Some information found in the help file is not found in the manual, and vice-versa.

Also ask a Manager if you have any further questions not found in the Manual or the Help File.

# Using this Machine
These sections describe the standard usage and common pitfalls.

## Setup
To set up the system perform the following procedures, 
1. **Location Considerations**: The SPM is a delicate instrument. It is sensitive to vibrations, acoustical noise, air currents, and temperature changes. Successful results with your instrument will depend in part on the extent to which it can be isolated from these environmental effects.
	- Vibration and Noise: This microscope is placed on a granite slab. Be sure be careful when placing your project on the microscope as the slab can flip which will damage the machine and cause injury.
	- Air Currents and Temperature Fluctuation: There is a cover on the microscope. Be sure to keep the cover closed when operating.
	- The AVIC Option: This microscope is placed within the AVIC (Acoustic and Vibration Isolation Chamber); from air currents, acoustic noise, and mechanical vibrations. The AVIC is a fiberglass chamber lined with one-inch acoustic damping foam, having a transparent access door at the front for changing samples and making scanner adjustments. A passive mechanical spring system (granite slab) inside the chamber isolates the SPM from external mechanical vibrations. 

2. **Assembly**: As you can see in the diagram below the components in the work area are set up as follows,

<img src="/doc/equip/testing/ETL/atomic-force-microscope/img/2-1.jpg" width="400">

3. **Cable Connections**: A cable wiring diagram for the system is shown below followed by additional notes concerning the cabling. This should be all set up before you use the microscope, verify with a manager if you have any connection issues.

<img src="/doc/equip/testing/ETL/atomic-force-microscope/img/2-6.jpg" width="400">

- Power: A 120 volt AC Power Control Module is supplied with all systems shipped to countries with 120V power lines. For all other countries the user will need to obtain the power control module separately.
- Computer Peripherals: Connect the mouse, keyboard, and monitor to the computer following the instructions provided by the computer manufacturer.
- Stage Electronics to Translation Stage: The MiniStage motorized translation stage is an option for the Q-250. If you have this option, the stage electronics connections will be to the X and Y motors on the MiniStage. For Q-400 systems the stage electronics connections will be to the R and θ motors.
- Camera to Stage Electronics and Computer: Underneath the video camera housing are two connectors: a power input jack and a video output socket. Connect the camera’s RCA-style video output receptacle to the video input of the video card in the computer. An adapter may be necessary between the RCA cable and the video card (this will be included with your system). Connect the camera’s power jack to the Mini-DIN receptacle in the upper-left corner of the Stage Electronics box.

### Software
**Software Installation**: If you wish to transfer the operation of your microscope to another computer you will have to install all the interface software for Ambios’s DSP control card and the WinTV video camera card. The full process of installing the software is outlined below. Note: The order of theses steps should not be altered. In particular, do not install the DSP card before the WinTV card is successfully installed.
- Install the WinTV video camera card first. Instructions are provided in the manufacturer’s booklet.
- After the WinTV card has been installed shut down the computer. Insert Ambios’s DSP card into an available PCI slot. Fasten the card in place. Connect the 37-pin ribbon cable from the EIU to the card.
- Turn on the PC. The Windows operating system will generate a message box indicating that it has detected new hardware (the DSP card) and it will request the driver software for the new hardware. This is located in the PciDsp folder of the installation disk.

Note: There are separate subfolder for the different versions of Windows: folder Win9xME is for Windows 95, 98, or ME; folder WinXP is for the XP operating system, etc. Follow the instructions given by the ReadMe.doc file within the subfolder that matches your operating system.

Note: Do not select the hardware installation option to have Windows automatically search for the best driver for the DSP card. Windows invariably selects the wrong driver and fails to do the installation correctly.
- Execute the ScanAtomic automatic installation program autorun.exe, as outlined in Section 2.5.1.
- Restart the computer so that the DSP interface software will be registered into the Windows operating system.
- Check the computer monitor display settings. The graphics must be set to a resolution of 1024x768, 16-bit color.
- Turn on the EIU. Run the ScanAtomic SPM control software. Because this will be the first time the software is executed on this machine, message boxes will be displayed indicating that there is no calibration data for the scanner. Click ‘yes’ to these messages to save the default calibration data being created.
- Setup the hardware configuration parameter as explained in Section 2.5.5.
The software should now be fully capable of controlling the microscope hardware. A simple test to find if all is well is to press the Withdraw toolbar button and see if the scanner retracts a short distance.

Note: The Q-port data analysis program must be registered with Ambios before it will be enabled. Instructions for registering Q-port will be given when the program is started.


**Software Upgrade**: To reinstall or upgrade the software use the CD backup copy of the software package in the ETL. The contents of the CD (excluding optional RCP source code) are as follows:
- A compressed file containing the ScanAtomic software to operate the microscope and the Q-port software for data analysis. <ScanAtomic.cab>
- A general library of SPM images. < Image_Library>
- A utility folder containing software to manually install the Q-Scope’s DSP interface software. <PciDsp>
- An automated program for installing the ScanAtomic software onto a PC running the Microsoft Windows operating system. <autorun.exe>
- A copy of the operator’s manual in .pdf format.

Insert the CD into the drive and let the automated installation program guide you through the process. If the automated installation program does not start by itself it can be manually initiated by double clicking on the autorun.exe file icon.

It is strongly recommended that you install the software into a new folder, leaving the original SPM software installation intact as a backup in case something goes wrong in the new installation. This also helps you avoid the additional work required to perform a complete recalibration of your microscope from scratch. Simply copy the spm.ini file from your old installation folder into the new installation folder and the calibration will be recovered.

During the installation sequence it is normal to see several dialog boxes notifying you that an older file is about to be written in place of a newer file. This typically happens for one or more of the following files: comctl32.ocx, dao2535.tlb, wintvacc.dll, hcwwintv.ocx, wtvcap.ocx, and chsuite.ocx. Unless you are instructed to do otherwise, always select the option “keep the current version” at the dialog box notification.

## Operation
Below are the outlines for the three main operations. Since each have several steps they are broken into their own pages, you will still need to follow the shutdown and cleanup steps following the operation.

### [Basic Operation: Contact Imaging](/doc/equip/testing/ETL/atomic-force-microscope/basic/index)
- Powering up the System
- Selecting a Probe
- Installing a Probe
- Viewing the Probe in the Camera Window
- Aligning the Laser Optics
- Setting the Scan Parameters
- Engaging the Probe with the Sample Surface
- Scanning the Sample
- Broadband Imaging

### [Intermittent Contact Imaging](/doc/equip/testing/ETL/atomic-force-microscope/intermittent/index)
- Overview
- Installing a Probe 
- Viewing the Probe in the Camera Window
- Aligning the Laser Optics
- Setting the Scan Parameters for Wavemode Imaging
- Setting the Amplitude and Frequency of Vibration
- Lowering the Probe to the Sample Surface
- Scanning the Sample in Wavemode
- BB Wavemode Imaging

### [Motor Control, Camera View](/doc/equip/testing/ETL/atomic-force-microscope/motorcontrol/index)

## Shutdown
In Progress

## Cleanup
In Progress

# Tips and Tricks
In Progress

## More about Scanning
In Progress

## Working with Images
In Progress

## Image Analysis
In Progress

## Standard System Calibration
In Progress

## Troubleshooting
In Progress
