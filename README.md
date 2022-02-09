# CalcuCo

Calcuco it's an online calculator, providing with its first version (1.0.0)
basic mathematical operations addition, subtraction, multiplication, division, Sqrt and Power

## Prerequisites
1- Install latest version of [Nodejs](https://nodejs.org) (we used 16.13.2).

2- Install the latest version of [Typescript](https://www.typescriptlang.org/) globally.
```bash
npm i -g typescript
```
3- Install Typescript Node Package gobally 
```bash
npm install -g ts-node
```

Clone Calcuco repo to your machine and open the terminal inside it.

## Run The Backend
Backend built with Nodejs, Express Js, Typescript.
```bash
cd api

# returns install backend npm packages
npm i

# returns run backend server
npm run dev
```
Now backend it's running on http://localhost:4000.

You can  find documentation of endpoints on http://localhost:4000/documentation which is powered with [Swagger](https://swagger.io/)
## Run The Frontend
Frontend build with NuxtJs framework.
```bash
# change directory to front-end app
cd app
# install frontend npm packages
npm i 
# run 
npm run dev
```
Frontend app now running on http://localhost:3000

## Dockerizing
Prerequisites

[Docker](https://docs.docker.com/get-started/) must be installed on your machine and you have created an  account on [Docker Hub](https://hub.docker.com/)

inside app folder run the following commands to build  docker image and run container for frontend
```
docker build -t calcuco .
docker run -it -p 3000:3000 calcuco
```
also inside api folder run commands to build  docker image and run container for backend
```
docker build -t calcuco-api .
docker run -it -p 4000:4000 calcuco-api
```
