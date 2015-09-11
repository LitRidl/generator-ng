var ScriptBase = require('../app/script-base.js'),
    chalk = require('chalk');

module.exports = ScriptBase.extend({
    constructor: function () {
        ScriptBase.apply(this, arguments);
    },

    exec: function () {
        this._addPartials();
    },
});
