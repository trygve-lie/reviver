/* jshint node: true, strict: true */

"use strict";


var Riviver = module.exports = function (key, value) {
    return key === '' && value.hasOwnProperty('_type') ? Riviver.construct(value._type) : this[key];
};


Riviver.constructors = {};



Riviver.toJSON = function (name, obj) {
    obj._type = name;
    return obj;
};



Riviver.construct = function (type) {
    return new Riviver.constructors[type]();
};
