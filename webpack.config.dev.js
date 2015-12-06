var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

function getDirectories(srcpath, dirs) {
  var ignore = ['src/api'];
  if (ignore.indexOf(srcpath) >= 0) { return; }
  return fs.readdirSync(srcpath).reduce(function(d, file) {
    var p = path.join(srcpath, file);
    if (fs.statSync(p).isDirectory()) {
      d.push(p);
      getDirectories(p, d);
    }
    return d;
  }, dirs);
}

var resolveDirs = ['web_modules', 'node_modules', 'src'].concat(getDirectories('src', []));

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: resolveDirs,
    extensions: ["", ".webpack.js", ".web.js", ".js"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.(eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file" }
    ]
  }
};
