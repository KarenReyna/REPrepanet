import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// We use require because the lib doesn't have typings
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config: webpack.Configuration = {
    entry: [
        "react-hot-loader/patch",
        "./src/frontend/index.tsx",
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new FaviconsWebpackPlugin('./src/frontend/assets/melon.png'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Melon',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './src/frontend/index.ejs')
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src/frontend"),
            },
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true
    }

};

export default config;
