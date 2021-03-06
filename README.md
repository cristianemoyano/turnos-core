[![Coverage Status](https://coveralls.io/repos/github/cristianemoyano/turnos-core/badge.svg?branch=master)](https://coveralls.io/github/cristianemoyano/turnos-core?branch=master)

[![Build Status](https://travis-ci.org/cristianemoyano/turnos-core.svg?branch=master)](https://travis-ci.org/cristianemoyano/turnos-core)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is served by Django as Server.

Thanks for this [post](https://medium.com/technest/build-a-crud-todo-app-with-django-and-react-redux-8ddb0b6ac2f0) written by Koji Mochizuki.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## Development

If you cloned the repository on your computer, initialize your local repository:

```
$ rm -rf .git
$ git init
```

Install the packages:

```
$ pipenv install
$ yarn install
```

Create a `.env` into the ./server/ folder using the example in the same folder called `.example.env`

Run migrations and start the Django dev server:

```
$ pipenv shell
$ make migrate
$ make dev
```

Open another terminal and run:

```
make front
```


Visit http://127.0.0.1:8000/ with your browser. This port will render the builded statics, so new changes won't be displayed.

Visit http://127.0.0.1:3000/ to see all changes that you made. Then you can run:

```
make compile
```

And all changes will displayed on  http://127.0.0.1:8000/


This app is also ready to be deployed on Heroku:

```
$ heroku create <app name>
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/python
$ make deploy
```

*Make sure to have installed [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cl).*

### Releases

For new releases run:

```
$ invoke release
```