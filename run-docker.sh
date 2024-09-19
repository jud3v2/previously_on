#!/bin/bash

# check directory and ensure we are in frontend folder
cd ./frontend

# check if docker is installed
docker -v

# build the docker image
docker image build -t previously_on .

# run the docker image
docker run -p 4173:4173 previously_on