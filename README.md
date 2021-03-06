# generator-x-tag-generator [![Build Status](https://secure.travis-ci.org/pennyfx/generator-x-tag-generator.png?branch=master)](https://travis-ci.org/pennyfx/generator-x-tag-generator)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### About

X-Tag Generator sets up the basic folder structure and files for a new web component.  We included some useful Grunt commands that will aid in routine tasks like building, testing and pushing your component.

The main source files are in `./src/`.  The `./demo/` folder contains an html scaffold for testing the development of your component.

### Install Yeoman

```
$ npm install -g yo
```

### Install X-Tag Component Generator

To install generator-x-tag-generator from npm, run:

```
$ npm install -g generator-x-tag-generator
```

Create a directory for your new X-Tag:

```
$ mkdir [your-component-name] && cd [your-component-name]
```

Finally, initiate the generator:

```
$ yo x-tag-generator
```

Your component needs the latest X-Tag Core library, which can be installed by running:

```
$ bower install && grunt build
```

### File Structure

The basic structure of the project is given in the following way.

```
.

├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── bower.json
├── package.json
├── xtag.json
├── Gruntfile.js
├── README.md
├── demo/index.html
├── src/my-element.js
└── src/my-element.css
```

### Share

Once you've completed your component, don't forget to share it.

```
$ bower register x-tag-[your-component-name] [git endpoint]
```


## License

MIT
