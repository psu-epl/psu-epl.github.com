---
layout: base
title: Portland State University Electronics Prototyping Lab
---
![The EPL](/images/lab_panorama1.JPG)

The EPL is a lab for rapidly prototyping electronics projects.
It is meant for students to be able to walk in with an idea and walk out with a fully functioning prototype.

The EPL is on the lower level of the **PSU Fourth Avenue Building** (FAB) at **1900 SW 4th Avenue** in room **FAB 84-20**.
Our phone number is **503-725-2879**.

Please consider donating to the lab to help us further our growth.
We are a 501c3 and your donation is tax deductible! Email [lid@pdx.edu](mailto:lid@pdx.edu) to donate!

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
The lab is currently open to all PSU students and staff. The lab is also open to the greater Portland community members by
invitation only.

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
