## Keras

Keras is a high-level API to:
 - build 
 - train
 deep learning models.

- **User Friendly** :simple, consistent interface optimized for common use cases.
- **Moduluar and composable** : models are made by connecting configurable building blocks together, with few restrictions
- **Easy to extend**: Write custom building blocks to express new ideas for research. Create new layers, loss functions, and develop state-of-the-art models.

## tf.keras
-  TensorFlow's implementation of the Keras API specification
 - When saving a model's weights, **tf.keras** defaults to the **checkpoint** format.
    -  Pass **save_format='h5'** to use HDF5.

## Sequential model
- assemble layers to build models
- tf.keras.Sequential
    - most common type of model - is a stack of layers
    - fully-connected network (i.e. multi-layer perceptron):
```python
model = tf.keras.Sequential()
# Adds a densely-connected layer with 64 units to the model:
model.add(layers.Dense(64, activation='relu'))
# Add another:
model.add(layers.Dense(64, activation='relu'))
# Add a softmax layer with 10 output units:
model.add(layers.Dense(10, activation='softmax'))
```

