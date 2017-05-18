module.exports = function materialize(list, key, value) {
  var ret = {};

  if (list) Array.prototype.forEach.call(list, function(item) {
    ret[item[key||'name']] = item[value||'value'];
  });

  return ret;
};
