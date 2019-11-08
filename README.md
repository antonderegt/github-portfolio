# Github Portfolio

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/antonderegt/github-portfolio)
![GitHub contributors](https://img.shields.io/github/contributors/antonderegt/github-portfolio)
![GitHub stars](https://img.shields.io/github/stars/antonderegt/github-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/antonderegt/github-portfolio?style=social)
![License](https://img.shields.io/github/license/antonderegt/github-portfolio)
![Build](https://img.shields.io/circleci/build/github/antonderegt/github-portfolio/master)
![Downloads](https://img.shields.io/github/issues/antonderegt/github-portfolio)
![Commits](https://img.shields.io/github/commit-activity/y/antonderegt/github-portfolio)
![Last commit](https://img.shields.io/github/last-commit/antonderegt/github-portfolio)

Github Portfolio is an `app` that allows `stalkers` to `check out developers and their repositories`.

This app has two modes, in the first mode you can type in a Github username and it shows a few statistics of their profile. In the second mode all repositories are listed of that developer, also with a few statistics.

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `Docker or NodeJS` depending on the way you want to run/build the project.

## Installing Github Portfolio 

To install Github Portfolio follow these steps:

Any OS:
```
git clone https://github.com/antonderegt/github-portfolio.git
```

## Using Github Portfolio Docker Setup

To use Github Portfolio follow these steps:

Build the image with this command:
```
docker build -f Dockerfile.dev -t <image_name> .
```

Once the images has been build you can run the container with the following command:
```
npm run docker
```

This spins up a container with the following parameters, which you can see in the package.json.
```
docker run --rm --name ghp -d -p 8080:8080 -v ${PWD}:/app <image_name>
```

It runs on port :8080.

### Production
Build the image with this command:
```
docker build -t <image-name> .
```

Run the container with this command:
```
docker run --name <container-name> <image-name>
```

It runs on port :80.

## Using Github Portfolio Regular Setup
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

<!-- Add run commands and examples you think users will find useful. Provide an options reference for bonus points! -->

## Contributing to Github Portfolio
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to Github Portfolio follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@ghjer](https://github.com/ghjer) 📖
* [@tomdeboer](https://github.com/tomdeboer) 🐛

<!-- You might want to consider using something like the [All Contributors](https://github.com/all-contributors/all-contributors) specification and its [emoji key](https://allcontributors.org/docs/en/emoji-key). -->

## Contact

If you want to contact me you can reach me at <your_email@address.com>.

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [MIT](https://github.com/antonderegt/github-portfolio/blob/master/LICENSE).