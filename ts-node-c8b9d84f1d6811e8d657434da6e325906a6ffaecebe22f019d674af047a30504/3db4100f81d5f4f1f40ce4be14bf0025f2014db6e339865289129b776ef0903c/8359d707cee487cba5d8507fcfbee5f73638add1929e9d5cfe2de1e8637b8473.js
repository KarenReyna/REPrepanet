"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// We use require because the lib doesn't have typings
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const config = {
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
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2FyZW4vRG9jdW1lbnRzL1JFUHJlcGFuZXQvd2VicGFjay5jb25maWcudHMiLCJzb3VyY2VzIjpbIi9ob21lL2thcmVuL0RvY3VtZW50cy9SRVByZXBhbmV0L3dlYnBhY2suY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3Qix5REFBeUQ7QUFDekQsc0RBQXNEO0FBQ3RELElBQUkscUJBQXFCLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFL0QsTUFBTSxNQUFNLEdBQTBCO0lBQ2xDLEtBQUssRUFBRTtRQUNILHdCQUF3QjtRQUN4QiwwQkFBMEI7S0FDN0I7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ2xDLFFBQVEsRUFBRSxXQUFXO0tBQ3hCO0lBRUQsT0FBTyxFQUFFLFlBQVk7SUFFckIsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztLQUMvRDtJQUVELE9BQU8sRUFBRTtRQUNMLElBQUkscUJBQXFCLENBQUMsaUNBQWlDLENBQUM7UUFDNUQsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDaEMsSUFBSSxPQUFPLENBQUMsMEJBQTBCLEVBQUU7UUFDeEMsSUFBSSxpQkFBaUIsQ0FBQztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLGNBQWMsRUFBRSxZQUFZO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQztTQUNoRSxDQUFDO0tBQ0w7SUFFRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDTDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ0wsMEJBQTBCO29CQUMxQiwyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7YUFDbkQ7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsYUFBYTtnQkFDckIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSwyQkFBMkI7aUJBQ2xDO2FBQ0Y7WUFDRDtnQkFDSSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0o7S0FDSjtJQUVELFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLElBQUk7UUFDWixrQkFBa0IsRUFBRSxJQUFJO0tBQzNCO0NBRUosQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIEh0bWxXZWJwYWNrUGx1Z2luIGZyb20gJ2h0bWwtd2VicGFjay1wbHVnaW4nO1xuLy8gV2UgdXNlIHJlcXVpcmUgYmVjYXVzZSB0aGUgbGliIGRvZXNuJ3QgaGF2ZSB0eXBpbmdzXG52YXIgRmF2aWNvbnNXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgnZmF2aWNvbnMtd2VicGFjay1wbHVnaW4nKTtcblxuY29uc3QgY29uZmlnOiB3ZWJwYWNrLkNvbmZpZ3VyYXRpb24gPSB7XG4gICAgZW50cnk6IFtcbiAgICAgICAgXCJyZWFjdC1ob3QtbG9hZGVyL3BhdGNoXCIsXG4gICAgICAgIFwiLi9zcmMvZnJvbnRlbmQvaW5kZXgudHN4XCIsXG4gICAgXSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Rpc3QnKSxcbiAgICAgICAgZmlsZW5hbWU6IFwiYnVuZGxlLmpzXCIsXG4gICAgfSxcblxuICAgIGRldnRvb2w6IFwic291cmNlLW1hcFwiLFxuXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBleHRlbnNpb25zOiBbXCIud2VicGFjay5qc1wiLCBcIi53ZWIuanNcIiwgXCIudHNcIiwgXCIudHN4XCIsIFwiLmpzXCJdXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbmV3IEZhdmljb25zV2VicGFja1BsdWdpbignLi9zcmMvZnJvbnRlbmQvYXNzZXRzL21lbG9uLnBuZycpLFxuICAgICAgICBuZXcgd2VicGFjay5OYW1lZE1vZHVsZXNQbHVnaW4oKSxcbiAgICAgICAgbmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSxcbiAgICAgICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgICAgIHRpdGxlOiAnTWVsb24nLFxuICAgICAgICAgICAgY2h1bmtzU29ydE1vZGU6ICdkZXBlbmRlbmN5JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvZnJvbnRlbmQvaW5kZXguZWpzJylcbiAgICAgICAgfSksXG4gICAgXSxcblxuICAgIG1vZHVsZToge1xuICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicmVhY3QtaG90LWxvYWRlci93ZWJwYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBleGNsdWRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvZnJvbnRlbmRcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXN0OiAvXFwuKGpwZ3xwbmd8c3ZnKSQvLFxuICAgICAgICAgICAgICBsb2FkZXI6ICdmaWxlLWxvYWRlcicsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnW3BhdGhdW25hbWVdLltoYXNoXS5bZXh0XScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyOiBcInNvdXJjZS1tYXAtbG9hZGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuXG4gICAgZGV2U2VydmVyOiB7XG4gICAgICAgIGhvdDogdHJ1ZSxcbiAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICBoaXN0b3J5QXBpRmFsbGJhY2s6IHRydWVcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdfQ==