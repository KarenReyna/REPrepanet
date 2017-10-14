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
        "./src/index.tsx",
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
        new FaviconsWebpackPlugin('./src/assets/melon.png'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Melon',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './src/index.ejs')
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
                include: path.resolve(__dirname, "src"),
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
        inline: true
    }
};
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2FyZW4vRG9jdW1lbnRzL1JFUHJlcGFuZXQvd2VicGFjay5jb25maWcudHMiLCJzb3VyY2VzIjpbIi9ob21lL2thcmVuL0RvY3VtZW50cy9SRVByZXBhbmV0L3dlYnBhY2suY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3Qix5REFBeUQ7QUFDekQsc0RBQXNEO0FBQ3RELElBQUkscUJBQXFCLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFL0QsTUFBTSxNQUFNLEdBQTBCO0lBQ2xDLEtBQUssRUFBRTtRQUNILHdCQUF3QjtRQUN4QixpQkFBaUI7S0FDcEI7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ2xDLFFBQVEsRUFBRSxXQUFXO0tBQ3hCO0lBRUQsT0FBTyxFQUFFLFlBQVk7SUFFckIsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztLQUMvRDtJQUVELE9BQU8sRUFBRTtRQUNMLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7UUFDbkQsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDaEMsSUFBSSxPQUFPLENBQUMsMEJBQTBCLEVBQUU7UUFDeEMsSUFBSSxpQkFBaUIsQ0FBQztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLGNBQWMsRUFBRSxZQUFZO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUN2RCxDQUFDO0tBQ0w7SUFFRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDTDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ0wsMEJBQTBCO29CQUMxQiwyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7YUFDMUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsYUFBYTtnQkFDckIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSwyQkFBMkI7aUJBQ2xDO2FBQ0Y7WUFDRDtnQkFDSSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0o7S0FDSjtJQUVELFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLElBQUk7S0FDZjtDQUVKLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBIdG1sV2VicGFja1BsdWdpbiBmcm9tICdodG1sLXdlYnBhY2stcGx1Z2luJztcbi8vIFdlIHVzZSByZXF1aXJlIGJlY2F1c2UgdGhlIGxpYiBkb2Vzbid0IGhhdmUgdHlwaW5nc1xudmFyIEZhdmljb25zV2VicGFja1BsdWdpbiA9IHJlcXVpcmUoJ2Zhdmljb25zLXdlYnBhY2stcGx1Z2luJyk7XG5cbmNvbnN0IGNvbmZpZzogd2VicGFjay5Db25maWd1cmF0aW9uID0ge1xuICAgIGVudHJ5OiBbXG4gICAgICAgIFwicmVhY3QtaG90LWxvYWRlci9wYXRjaFwiLFxuICAgICAgICBcIi4vc3JjL2luZGV4LnRzeFwiLFxuICAgIF0sXG4gICAgb3V0cHV0OiB7XG4gICAgICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICdkaXN0JyksXG4gICAgICAgIGZpbGVuYW1lOiBcImJ1bmRsZS5qc1wiLFxuICAgIH0sXG5cbiAgICBkZXZ0b29sOiBcInNvdXJjZS1tYXBcIixcblxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgZXh0ZW5zaW9uczogW1wiLndlYnBhY2suanNcIiwgXCIud2ViLmpzXCIsIFwiLnRzXCIsIFwiLnRzeFwiLCBcIi5qc1wiXVxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIG5ldyBGYXZpY29uc1dlYnBhY2tQbHVnaW4oJy4vc3JjL2Fzc2V0cy9tZWxvbi5wbmcnKSxcbiAgICAgICAgbmV3IHdlYnBhY2suTmFtZWRNb2R1bGVzUGx1Z2luKCksXG4gICAgICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXG4gICAgICAgIG5ldyBIdG1sV2VicGFja1BsdWdpbih7XG4gICAgICAgICAgICB0aXRsZTogJ01lbG9uJyxcbiAgICAgICAgICAgIGNodW5rc1NvcnRNb2RlOiAnZGVwZW5kZW5jeScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2luZGV4LmVqcycpXG4gICAgICAgIH0pLFxuICAgIF0sXG5cbiAgICBtb2R1bGU6IHtcbiAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgICAgICBcInJlYWN0LWhvdC1sb2FkZXIvd2VicGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcImF3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGVzdDogL1xcLihqcGd8cG5nfHN2ZykkLyxcbiAgICAgICAgICAgICAgbG9hZGVyOiAnZmlsZS1sb2FkZXInLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1twYXRoXVtuYW1lXS5baGFzaF0uW2V4dF0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbmZvcmNlOiBcInByZVwiLFxuICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxuICAgICAgICAgICAgICAgIGxvYWRlcjogXCJzb3VyY2UtbWFwLWxvYWRlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcblxuICAgIGRldlNlcnZlcjoge1xuICAgICAgICBob3Q6IHRydWUsXG4gICAgICAgIGlubGluZTogdHJ1ZVxuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl19