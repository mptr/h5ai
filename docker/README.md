# h5ai in a Docker Container

## General
- The Container runs an nginx and php service simultaneousley.  
- You can mount your custom directory into it, to be visible via web.
- The host directory used by the container will not be modified (read-only mounted)

## Illustration
Image

## Configuration
- Filepath
- Host Port  
- options.json  
&#8627; can all be configured in `docker/docker-compose.yml`

## Build
To build the Docker-Image run:
```sh
$ node ghu docker
```

## Run
First make sure you have configured the **directory** and **port** in `docker/docker-compose.yml`!

To start the Docker-Container run:
```sh
$ node ghu docker-deploy
```

## Stop
To stop the container run:
```
$ docker-compose -f docker/docker-compose down
```

## Disclaimer
Do **NOT** run the container in an orchestrator or similar supervisors.

Because a union mount is needed to keep the h5ai-files in the Container only and combine them with your custom files there may be some compatibility issues.
This happens because mounting is a kernel feature and can therefore not be fully virtualized to happen completely in the container.


