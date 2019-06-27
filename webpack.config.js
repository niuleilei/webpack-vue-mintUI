const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//这个配置文件就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
	//需要指定入口和出口
	entry: path.join(__dirname, '/src/main.js'), //入口
	output: { //输出文件相关的配置
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js' //指定输出的文件的名称
	},
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            { test:  /\.(png|svg|jpg|jpeg|gif|ttf)$/, loader: 'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},

        ]
    },
    resolve:{
        alias:{//修改vue导入包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}