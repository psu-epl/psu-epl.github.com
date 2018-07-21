It's absolutely **critical** you understand the capabilities and many limits of the LPKF S63 PCB router before you try and make your board on it. In fact, you'll have to design your board *differently* if you use the LPKF as opposed to commercial fabrication. So listen up.

## Differences between LPKF and Standard PCB Manufacturing

The PCBs the LPKF makes are different than manufactured PCBs in three important ways:

1. **Your traces are only isolated:** Standard PCB manufacturers use chemicals to etch away all the copper on a blank PCB you don't specify. With the LPKF, it cuts a 0.2 mm (0.008 inch) line around each of your traces, thus isolating each individual trace, but it doesn't remove the copper outside of this isolation because it takes forever and eats through the routing bits quickly. If you really need to remove copper, you should have your PCBs professionally manufactured.

2. **There is no solder mask:** Standard PCB manufacturers lay on a thin epoxy layer over the areas of your PCB that you don't want to solder. This makes soldering *much* easier, since your solder can't short to adjacent copper since it's protected by the (usually green colored) epoxy. With the LPKF, there's no solder mask, so it's very easy to make shorts to adjacent traces (usually ground) if you're not careful.

3. **There are no through hole vias:** This is the most important problem with the LPKF. Standard PCB manufacturers plate through the holes they drill so that the top and bottom layers are connected. The LPKF can't do this. This means you have to route your boards very, very differently than you regularly do.

## Making the decision between the two

You should absolutely use a PCB manufacturer if you:

- Need > 2 layers or trace/space rules less than 20/20 um (8/8 mils)
- Need solder mask.
- Need to have all of your copper removed.
- Need more than about 5 copies of your board (unless your board is very small).
- Need less than 8/8 trace/space rules.
- You already have a board designed that was made to the specs of PCB manufacturer and you haven't modified them.

You can use the LPKF if:

- You're making a simple 1- to 2-layer prototype board to test something quickly.
- You can stand to have copper everywhere.
- Your design rules are >= 200/200 um (8/8 mils).
- You've carefully thought about the lack of plated through holes.
- You don't need more than 5 copies of your board.
