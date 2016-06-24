## This fork intends to...
* Add browserify because 'Browserify lets you `require('modules')` in the browser by bundling up all of your dependencies.' - [browserify.org](http://browserify.org/). Or allows easy use of more than one javascript file.
* Use Browsersync because 'Time-saving synchronised browser testing.' - [browsersync.io](https://www.browsersync.io/) Live editing / reloading of code.
* View your sketch next to your code, no need for another window.

## p5.js Editor: a code editor designed for p5.js

The p5.js Editor is a simple coding environment designed for new programmers to get started with p5.js. It's modeled off of the Processing editor, and intended to provide a similar experience ( with some additions ).

![p5.js Editor Screenshot](http://jeremiahreichardt.github.io/p5.js-editor/screen-shot.png)

### Features
* Code editor with syntax highlighting that supports javascript, p5.js syntax, html and css.
* Creates and manages p5.js project folders
* Runs sketches inside the editor or in the browser
* Starts a local server for the user
* Provides a real logging console

### Future Plans
* Integrated p5.js documentation
* Hiding of preview panel
* Various key commands such as switching tabs, or closing current tab

### Download
To get started, [download the editor here](https://github.com/processing/p5.js-editor/releases/latest), and visit [p5js.org](http://p5js.org) for more info on p5.js.

## Development


When you're ready to get started, follow the direction below:

### Prerequisites

1. Node.js
2. Git

### Setup

1. Clone this repo: `git clone https://github.com/JeremiahReichardt/p5.js-editor`
2. Enter the repo directory and install the development modules: `npm
   install`
3. Install secondary modules: `cd public` and then `npm install`
4. Install gulp.js globally: `npm install gulp -g`
5. From the root directory of the repo run gulp: `gulp`
6. Start up the app: `npm run app`

### Workflow

Most development takes place in the `app` folder. Gulp will watch the files in the app folder, then bundle them up with Browserfiy, and send the results to the `public` folder.

The public folder contains the `package.json` for the application window, as well as the base `index.html` file for the application.

Below you'll find documentation for the different libraries we're using
* [vue.js](http://vuejs.org/)
* [nw.js](https://github.com/nwjs/nw.js/wiki)
* [browserify](http://browserify.org/)
* [gulp.js](http://gulpjs.com/)

### Building

Just run the gulp task:
`gulp build`

This will build Mac and Windows versions of the editor, and place them in `dist/`. Please note that due to an issue with file path lengths (to be fixed, evidently in the next version of npm), Mac users may run into an issue building the Windows version. To fix this install and run `flatten-packages`:

```
npm install -g flatten-packages
cd public
flatten-packages
```
And then run `gulp build` from the root directory of the project.
