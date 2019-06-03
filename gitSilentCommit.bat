#!/bin/bash
message=${0}
git pull 
git add -A
git commit -am "$message"
git push