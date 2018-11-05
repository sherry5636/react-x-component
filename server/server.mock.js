const webpack = require('webpack')
const fs = require('fs')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../config/webpack.config.dev.js')

const path = require('path');

const app = new (require('express'))()
const port = 9009
const Mock = require('mockjs');

const API = require('../src/mock/mock');

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        version: false,
        cached: false,
        cachedAssets: false,
        reasons: false,
        source: false,
        errorDetails: false
    }
}))

API.rules.map((item)=>{
    app.use(item.url,function (req,res,next) {
        res.json(require(item.responsewith));
    })
})

app.use(webpackHotMiddleware(compiler))

app.get('*', function(req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (error, result) => {
        if (error) {
            next(error);
        } else {
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        }
    });
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})