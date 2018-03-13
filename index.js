class WebpackErrorRemover {
    constructor(options) {
    console.log(options);
    }

    apply(compiler) {
        compiler.plugin('done', function() {
        
        });
    }
}
module.exports = WebpackErrorRemover;
