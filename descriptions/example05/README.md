Example 05
===========

In this example I'm considering 4 objects:
* Sensor of temperature that implements @GET request to obtain the current temperature valure observed (in the environments).
* Air Conditioner that implements @PUT request to set the desidered temperature to reach.
* Lamp that implements a @GET to obtain the current on/off state and @PUT to switch on/off it.
* RGB-Lamp that implements three @GET, one to obtain the current on/off state, one to obtain the current light intensity level, one to obtain the current color of light; and three @PUT to set these states according to user's preference.

The goal is: "If the temperature is < 20, Then temperature = 30 & color light = BLUE".
To reach this goal, I have truncated the goal in a trigger (If...) and two actions (Then...and).

The reasoner selects the corrects 3 objects able to reach trigger and actions of goal.
