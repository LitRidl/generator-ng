var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var NgGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        this.log(
            chalk.black.bgWhite('You can see each generator subtask\'s options typing:') + '\n' +
            chalk.green('yo ng:controller --help') + '\n' +
            chalk.green('yo ng:directive --help') + '\n' +
            chalk.green('yo ng:provider --help') + '\n' +
            chalk.green('yo ng:factory --help') + '\n' +
            chalk.green('yo ng:service --help') + '\n' +
            chalk.green('yo ng:value --help') + '\n' +
            chalk.green('yo ng:constant --help') + '\n' +
            chalk.green('yo ng:filter --help') + '\n' +
            chalk.green('yo ng:style --help') + '\n' +
            chalk.green('yo ng:partial --help')
        );
    }
});

module.exports = NgGenerator;
