module.exports ={
    devServer: {
      proxy: {
        '/api': {
            target: 'https://translate-server-lcg.herokuapp.com/', //接口域名
            changeOrigin: true,             //是否跨域
            secure: true,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/api': ''
            }
        }
      }
    }
  }
  
  