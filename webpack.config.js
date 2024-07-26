const path = require('path');

module.exports = {
    entry: './src/index.js', // este va a ser el punto de entrada de nuestra aplicacion=archivo de entrada donde empaquetara el webpack
    output: {
      filename: 'bundle.js', //nombre del archivo de salida
      path: path.resolve(__dirname, 'disk'), //carpeta de salida
    },
    module: {
       rules: [
        {
            test:/\.css$/, // regex para indentificar archivos css
            use: ['style-loader', 'css-loader'], //loaders para procesar archivos css
        },
        {
            test:/\.js$/, //Regex pra identificar archivos javascrip
            exclude: /node_modules/, //excluir la carpeta node_modules
            use: {
                loader: 'babel-loader',// Loader para pasar nuestro JS moderno a JS antiguo 
                options: {
                  presets:['@babel/present-env'],
               },
        
            },
        
        },       

    ],
},
devtool: 'source-map',//Generar source maps para facilitar la deuracion
devServer: {
    contentBase: path.resolve(__dirname,'dist'), //carpeta principal del servidor
    compress: true, //habilitar la compresion gzip
    port:9000, //puerto del desarrollador de puerto
},


}