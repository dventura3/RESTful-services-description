#! /bin/bash

echo ">>>>>>>>>>>>>>>>>> PART 1"

eye smartTV/*.n3 dvd_recorder/*.n3 preference_part1.n3 --query goal_part1.n3 

echo ">>>>>>>>>>>>>>>>>> PART 2"

eye smartTV/*.n3 dvd_recorder/*.n3 preference_part2.n3 --query goal_part2.n3 