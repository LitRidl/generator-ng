var ScriptBase = require('../app/script-base.js');

module.exports = ScriptBase.extend({
    constructor: function () {
        ScriptBase.apply(this, arguments);
    },

    exec: function () {
        if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
            this.name = this.name.slice(0, -4);
        }
        this.appTemplate({
            type: 'controller',
        });
    },
});
