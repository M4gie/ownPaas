# <p align="center">OwnPass</p>

# Introduction

This project aims to deploy a temporary server from zero to run an application
using iPXE and a simple API.
This project is a set of services who work together to run an application. The user can start a server
through the API which will run a dockerized application.

## API

**[API documentation](https://documenter.getpostman.com/view/5663533/TVK8bfXM)**

### Run the API with Docker:

You need [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)

- `mv api-docker-compose.env.example api-docker-compose.env`
- `mv db-docker-compose.env.example db-docker-compose.env`
- Build docker images (OwnPassAPI) `docker-compose build`
- Run docker images (OwnPassAPI and Database) `docker-compose up -d`
- Run the database migrations: `make`
