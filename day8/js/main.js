require.config({
    paths: {
        'jquery': '../lib/jquery',
        'hand': '../lib/handlebars',
        'bscroll': '../lib/bscroll.min',
        'index': 'index',
        'boot': '../lib/bootstrap-3.3.7-dist/js/bootstrap.min'
    }
});
require(['index'])