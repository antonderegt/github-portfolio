# Vue.js Template

## Docker setup

### Development
Build the image with this command:
```
docker build -f Dockerfile.dev -t image-name .
```

Run the container with this command:
```
docker run --name container-name -v ${PWD}:/app -p 8080:8080 image-name
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
