# CalcuCo

Calcuco it's an online calculator, providing with its first version (1.0.0)
basic mathematical operations addition, subtraction, multiplication, division, Sqrt and Power

## Local Environment
1- Java version 17

2- NodeJs version 16.13.2 

2- Docker


Clone Calcuco repo to your machine and open the terminal inside it.

## Run The Backend
Backend built with spring boot . 
run backend project using  any Java IDE (Eclipse , Neatbeans ...)
Backend will run on default port of spring boot 8080, http://localhost:8080

You can  find documentation of endpoints as [postman collection](https://www.getpostman.com/collections/c2523dfa9b2ed8aba9ab)  and import it into your postman.

## Run The Frontend
Frontend built with NuxtJs framework.
```bash
# change directory to frontend app
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

inside project root folder run the following commands to build  docker images for frontend and backend
```bash
# build docker image for frontend
docker build --file=app/DockerFile  -t calcuco .
# build docker image for backend
docker build --file=api/app/DockerFile  -t calcuco-api .

```
then run docker compose using the following command

```bash

docker-compose -f docker-compose.yml up

```
