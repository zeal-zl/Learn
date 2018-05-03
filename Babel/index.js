/** 
 * *learn babel
 * 
 * Babel 是一个编译器。 
 * 从宏观角度看，它将运行代码分为3个阶段: 解析，转换，及生成(与其他编译器相同).
 * 
 * Babel 会在正在被转录的文件的当前目录中查找一个 .babelrc 文件。
 * 如果不存在，它会遍历目录树，直到找到一个 .babelrc 文件，或一个 package.json 文件中有 "babel": {}
 * 
 * 
 * *babel-cli 常用指令
 * * --out-file  ==> -o    // 将制定文件编码后结果 --out-file 写入另一个文件中
 * babel ./Es6/test1.js  --out-file ./Compiled/test1.js
 * babel ./Es6/test1.js  -o ./Compiled/test1.js
 * ps: 
 *    当指定文件不存在时 会自动创建指定文件
 *    当指定文件的目录不存在时 会报错
 * 
 * 
 * * --out-dir  ==> -d    // 将整个目录转码 --out-dir 或 -d 写入另一个目录中    
 * babel ./Es6 --out-dir ./Compiled
 * babel ./Es6 -d ./Compiled
 * ps: 
 *    如果想将整个目录下的文件内容编译到单个文件中可以使用  babel Es6 -o ./Compiled/allTest.js
 *    不会覆盖指定目录中的任何其他文件或目录
 *    当指定目录不存在时 会自动创建指定目录
 * 
 * 
 * * --ignore    // 在使用 --out-dir / -d 时 会忽略指定文件 不进行编
 * babel ./Es6 -d ./Compiled --ignore ignore.js
 * ps: 
 *    若要忽略多个文件已逗号分隔  ==> --ignore test2.js,ignore.js
 * 
 * 
 * * --source-maps  ==> -s    // 参数生成source map文件 生成对应文件的.map文件
 * babel ./Es6 -d ./Compiled --source-maps
 * babel ./Es6/test1.js --out-file ./Compiled/test1.js -s
 * ps:
 *    想使用 内联的 source maps，你可以使用 --source-maps inline
 * 
 * * --watch  ==> -w    // 在每一次修改文件后编译文件, 自动编译
 * babel Es6/test1.js -o Compiled/test1.js --watch
 * babel Es6 -d Compiled -w
 * babel Es6 -o Compiled/allTest.js -w
 * 
 * 
 * * --plugins    // 插件 指定编译中要使用的插件
 * babel Es6/test1.js -o Compiled/test1.js --plugins=transform-es2015-modules-amd
 * ps:
 *    babel的插件，在6.x版本之后babel必需要配合插件来进行工作
 * 
 * 
 * * --presets    // 预设 指定编译中要使用的插件
 * babel Es6 -d Compiled --presets env
 * ps:
 *    babel插件集合的预设，包含某一部分的插件plugin
 * 
 * 
 * * --no-babelrc    // 忽略项目中 .babelrc 文件的配置并使用 cli 选项，例如，为一个自定义的构建
 * babel --no-babelrc script.js --out-file script-compiled.js --presets=es2015,react
 * ps:
 *    babel解析转换时 会去 .babelrc 文件中读取响应的转换规则
 * 
 * 
 * * --copy-files  ==> -D   // 把不需要编译的文件也复制到指定的目录中
 * babel Es6 -d Compiled --copy-files
 * 
 * 
 * *传出的文件 < 输入的文件    // 通过标准输入传入一个文件并输出到 指定位置
 * babel --d Compiled/test1.js < Es6/test1.js
 * ps:
 *    不经过编译过程，
 *    只能文件传输不能目录
 * 
 * *其他指令
 * * --only
 * * --filename  ==> -f      // 当从标准输入读取时使用的文件名 - 这将用于map文件，错误等
 * * --module-ids  ==> -M    // 指定模块ID的自定义名称
 * * --extensions  ==> -x    // 输入目录时编译的扩展名列表[.es6，.js，.es，.jsx]
 * * --quiet  ==> -q         // 不记录任何东西
 * * --version  ==> -V       // 输出版本号
 * * --help  ==> -h          // 输出使用信息
 */

/**
 * *plugins 与 presets
 * presets就是一堆plugins的预设
 * 
 * 排序问题
 * Plugin 会运行在 Preset 之前。
 * Plugin 会从第一个开始顺序执行。
 * Preset 的顺序则刚好相反(从最后一个逆序执行)。
 */

/**
 * *.babelrc文件设置
 * 所有的Babel API 的设置项都不接收回调方法，因为 .babelrc 文件会被序列化为 JSON5
 * 
 * *env 选项
 * 在特定环境的时候，可以用 env 选项来设置特定的配置
 * env 选项的值将从 process.env.BABEL_ENV 获取，如果没有的话，则获取 process.env.NODE_ENV 的值，它也无法获取时会设置为 "development" 。
 */


const babelrc = {
  // 默认不查找
  "babelrc": false,

  // 下面指的是在生成的文件中，不产生注释
  "comments": false,

  // 预设 使用的时候需要安装对应的插件 对应babel-preset-xxx
  "presets": [
    // env 可以设置参数   ps:参数配置 https://babeljs.cn/docs/plugins/preset-env/
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }],

    "es2015",
    "stage-0"
  ],

  // 插件
  "plugins": ["transform-runtime",
    {
      // boolean，默认true 使用babel的helper函数。
      helpers: true,

      // boolean，默认true  使用babel的polyfill，但是不能完全取代babel-polyfill。
      polyfill: true,

      // boolean，默认true  使用babel的regenerator。
      regenerator: true,

      // string，默认babel-runtime  使用对应module处理。
      moduleName: "babel-runtime"
    }
  ],

  // 不需要编译的文件
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ],

  // 指定环境 在特定的环境中所执行的转码规则，当环境变量是下面的 production 就会覆盖上面的设置
  "env": {
    "production": {
      "presets": ["env", "stage-0"],
      // instanbul是一个用来测试转码后代码的工具
      "plugins": ["istanbul"]
    }
  },

}


/**
 * *常用的plugins
 * 
 * *transform-runtime
 * 解决编译中产生的重复的工具函数，减小代码体积
 * 非实例方法的poly-fill，如Object.assign，但是实例方法不支持，如"foobar".includes("foo")，这时候需要单独引入babel-polyfill
 * 
 * *transform-remove-console 
 * 使用这个插件，编译后的代码都会移除console.*，
 *  
 */
