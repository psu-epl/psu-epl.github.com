---
layout: base
title: Portland State University Electronics Prototyping Lab
---

![The EPL](/images/lab_pano_2019.png)

The EPL is a lab for rapidly prototyping electronics projects.
It is meant for students to be able to walk in with an idea and walk out with a fully functioning prototype.

The EPL is on the lower level of the **PSU Fourth Avenue Building** (FAB) at **1900 SW 4th Avenue** in room **FAB 84-20**.
Our phone number is **503-725-2879**.

[Checkout]
Pay for things here including all of your Lab kits, Analog Discovery 2, and Toolboxes.

Please consider donating to the lab to help us further our growth.
We are a 501c3 and your donation is tax deductible! Email [lid@pdx.edu](mailto:lid@pdx.edu) to donate!

# <font color="red">Lab Closure</font>
To help contain the further spread of the [COVID-19] virus,
the __EPL will be closed__ until PSU resumes a normal class schedule and activity on campus. 
This is expected to be until late April.

People will not be allowed into the lab, either through the main door or the PSAS door. 
__Managers will also not be allowed in the lab__. 
Anyone who violates this rule will lose continued access to the EPL.

We are sorry for the shutdown but have deemed it prudent to close down. 
Listed below are outside resources for your projects. 

**We also have a slack workspace for students to interact with our managers. You can ask questions about your projects, resources, Analog Discovery 2's, etc. Join us [here](https://eplabpsu.slack.com/archives/C1W89N8BY)**

## Online Resources
We understand that many students will still need to do prototyping. 
Here's a list of online vendors that will be able to help you complete your projects remotely, 
besides from the obvious ebay, Newegg, and Amazon.

| Site | Notes
| ---- | -----
| __Circuit Boards__ | 
| [OSH Park] | up to 4-layer PCBs, fast turnaround, 1.6 mm and 0.8 mm boards, flex boards
| [OSH Stencils] | stainless steel and polyimide stencils
| [JLCPCB] | SMT population, lots of board options, stencils
| [4PCB] | 
| __Electronic Components__ | 
| [Digikey] | good pricing, normally excellent selection (impacted by COVID-19), excellent part search
| [Mouser] | 
| __3D Parts__ | 3D printing, CNC machining, injection molding, sheet metal, instant quotes from CAD
| [Rapidmade] | local to Portland, many other services, instant quotes for 3D prints only
| [Protolabs] | high quality, kind of picky
| [3D Hubs] | cheap/popular, brokers to small shops, severely delayed shipping due to COVID-19
| [Xometry] | good 3D printing, brokered machining
| __Mechanical Components__ |
| [McMaster-Carr] | large markups, good selection, very easy to find what you need, sells components and tools
| [MSC Direct] | decent prices, very good selection, poor interface
| [Metal Supermarkets] | metal stock, cut to size, minimal processing available
| [TAP Plastics] | plastic stock, cut to size, minimal processing available, also sells tools

# Using the Labs
1. View our [Lab Equipment](/doc/equip) and read the instructions on the equipment you want to use.
1. Check the calendar for office hours.
1. Come in during those hours and get trained by a manager on the equipment you want to use.
  - Be sure you've signed a liability waiver!
1. Once you're trained on a something, you can come in during any office hours and use that equipment.
1. Pay for parts, materials, and equipment time [online][checkout].
1. When you've been trained on ALL the equipment you're eligible to become a manager.
  - This gives you 24 hour card key access, although it does come with a lot of responsibility.
  - [Click here][Become a Manager] to get started.

# Lab Calendar
This calendar tells you which managers are on-duty and when.
You can only use the lab when supervised by a manager.
{% include calendar_lab.html %}

# Documentation
Read the [**documentation**](doc) on our machines, policies, services, and more to learn about the EPL.

{%comment%}
Insert the content of the documentation page,
rather than copying it manually, which breeds discrepancies.
{%endcomment%}
{% for pagei in site.pages %}
 {% if pagei.url == '/doc/' %}
  {{ pagei.content }}
 {% endif %}
{% endfor %}



# Lab Equipment
Here is the list of equipment and its current status. Sometimes machines
break. When they do, we'll be sure to make a note of it here.
Click on a machine to jump to its documentation.

{% include machines.html %}

# Lab Status
The lab is currently __closed__ to all PSU students and staff. 
{% comment %}
The lab is also open to the greater Portland community members by invitation only.
{% endcomment %}

# Frequently Visited
Here are some links to commonly visited pages:
- [Equipment]
  The tools we have at our disposal.
- [Store Inventory][inventory]
  Stuff we sell.
- [Checkout]
  Pay for things.
- [Lab Policies]
  The rules of the EPL.
- [3D Print Your Part]
  Turn bits into atoms!
- [Workshops]
  Learn how to make things.
- [Become a Manager]
  Help other people make things!
- [Managers Only][manager repo]
  Stuff to help you be a manager.
- [Site Tree][tree]
  Everything on this website.
- [Style Guide][style]
  Learn how to maintain this website.
- [Sponsors]
  Cool people who give us money! ❤️💰

{%comment%}
# Link Aliases
{%endcomment%}

[manager repo]: https://github.com/psu-epl/epl-managers-private/wiki
[Equipment]: doc/equip
[Circuit Store and Lockers]: doc/store
[Lab Policies]: doc/policies
[RF Chamber]: doc/equip/testing/RF-Chamber
[3D Print Your Part]: doc/equip/printer
[Workshops]: https://www.eventbrite.com/o/portland-state-university-electronics-prototyping-lab-epl-11381470478
[Become a Manager]: doc/policies/Becoming-an-E.P.L.-Manager
[Sponsors]: doc/policies/Sponsors
[checkout]: https://commerce.cashnet.com/ecei
[donate]: https://cconn.foundation.pdx.edu/ccon/new_gift.do?action=newGift&giving_page_id=240
[Eventbrite]: https://www.eventbrite.com/o/portland-state-university-electronics-prototyping-lab-epl-11381470478
[inventory]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRctTWgzjjFlbtDmUZ98G7og6jb6IJ1X1vd8zwDnGen3mGZxCVO0T1Jp2Iw2ze2l4Bet2ey2GKlb9wB/pubhtml
[tree]: /siteTree
[style]: /doc/contributing
[OSH Park]: https://oshpark.com/
[OSH Stencils]: https://www.oshstencils.com/
[JLCPCB]: https://jlcpcb.com/
[4PCB]: https://www.4pcb.com/pcb-student-discount.html
[Rapidmade]: https://www.rapidmade.com/
[3D Hubs]: https://www.3dhubs.com/
[Protolabs]: https://www.protolabs.com/
[Xometry]: https://www.xometry.com/
[Digikey]: https://www.digikey.com/
[McMaster-Carr]: https://www.mcmaster.com/
[MSC Direct]: https://www.mscdirect.com/
[Metal Supermarkets]: https://ecommerce.metalsupermarkets.com/MSC-Home.aspx
[TAP Plastics]: https://www.tapplastics.com/
[Mouser]: https://www.mouser.com/
[COVID-19]: https://www.cdc.gov/coronavirus/2019-ncov/about/index.html
