#! /bin/bash

echo "############################ GENERATED ############################"
eye airconditioner/*.n3 multicolorlamp/*.n3 sensorTemperature/*.n3 ../inferences/*.n3 ../ontologies/*.n3 ../locations/house.n3 --query goal_generated.n3
