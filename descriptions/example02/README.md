Example 02
===========

In this example I'm considering two sensors:
* Temperature Sensor able to measure the temperature (currently I'm supposing only air temperature) and gives the measurement in Celsius degrees using a RESTful service '@GET /sensor/temperature';
* Humidity Sensor able to measure the percentage of air humidity through a RESTful service '@GET /sensor/humidity';

The goal is to obtain the percentage of air humidity.

The EYE Reasoner selects the correct RESTful service (i.e. '@GET /sensor/humidity' of humidity sensor) and ignores the temperature sensor.
