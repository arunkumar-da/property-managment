const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js' // output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // use babel-loader for js and jsx files
        }
      }
      // other loaders or rules as needed
    ]
  }
  // other webpack configurations as needed
};
