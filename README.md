# Vue.js Template

## Docker setup

### Development
Build the image with this command:
```
docker build -f Dockerfile.dev -t ghpdev .
```

Once the images has been build you can run the container with the following command:
```
npm run docker
```

This spins up a container with the following parameters, which you can see in the package.json.
```
docker run --rm --name ghp -d -p 8080:8080 -v ${PWD}:/app ghpdev
```

It runs on port :8080.

### Production
Build the image with this command:
```
docker build -t image-name .
```

Run the container with this command:
```
docker run --name container-name image-name
```

It runs on port :80.

## Regular Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
