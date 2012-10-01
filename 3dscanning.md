3D scanning can be done mainly by 3 methods, which are the following
1- take a bunch of pictures of the same item at various angels OR a video and "hyper" them together with special software.
2- take a depth image via the kinect and a special software
3- use a line laser and a camera and rotate the item around and of course use a special software

The special software for the 1st method, I used the website (http://www.hypr3d.com/) because it was browser based and free! 
Of course, there are other options but most if not all require installation, which means you have to have the right machine and they are not free. There might be free software but I did not find any so far

For the 2nd method, I wrote my own code for the Kinect using Processing and OpenNI in order to capture a 3D image and export it as .STL file. But you do not have to! you can download the application called KinectToSTL. Next I used MeshLab (which is a free software that I needed to install) to reduce the size of the .STL file and apply many kinds of filtering to make it pretty! However, MeshLab crashes a lot! especially if you ask it to do a lot of filtering. NetFabb is a good alternative but I did not have the right requirements for installation. You need to have a Windows machine and good graphic card. Another software that I heard is good but have not had the chance to try (installation issues again) is ReconstructME.

For the 3rd method, there is a software called David Laserscanner and it is free and not free, not sure (installation issues again). another method is the SpinScan which I am researching and investigating its viability.

The very first attempt to perform a 3D scanning was with the Vacuum tube part, which can stack on top of each other to make a tube.
it had 3 main issues:
1- Black color
2- Shiny surface
3- small item

The black color absorb light and causes issues with the light reflection and thats why it is difficult to scan 
The shiny surfaces causes additional light to interfere in the 3D scanning and That is going to give you messed up dimensions
The small items are difficult to scan because of its fine details. Kinect is out of the question because it has 400mm Min range which means objects scanned by the connect cannot be closer (to the kinect) that 400mm and if you stay within the light, it would be difficult to capture the details from a far distance.