---
title: What is Scanning Probe Microscopy?
layout: doc
author: Jennifer Jordan
date: 2019-08-21
---

{% include toc.md %}

The Quesant Q250 microscope uses scanning probe microscopy technology. The term ‘scanning probe microscopy’ (SPM) represents a family of surface measurement techniques. The list of acronyms for the imaging techniques which may be considered species within the SPM family is very long— STM, AFM, SCM, SFM, DFM, and so on. In the most general sense, these imaging techniques reveal information about the surface properties of materials by scanning or "rastering" the surface with a small probe. Information about the interaction of the probe with the surface is transmitted to a computer where an image of the surface is formed. This section of the manual presents a simple model of the main components found inside a scanning probe microscope and a brief introduction to how the microscope works.

## Basic Model of a Scanning Probe Microscope
<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-1.jpg" width="400">

The function of the building-block components in the image above are described below.
- The Coarse Z Movement mechanism acts as the “legs” of the instrument. It walks the probe down to the sample surface from a position several millimeters away. The Coarse Z Movement has the ability to move the probe at speeds of 100’s of microns per second to rapidly close the sample-probe gap, as well as the ability to take small slow steps with a resolution of about one-quarter of a micron to finely position the probe within the operation range of the Piezo Scanner, which is typically only a few microns.
- The Piezo Scanner is the “arm” of of the instrument. The top XY section moves the probe from side to side and the bottom Z section moves the probe up and down. The distances moved are very small, in the range of 10-10 to 10-5 meters.
- The Probe and associated Sensor Electronics form the “hand” of the instrument. This “feels” the sample surface beneath the probe when the Course Z Movement has brought the probe into surface contact. The most sensitive of the available probe types can convert changes in the probe’s position as small as the size of an atom into a measurable sensor signal change.
- The Control Electronics provide several control functions. It coordinates the xy movement of the scanner to raster the probe over the sample surface, it performs the coarse approach operation to bring the probe into surface contact, and it produces the z feedback control to allow the probe to track the vertical profile of the surface. The Control Electronics also communicate with the computer, translating the SPM operator’s instructions into hardware control sequences, and transferring the surface image data back up to the computer for processing and image presentation.

## Piezo Scanner
Because of its central role in the ‘scanning’ part of scanning probe micrososcopy, a brief overview of the principles of operation behind the piezoelectric scanner is helpful. Piezoelectric materials have the property that they can be polarized by an electric field at high temperatures, so that when a voltage is applied to the electrodes on the piezoelectric material at room temperature it can be made to expand and contract very small distances (see below). Any mechanical device of this sort is called a position transducer— a mechanical device that converts a voltage into a mechanical displacement.

<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-2.jpg" width="400">

- The basic concept of how a piezoelectric transducer works. (A) Side view of a thin rectangular plate of piezo material with electrodes on the top and bottom. (B) Applying a voltage of one polarity to the electrodes causes the plate to expand horizontally. (C) Applying a voltage of the opposite polarity causes the plate to contract horizontally.

Piezoelectric material can be formed into any shape. The shape most useful for the SPM scanner is a thin walled cylinder. Imagine taking the rectangular plate in the image above and curling it into a cylinder. As indicated in the image below, applying a voltage between the electrodes on the inside and outside surfaces of the Z cylinder will make the cylinder expand or contract axially, which would move an attached probe up or down.

The XY motion of the piezo scanner is obtained by splitting the inside and outside electrodes on the cylinder walls into quarter sections, as shown in the righthand side of the image below. By applying equal voltages to opposing electrode pairs with reversed voltage polarity, one side of the tube can be made to stretch and the other side contract. This bends the tube sideways. The sideways bend produces the x-axis motion of the probe. The y-axis motion is produced similarly with the other two pairs of electrodes on the XY piezo.

<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-3.jpg" width="400">

- Voltages applied to the piezo cylinders to generate scanner movement of the probe.

## The Probe and Sensor Electronics
Now let’s look at the ‘probe’ part of scanning probe microscopy. There are several mechanisms which can be used to sense the probe’s proximity to a surface. Two of the most common sensing mechanisms, STM and AFM, are described below as examples.

### Scanning Tunneling Microscopy (STM)
Historically, STM is the first of the modern scanning probe microscope techniques. It was invented in the early 1980’s, and its development ultimately led to the Nobel prize in physics for its inventors.

In the STM imaging technique, a small voltage is applied to the sample, typically 10-500 mV, and then a finely sharpened tip is brought close enough to the sample to produce a measurable tunneling current between the tip and the surface (see below). Ideally the tip does not actually touch the surface when the tunneling current is established. When the tip-sample separation is of order a few Angstroms the tunneling current will be of order 1 nanoampere, and this current is amplified and converted into a sensor output signal of order 1 volt.

<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-4.jpg" width="400">

The tunneling sensing mechanism is extremely sensitive. The sensor signal changes by about a factor of 10 for every Angstrom change in the vertical height of the probe, giving the STM imaging technique an extremely high position sensitivity. Atomic-scale resolution is readily obtained in this way.

STM is not an all-purpose imaging technique, however. It has the serious disadvantage of requiring the probe and the surface to be electrical conductors, and these surfaces must be very clean, free of oxides and other contaminants. These restrictions make STM unsuitable for general purpose in-air laboratory imaging requirements.


### Atomic Force Microscopy (AFM)
The AFM imaging technique uses a microfabricated cantilever with a small sharp point protruding from its underside. The position of the probe point is measured via the deflection of a laser beam which is reflected off of the back side of the cantilever (see below). 

