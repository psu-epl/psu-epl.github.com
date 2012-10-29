# Mojo 3D Printer Standard Operating Procedures
## Preparing model to print
1.	Open the “Mojo Print Wizard”
 1.	Start->All Programs->Mojo->Print Wizard
2.	Select part in pop-up file explorer
3.	Verify STL units matches expected
4.	Verify part is the correct size, and adjust scale if necessary
 1.	Check dimensions displayed above the “Orient Part” button
 2.	Make sure the size of the part in the 3D view looks correct relative to the print bed
5.	Orient part as desired.
6.	Select desired support structure
 a.	Default of “Sparse” is typically sufficient?
## Printing
1.	Hit “Print” in the Print Wizard
 a.	Print Wizard will prepare the job by slicing the parts into layers, generating support structure, and computing the tool path that will guide the print heads.
 b.	Print Wizard will display a summary of the model and support material used and the estimated print time.
 c.	Record the model and support material used to determine the cost of the print job.
  i.	Compute the cost as $X * ModelMaterialInCubicInches + $Y * SupportMaterialInCubicInches
 d.	Note: Your job is not printing yet!  It has only been queued up.
2.	 Open the “Mojo Control Panel”
 a.	Start-> All Programs->Mojo->Mojo Control Panel
3.	If your part is not displayed, and the printer is not currently printing another job, click the “Select part” button and select your part.
4.	Verify there is enough model and support material left to complete your job
 a.	The model and support material bar graphs should be green
5.	Load build raft into printer
 a.	Align clips on bottom of raft with holes in metal build platform and push into printer until the raft clicks into place
 b.	Raft front edge should be flush with metal build platform
6.	Click the “Print” button in the Mojo Control Panel
 a.	Printer will spend a few minutes preparing to print:
  i.	Heats up the build chamber
  ii.	Cleans model material print head
  iii.	Raises build platform to print heads
  iv.	Touches the build raft in multiple places to calibrate height
  v.	Cleans model material print head again
 b.	Printer begins printing
  i.	Lays down 5 layers of model material to stick parts to the build raft
  ii.	Cleans support material print head
  iii.	Lays down 4 layers of support material to allow for easy separation of part from build raft
  iv.	Prints part using model material and support material, while cleaning the heads periodically

## Tips

### Model preparation

#### Printing orientation -- Considerations for how to orient your model on the print bed:
 1.	Optimize orientation to reduce required support material
 2.	Optimize orientation for strength
   1.	X-Y axis (parallel to the print bed) strength will be higher than Z-axis strength.  This is because the Z-axis strength depends on the adhesion between separate layers.
   2.	The z-axis adhesion of the ABS-Plus material has been significantly better than achieved from hobby-grade printers, and better from professional printers using standard ABS 
 3.	Optimize orientation to fit parts on bed, if printing multiple copies or multiple parts
  1.	Note:  Adding a 2nd copy by opening the same part again will allow different orientations, which may allow for better bed space utilization
  2.	It is not possible to nest parts – parts are automatically fitted based on a rectangular bounding box
  3.	It is not possible to stack parts – all parts are automatically positioned on the bed surface