Example 04
===========
In this example I'm considering three objects (a sensor and two actuators):

* Temperature Sensor which is able to measure the temperature (currently I'm supposing only air temperature) and gives the measurement in Celsius degrees using a RESTful service '@GET /sensor/temperature';
* Air Conditioner that is composed by an actuator which applies a user preference about temperature expressed in Celsius degrees. To set this preference, it is necessary to use a RESTful service '@POST /airconditioner/actuator/temperature'.
* A Multicolor lamp that is composed by an actuator which applies a user preference about the color (working color). To set this preference, it is necessary to use a RESTful service '@POST /ledRGB/light/color'.

I'm supposing that a user would like to set the temperature of a room to 30 Celsius degrees. The goal is to obtain the object able to satisfy this preference.

The EYE Reasoner selects the correct object and its RESTful service (i.e. '@POST /airconditioner/actuator/temperature') and ignores both the temperature sensor and the multicolor lamp.
