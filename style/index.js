var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
    constructor: function () {
        ScriptBase.apply(this, arguments);
    },

    exec: function () {
        this._addStyles();
    },
});
