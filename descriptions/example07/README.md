Example 07
==========

In this example I'm considering 4 objects:

* Sensor of temperature that implements @GET request to obtain the current temperature valure observed (in the environment).
* Air Conditioner that implements a @PUT request to set the desidered temperature to reach. In this example we suppose that the air conditioner is composed only by a physical actuator and so it is not able to get the current temperature in a room (no get service is available).
* Lamp that implements a @GET to obtain the current on/off state and @PUT to switch on/off it.
* RGB-Lamp that implements four @GET, one to obtain all the current settings, one to obtain the current on/off state, one to obtain the current light intensity level, one to obtain the current color of light; and three @PUT to set these states according to user's preference.

The goal is to satisfy this rule: "If the temperature is < 20, Then temperature = 30 & color light = BLUE". To reach this goal, I have truncated the goal in a trigger (If...) and two actions (Then...and).
To execute the whole rule, run "run.sh" file.

The reasoner selects the corrects 3 objects able to reach trigger and actions of goal.

A big effort was put into using ontologies already existing. In other words, It has been avoided to create new ontology to describe RESTful services exposed by all different objects.
