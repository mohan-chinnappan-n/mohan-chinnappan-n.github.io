'use strict';

var _tfjs = require('@tensorflow/tfjs');

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// If not loading the script as a global


// A sequential model is a container which you can add layers to.
var model = tf.sequential();

// Add a dense layer with 1 output unit.
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Specify the loss type and optimizer for training.
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
var xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
var ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

// Train the model.
model.fit(xs, ys, { epochs: 500 });

// Ater the training, perform inference.
var output = model.predict(tf.tensor2d([[5]], [1, 1]));
output.print();