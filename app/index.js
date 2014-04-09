'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var XTagGeneratorGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic XTagGenerator generator.'));

    var prompts = [
    {
      type: 'list',
      name: 'componentType',
      choices: ['Element','Mixin','Pseudo','Library'],
      message: 'What kind of X-Tag component is this?',
      default: 'Element'
    },
    {
      name: 'authorName',
      message: 'Author?',
      default: 'John Smith'
    },
    {
      name: 'moduleName',
      message: 'What is the name of your component?',
      default: 'Foo Bar'
    },
    {
      name: 'description',
      message: 'What does it do?',
      default: 'Nothing!'
    },
    {
      when: function(answers){
        return answers.componentType == 'Element';
      },
      name: 'tagName',
      message: 'What should your HTML tag name be?',
      default: 'x-foo-bar'
    },
    {
      when: function(answers){
        return answers.componentType != 'Element';
      },
      name: 'tagName',
      message: 'What should your Mixin/Pseudo/Library code name be?',
      default: 'foobar'
    },
    {
      name: 'fileName',
      message: 'What should your JS and CSS file names be?',
      default: 'main'
    },
    {
      when: function(answers){
        return answers.componentType == 'Element';
      },
      type: 'confirm',
      name: 'stylus',
      message: 'Would you like to use Stylus as your CSS processor?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName;
      this.tagName = props.tagName;
      this.fileName = props.fileName;
      this.authorName = props.authorName;
      this.componentType = props.componentType;
      this.stylus = props.stylus;
      this.description = props.description;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('demo');
    this.mkdir('src');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_xtag.json', 'xtag.json');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.template('_README.md', 'README.md');
    this.template('_index.html', 'demo/index.html');
    this.template('_mainjs.js', 'src/'+this.fileName+'.js');

    if (this.componentType == 'Element'){
      this.copy('_maincss.css', 'src/'+this.fileName+'.css');
      if(this.stylus){
        this.copy('_maincss.css', 'src/'+this.fileName+'.styl');
      }
    }
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = XTagGeneratorGenerator;
