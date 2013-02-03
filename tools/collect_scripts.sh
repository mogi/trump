#!/bin/bash
rm ./collected_scripts.js
touch ./collected_scripts.js
cat ./static/common/**/*.js >> ./collected_scripts.js
cat ./static/trump/**/*.js >> ./collected_scripts.js
