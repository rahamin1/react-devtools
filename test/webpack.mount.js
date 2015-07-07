
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './mount.js',
  output: {
    path: __dirname + '/build',
    filename: 'mount.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader:  'babel-loader?stage=0',
      exclude: [
        'node_modules',
      ],
      /*
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      */
    }]
  },
}


