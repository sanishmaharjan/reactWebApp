## Simple React web application
> This is sample reactJs application for beginner..

### Demo Url
- https://mjsanish-webapp.herokuapp.com/#/

### Travis CI
- https://travis-ci.org/sanishmaharjan/reactWebApp

## Development
#### Local Setup Instructions
1. Clone repository
```bash
$ git clone git@github.com:sanishmaharjan/reactWebApp.git
```

2. Move into the owa directory
```bash
$ cd reactWebApp
```

3. Install yarn if not installed in your system
```bash
$ npm install --g yarn
```

4. Install the dependencies
```bash
$ yarn install
```

5. Build & compile code
```bash
$ yarn webpack
$ yarn build-webpack #webpack with Compress for production 
```
6. Run node server
```
$ yarn dev
$ yarn start #webpack and run node server
```

7. [Browse Application](http://localhost:8080)

5. For Testing 
```bash
$ yarn test
$ yarn test-watch  #if you want run test in watch mode
$ yarn test-coverage #view test coverage
```