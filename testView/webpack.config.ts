import * as path from "path";
export default {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../src/index.tsx')
  ],
  output: {
    path: path.join(__dirname, '../client/public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx'],
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, '../'),
        use: [
          {
            loader: 'react-hot-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
  ]
}