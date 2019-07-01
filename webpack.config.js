const path = require('path')
//启动热更新 的第二步
//const webpack = require('webpack')

//导入在内存中生成html页面的插件
//只要是插件，都一定要放到plugins中
//这个插件的两个作用：
//1. 自动在内存中根据指定页面生成一个内存的页面
//2.自动把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require('vue-loader/lib/plugin');
//这个配置文件就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
	//需要指定入口和出口
	entry: path.join(__dirname, '/src/main.js'), //入口
	output: { //输出文件相关的配置
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js' //指定输出的文件的名称
	},
    // devServer: {//这个配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦些，
	//     //--open --post 3000 --contentBase src --hot
    //     open:true,  //自动打开浏览器
    //     port:3000,//设置端口号
    //     contentBase:'src', //指定托管的跟目录
    //     hot:true //启动热更新 的第一步
    // },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
       // new webpack.HotModuleReplacementPlugin()  //new 一个热更新对象，启动热更新 的第三步
        new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定的页面路径，去生成内存中页面
            filename: "index.html",  //指定生成的页面的名称
            title: "aaa",

        })
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