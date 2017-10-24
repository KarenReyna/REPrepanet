"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config = {
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
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2FyZW4vRG9jdW1lbnRzL1JFUHJlcGFuZXQvd2VicGFjay5jb25maWcuc2VydmVyLnRzIiwic291cmNlcyI6WyIvaG9tZS9rYXJlbi9Eb2N1bWVudHMvUkVQcmVwYW5ldC93ZWJwYWNrLmNvbmZpZy5zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2QkFBNkI7QUFFN0IsTUFBTSxNQUFNLEdBQTBCO0lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztJQUNuRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7S0FDL0I7SUFDRCxPQUFPLEVBQUU7UUFDTCxVQUFVLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO0tBQy9EO0lBQ0QsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsSUFBSTtLQUNsQjtJQUNELE1BQU0sRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRTtvQkFDTCwyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7YUFDMUM7WUFDRDtnQkFDSSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0o7S0FDSjtJQUNELE9BQU8sRUFBRSxZQUFZO0NBQ3hCLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGNvbmZpZzogd2VicGFjay5Db25maWd1cmF0aW9uID0ge1xuICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2FwaS9zZXJ2ZXIudHMnKSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgICAgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Rpc3QnKSxcbiAgICAgICAgZmlsZW5hbWU6IFwic2VydmVyLmJ1bmRsZS5qc1wiLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBleHRlbnNpb25zOiBbXCIud2VicGFjay5qc1wiLCBcIi53ZWIuanNcIiwgXCIudHNcIiwgXCIudHN4XCIsIFwiLmpzXCJdXG4gICAgfSxcbiAgICB0YXJnZXQ6ICdub2RlJyxcbiAgICBub2RlOiB7XG4gICAgICAgIF9fZmlsZW5hbWU6IHRydWUsXG4gICAgICAgIF9fZGlybmFtZTogdHJ1ZSxcbiAgICB9LFxuICAgIG1vZHVsZToge1xuICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLnRzeD8kLyxcbiAgICAgICAgICAgICAgICBsb2FkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYXdlc29tZS10eXBlc2NyaXB0LWxvYWRlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBleGNsdWRlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzJyksXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyOiBcInNvdXJjZS1tYXAtbG9hZGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIGRldnRvb2w6ICdzb3VyY2UtbWFwJywgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il19