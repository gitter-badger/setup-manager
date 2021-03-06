var clone = require("clone");

function toString(object) {
  return Object.prototype.toString.call(object);
}

function isObject(variable) {
  return typeof variable === "object";
}

function isArray(variable) {
  return isObject(variable) && toString(variable) === "[object Array]";
}

function extendObject(hash, values) {
  var keys = Object.keys(values);
  for (var i = keys.length; i--;) {
    hash[keys[i]] = values[keys[i]];
  }
  return hash;
}

function extendArray(list, values) {
  if (isArray(values)) {
    values.forEach(function(value) {
      list.push(value);
    });
  } else {
    list.push(values);
  }
  return list;
}

function extend(object, values) {
  return isArray(object)
    ? extendArray(object, values)
    : extendObject(object, values);
}

module.exports = {
  extend: extend,
  clone: clone,
  isArray: isArray,
  isObject: isObject
};
