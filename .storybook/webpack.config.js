module.exports = {
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  }
};
