#! /bin/bash

echo "############################ PART 1 ############################"
eye airconditioner/*.n3 multicolorlamp/*.n3 sensorTemperature/*.n3 ../inferences/*.n3 ../ontologies/*.n3 ../locations/house.n3 --query goal01.n3

echo "############################ PART 2 ############################"
eye airconditioner/*.n3 multicolorlamp/*.n3 sensorTemperature/*.n3 ../inferences/*.n3 ../ontologies/*.n3 preference02.n3 ../locations/house.n3 --query goal02.n3

echo "############################ PART 3 ############################"
eye airconditioner/*.n3 multicolorlamp/*.n3 sensorTemperature/*.n3 ../inferences/*.n3 ../ontologies/*.n3 preference03.n3 ../locations/house.n3 --query goal03.n3