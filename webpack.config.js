module.exports = {
  entry: './client/app.jsx',
  output: {
    path: __dirname,
    filename: './client/dist/bundle.js'
  },
  resolve: { 
    extensions: ['','.js','.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:['es2015','react'],
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
    ]
  }
}
