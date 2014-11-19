#! /bin/bash

echo ">>>>>>>>>>>> PART 1 >>>>>>>>>>>>"

eye multicolor_lamp/*.n3 lamp/*.n3 temperature_sensor/*.n3 air_conditioner/*.n3 --query goal_part1.n3

echo ">>>>>>>>>>>> PART 2 >>>>>>>>>>>>"

eye preference_part2.n3 multicolor_lamp/*.n3 lamp/*.n3 temperature_sensor/*.n3 air_conditioner/*.n3 --query goal_part2.n3

echo ">>>>>>>>>>>> PART 3 >>>>>>>>>>>>"

eye preference_part3.n3 multicolor_lamp/*.n3 lamp/*.n3 temperature_sensor/*.n3 air_conditioner/*.n3 --query goal_part3.n3
