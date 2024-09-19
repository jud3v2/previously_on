#!/bin/bash

# check directory and ensure we are in frontend folder
cd ./frontend

# check if npm or pnpm is installed
npm -v

# install pnpm
npm install -g pnpm

# check if pnpm is installed
pnpm -v

# install dependencies
pnpm install

# build the app
pnpm run build

# start the app
pnpm preview