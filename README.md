# generator-x-tag-generator [![Build Status](https://secure.travis-ci.org/pennyfx/generator-x-tag-generator.png?branch=master)](https://travis-ci.org/pennyfx/generator-x-tag-generator)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

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

Once you've completed your component, don't forget to share it.

```
$ bower register x-tag-[your-component-name] [git endpoint]
```


X-Tag Generator sets up the basic folder structure and files for a new web component.  We included some useful Grunt commands that will aid in route tasks like building, testing and pushing your component.

The main source files are in `./src/`.  The `./demo/` folder contains an html scaffold for testing the development of your component.



### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
