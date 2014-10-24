Example 03
==========

In this example I'm considering two objects (a sensor and an actuator):
* Temperature Sensor which is able to measure the temperature (currently I'm supposing only air temperature) and gives the measurement in Celsius degrees using a RESTful service '@GET /sensor/temperature';
* Air Conditioner that is composed by an actuator which applies a user preference about temperature expressed in Celsius degrees. To set this preference, it is necessary to use a RESTful service '@POST /airconditioner/actuator/temperature'.

The goal is to obtain the object able to apply a preference about a temperature value.

The EYE Reasoner selects the correct object and its RESTful service (i.e. '@POST /airconditioner/actuator/temperature') and ignores the temperature sensor.
