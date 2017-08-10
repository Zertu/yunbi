const path = require('path')
function getSourceMap(list) {
  let entry = Object.create(null);
  list.forEach(function (src) {
    // 砍掉./static/前缀和.extname后缀 我们的项目结构，读者可以自行配置，不用拘泥于伪代码
    entry[src.slice(9, src.lastIndexOf('.'))] = src;
  });
  return entry;
}
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/dist/')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  node: {
    fs: 'empty',
    __dirname: false
  },
   target: 'node',
}