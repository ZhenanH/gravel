const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.(js|jsx|ts|tsx)$/,
                options: {
                    presets: ["@babel/react"],
                    plugins: [
                        ['import', {libraryName: "antd", libraryDirectory: 'es', style: true}]
                    ]
                },
            },
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",

                        options: {
                            modifyVars: {"@primary-color": "#1B2CCC"},
                            javascriptEnabled: true
                        }
                    }
                ],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};