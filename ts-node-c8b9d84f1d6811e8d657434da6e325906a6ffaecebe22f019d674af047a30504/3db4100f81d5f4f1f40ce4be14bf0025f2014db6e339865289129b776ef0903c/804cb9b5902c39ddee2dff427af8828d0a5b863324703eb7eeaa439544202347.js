"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config = {
    entry: path.resolve(__dirname, 'src/backend/server.ts'),
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
                include: path.resolve(__dirname, "src/backend"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2FyZW4vRG9jdW1lbnRzL1JFUHJlcGFuZXQvd2VicGFjay5jb25maWcuc2VydmVyLnRzIiwic291cmNlcyI6WyIvaG9tZS9rYXJlbi9Eb2N1bWVudHMvUkVQcmVwYW5ldC93ZWJwYWNrLmNvbmZpZy5zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2QkFBNkI7QUFFN0IsTUFBTSxNQUFNLEdBQTBCO0lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx1QkFBdUIsQ0FBQztJQUN2RCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7S0FDL0I7SUFDRCxPQUFPLEVBQUU7UUFDTCxVQUFVLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO0tBQy9EO0lBQ0QsTUFBTSxFQUFFLE1BQU07SUFDZCxJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsSUFBSTtLQUNsQjtJQUNELE1BQU0sRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNMO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRTtvQkFDTCwyQkFBMkI7aUJBQzlCO2dCQUNELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7YUFDbEQ7WUFDRDtnQkFDSSxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0o7S0FDSjtJQUNELE9BQU8sRUFBRSxZQUFZO0NBQ3hCLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGNvbmZpZzogd2VicGFjay5Db25maWd1cmF0aW9uID0ge1xuICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2JhY2tlbmQvc2VydmVyLnRzJyksXG4gICAgb3V0cHV0OiB7XG4gICAgICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICdkaXN0JyksXG4gICAgICAgIGZpbGVuYW1lOiBcInNlcnZlci5idW5kbGUuanNcIixcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgZXh0ZW5zaW9uczogW1wiLndlYnBhY2suanNcIiwgXCIud2ViLmpzXCIsIFwiLnRzXCIsIFwiLnRzeFwiLCBcIi5qc1wiXVxuICAgIH0sXG4gICAgdGFyZ2V0OiAnbm9kZScsXG4gICAgbm9kZToge1xuICAgICAgICBfX2ZpbGVuYW1lOiB0cnVlLFxuICAgICAgICBfX2Rpcm5hbWU6IHRydWUsXG4gICAgfSxcbiAgICBtb2R1bGU6IHtcbiAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC50c3g/JC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyczogW1xuICAgICAgICAgICAgICAgICAgICBcImF3ZXNvbWUtdHlwZXNjcmlwdC1sb2FkZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcycpLFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2JhY2tlbmRcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgICAgICAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgICAgICAgICAgbG9hZGVyOiBcInNvdXJjZS1tYXAtbG9hZGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIGRldnRvb2w6ICdzb3VyY2UtbWFwJywgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il19