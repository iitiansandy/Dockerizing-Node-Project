## for deleting all the images in docker

```
docker system prune -a
```

## for build a docker image

```
docker build -t app-bind-mount-node .
```

## for starting docker container

```
docker run -it --init -p 3001:3001 app-bind-mount-node
```

## for automatic refreshing the container

```
docker run -it --init -p 3002:3003 -v "${pwd}:/developer/nodejs/my-server" app-bind-mount-node
```
