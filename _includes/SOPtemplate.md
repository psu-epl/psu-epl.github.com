---
title: Coffee Maker # If this is an SOP, the title should exactly match the name in _data/machines.yml
layout: sop # the type of page ("base", "doc", or "sop"). Most pages are "doc" or "sop".
author: Alice Barnicle, Charles Dunkirk # the contributors to the page
date: 2069-04-20 # the last time this page got a major update
numbersections: true # controls whether the section headings are numbered
---

{% include toc.md %}

A ToC is optional, but preferred for longer documents.
Simply paste the above code into the document.
See this document's source for an explanation.

{% comment %}
----- Referencing the ToC Template -----
There's a template for a ToC in the `_includes/toc.md` file.
You can insert this into a document by doing
{% include toc.md %}

----- Directly Creating a ToC -----
# Table of Contents
{:.no_toc}
* ToC
{:toc}
The `## Table of Contents` just provides a section heading (h2) for the ToC.
The `{:.no_toc}` assigns the class name `no_toc` to the header, to exclude it from the ToC.
`* Table of Contents` is a dummy unordered list for the next line to operate on.
`{:toc}` turns the previous unordered list into a ToC.
{% endcomment %}

# About this Machine
Write a short description of what this machine's good for plus its advantages, disadvantages, and quirks
If it's not automatically linked via the `sop` layout, you should include a picture of the machine like so:
![picture of the machine](images/kitten.jpg)

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
Describe how to check that the machine is okay to use.
Describe make the machine ready to use.

## Operation
Show how to actually *do the thing*.

## Shutdown
Explain how to safely shut down the machine.

## Cleanup
Explain how to reset the work station for the next user.

# Tips and Tricks
List some sections describing advaned techniques.

## How to Make Tea with this Machine

{% comment %}
# Quick Links
[]: 
[]: 
[]: 
[]: 
[]: 
[]: 
[]: 
{% endcomment %}
