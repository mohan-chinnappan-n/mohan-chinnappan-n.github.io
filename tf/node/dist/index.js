'use strict';

var _tfjs = require('@tensorflow/tfjs');

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// If not loading the script as a global

var a = tf.tensor1d([1, 2, 3]);
var b = tf.scalar(2);

var result = a.add(b); // a is not modified, result is a new tensor
result.data().then(function (data) {
  return console.log(data);
}); // Float32Array([3, 4, 5]

// Alternatively you can use a blocking call to get the data.
// However this might slow your program down if called repeatedly.
console.log(result.dataSync()); // Float32Array([3, 4, 5]