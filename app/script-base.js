var generators = require('yeoman-generator'),
    angularUtils = require('./utils.js'),
    camelCase = require('camelcase'),
    chalk = require('chalk'),
    path = require('path');

var MyBase = module.exports = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        this.sourceRoot(path.join(path.dirname(this.resolved), ''));

        this.option('dest', {
            desc: 'Set a destination where to save the file',
            type: String,
            required: 'false'
        });
        this.option('component', {
            desc: 'Set the destination to be under the component library'
        });
        this.option('bundle', {
            desc: 'Create the task\'s file under a specific module instead of the file name',
            type: String,
            required: 'false'
        });
    },

    // Copy the right template based on the type
    appTemplate: function (options) {
        if (!this._areOptionsValid()) {
            return false;
        }

        var templateSrc = options['type'] + '.js',
            testSrc = options['type'] + '.spec.js',
            fullPath = 'src/index.html',
            templateDest = this._destinationPath(options['type']),
            testDest = 'src/' + this._destinationPath(options['type'], true) + '.spec.js',
            typedTemplateDest = 'src/' + templateDest + '.js';

        var templateData = {
                scriptAppName: this.appname,
                scriptClassName: camelCase(this.name),
                serviceValue: (typeof this.options['service-value'] !== 'undefined') ? this.options['service-value'] : ''
            };

        this.template(templateSrc, typedTemplateDest, templateData);
        this.template(testSrc, testDest, templateData);
    },

    // Add styles
    _addStyles: function () {
        if (!this._areOptionsValid()) {
            return false;
        }
        var templateSrc = 'style.sass',
            fullPath = 'src/index.html',
            templateDest = this._destinationPath('style'), // Create the destination path
            typedTemplateDest = 'src/' + templateDest + '.sass';

        this.template(templateSrc, typedTemplateDest); // Create file
    },

    // Adds partials
    _addPartials: function () {
        if (!this._areOptionsValid()) {
            return false;
        }

        var templateDest = this._destinationPath('partial'),
            templateSrc = 'partial.html',
            typedTemplateDest = 'src/' + templateDest + '.html';

        this.template(templateSrc, typedTemplateDest);
    },

    // Create the file path to copy the template to and to insert in the index.html file
    _destinationPath: function (taskType, testFile) {
        testFile = testFile || false;
        var destType = (typeof this.options['component'] !== 'undefined') ? 'app/components' : 'app',
            filename = this._getFilename(taskType),
            bundle = (typeof this.options['bundle'] !== 'undefined') ? this.options['bundle'] : this.name,
            templateDest = destType + '/' + bundle + '/' + filename;

        if (typeof this.options['dest'] !== 'undefined') {
            templateDest = this._prepareDest(this.options['dest']) + '/' + filename;
        }

        return templateDest;
    },

    // Do not include task type to partial and styles
    _getFilename: function (taskType) {
        if (taskType == 'partial' || taskType == 'style') {
            return this.name;
        }
        return this.name + '-' + taskType;
    },

    // Validate options
    _areOptionsValid: function () {
        var valid = true;
        if (typeof this.options['bundle'] !== 'undefined') {
            if (typeof this.options['bundle'] === 'boolean') {
                this.log(chalk.red('Bundle cannot be empty!'));
                valid = false;
            }
        }
        if (typeof this.options['dest'] !== 'undefined') {
            if (typeof this.options['dest'] === 'boolean') {
                this.log(chalk.red('Destination cannot be empty!'));
                valid = false;
            }
        }
        return valid;
    },

    // Prepare the destination string so we can control it.
    _prepareDest: function (dest) {
        if (dest.charAt(dest.length - 1) == '/') {
            dest = dest.slice(0, -1);
        } // Removes / from the end of the destination

        var src = dest.slice(0, 3);
        if (src == 'src') {
            dest = dest.replace('src/', '');
        } // Removes 'src/' from the beginning

        return dest;
    },
});
