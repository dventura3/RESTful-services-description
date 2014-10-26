#! /bin/bash

eye TemperaturePreference.n3 temperature_sensor/knowledge_sensor.n3 temperature_sensor/get_temperature.n3 air_conditioner/knowledge_air_conditioner.n3 air_conditioner/set_temperature.n3 lamp/knowledge_lamp.n3 lamp/set_color_light.n3 --query goal.n3 > result.n3