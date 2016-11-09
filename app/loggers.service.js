"use strict";
var Loggers = (function () {
    function Loggers() {
    }
    Loggers.prototype.log = function (msg) { console.log(msg); };
    Loggers.prototype.error = function (msg) { console.error(msg); };
    Loggers.prototype.warn = function (msg) { console.warn(msg); };
    return Loggers;
}());
exports.Loggers = Loggers;
//# sourceMappingURL=loggers.service.js.map