<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-5.jpg" width="400">

As the cantilever moves up and down the position of the laser spot on a split-diode photodetector changes, producing top T and bottom B photocurrents in the top and bottom diodes. The difference in these currents, T-B, indicates how much the cantilever bends. 

<img src="/doc/equip/testing/ETL/atomic-force-microscope/whatisspm/1-5a.jpg" width="400">

The contact mode and intermittent-contact mode AFM imaging techniques use the T-B signal in two different ways:
- Constant Contact
	- The point of the probe touches the sample surface at all times. The T-B signal is used directly to sense the probe’s position with respect to the surface via the cantilever’s deflection up and down.
- Intermittent Contact
	- The cantilever is vibrated with a small piezoelectric ‘shaker’. (This is not shown in the above image, but it would be added just above the block to which the tiny cantilever is mounted.) The cantilever is vibrated at its resonance frequency, typically of order 100 kHz, so that it obtains a vibration amplitude at the probe point end of order 100 nm. As the cantilever vibrates the T-B signal tracks the motion, oscillating at the same frequency. Thus the amplitude of T-B gives a direct measure of the amplitude of vibration of the cantilever. When the vibrating cantilever is brought next to the surface it intermittently contacts the surface on the downward stroke of its motion. This dampens the amplitude of vibration, and it is this dampening effect on T-B which is used to sense the probe’s position with respect to the surface.

### SPM Image Resolution
The ultimate limiting factor which determines the image resolution achieved with an SPM probe is the sharpness of the point.

Ideally, the probe is in the form of a very narrow angled cone, terminating with just a small cluster of atoms at the apex of the cone. The small cluster of atoms at the apex will give the probe sufficient lateral resolution to image the atomic lattice down into crevices of the surface, and scan very close to the vertical walls of step-shaped features on the surface.

In reality, the probe tip is normally not nearly so sharp, and the cone angle is not nearly so small, and these factors may compromise the quality of the image obtained. The condition of the probe point is of paramount importance in obtaining the best quality images from an SPM instrument.

### Primary and Secondary Probe-Surface Interactions
SPM sensors often have two sorts of interactions with the surface. There is always a ‘primary’ interaction, which provides information about how high the probe is with respect to the surface. This is used by the z feedback control electronics to track the surface topology. In addition to this, some probes also provide a ‘secondary’ surface interaction which allows the probe to detect other physical characteristics of the surface other than the topology. Examples of quantities which may be measured via secondary interactions include the surface magnetic structure, the surface temperature, and the elastic properties of the surface material.

## The SPM in Action
This is an overview of how an SPM works. We start with the probe far away from the sample surface (several millimeters), so there is ample room to slide the sample under the probe. Then with the Coarse Z Movement mechanism the probe is brought close enough to the surface to interact with it.

Once the Coarse Z Movement mechanism has done its job, the vertical position of the probe is controlled by the ‘z feedback control loop’, or ‘z servo loop’. The loop consists of these parts: the z section of the piezo scanner, the probe and sensor electronics, the setpoint voltage, the error voltage calculator, and the PID control circuitry. In order to understand how the z feedback control works its best to just jump in and see what one component is doing, and then follow this component’s output to the next component in the loop to see how it responds, and continue the analysis of the actions of each subsequent component in the loop until the effect returns back to the first component considered.

Let’s begin with the probe. The probe and its associated sensor electronics produce a signal that changes in a very sensitive way to changes in the z position of the probe. This signal goes into the Control Electronics where it is compared to the Setpoint Signal. The Setpoint Signal is set by the operator of the microscope. 

This control determines what physical quantity the z feedback control loop tries to hold at a constant value. For example, in STM mode it would be a certain tunneling current, in contact AFM mode it would be a certain amount of force between the cantilever point and the sample surface, in intermittent-contact AFM it would be the cantilever’s vibration amplitude.

So, the difference between what we say we want the probe state to be (Setpoint Signal) and what the probe sensor reads as the state of the probe (Sensor Signal )is the error in the feedback control (Error). The error signal goes into the ‘intelligence’ of the servo mechanism, called the PID controller. The PID controller decides how to respond to the error signal, i.e., how fast and in what direction to change its output voltage (Z Scan). For example, if at some point in time the error voltage is high, indicating the probe is too far from the surface, then the PID will slew the Z scan voltage to a more positive value to cause the z piezo to gradually expand. As the z piezo expands the probe is lowered closer to the surface, and the error signal gradually decreases, eventually reaching a value of zero. At the instant in time that the error reaches zero the PID stops changing the Z Scan voltage. The z feedback loop has reached its goal: the probe is in the state we’ve defined via the Setpoint parameter.

The action of the z feedback loop happens very rapidly, so at any instant in time the Z scan voltage has been adjusted to keep the error voltage very close to zero. An image of the surface topology is produced by rastering the probe across the surface in a series of scan lines to gradually map the profile of a square region of the surface. As this rastering takes place the z feedback circuitry continually raises and lowers the probe to track the surface with a constant sensor signal. Provided that the Z piezo expands and contracts linearly as the applied voltage changes, the Z Scan signal will be proportional to the actual vertical profile of the surface. The surface image is formed by measuring the Z Scan signal, converting it into its equivalent height by multiplying by an appropriate conversion factor (so many μm height per so many Z Scan volts), and then plotting the result as a color bitmap on the computer screen. Each pixel in the bitmap corresponds to a point in the xy raster of the probe, and the vertical height of the surface at that point is represented by an entry in the color palette, usually set up so that ‘higher’ means ‘brighter color’.
