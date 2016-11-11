module.exports = {
  entry: {
    app: './src/js/app.js',
    helpers: './src/js/helpers.js'
  },

  output: {
    path: './dist/js',
    filename: '[name].js',
  },

  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: [
          'es2015'
        ]
      }
    }]
  },

  devtool: 'inline-source-map'
};
