import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src/api/server.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "server.bundle.js",
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true,
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    devtool: 'source-map',    
};

export default config;