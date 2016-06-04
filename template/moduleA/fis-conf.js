fis.config.merge({
    webname: 'webname',
    namespace: 'namespace',
    roadmap: {
        domain: 'https://ecar.xiaojukeji.com',
        ext: {
            less: 'css'
        },
        path: [{
            reg: /\/static\/js\/module\/mod\.js/i,
            url: '/static/${webname}/${namespace}/js/mod.js',
            release: '/static/${webname}/${namespace}/js/mod.js',
            isMod: false
        }, {
            reg: /^\/static\/js\/(.*)\.js$/i,
            url: '/static/${webname}/${namespace}/js/$1',
            release: '/static/${webname}/${namespace}/js/$1',
            exclude: 'mod\.js',
            isMod: true
        }, {
            reg: /^\/static\/css\/(.*)\.(less|css)$/i,
            url: '/static/${webname}/${namespace}/css/$1',
            release: '/static/${webname}/${namespace}/css/$1',
            useSprite: true
        }, {
            reg: /^\/static\/img\/(.*)\.(jpg|jpeg|png|gif|icon|html)$/i,
            url: '/static/${webname}/${namespace}/img/$1',
            release: '/static/${webname}/${namespace}/img/$1',
            isMod: true
        }, {
            reg: /^\/widget\/(.*)\.(js|less|css|jpg|jpeg|png|gif|html|swf|map|svg|ttf|woff|eot|ico|icon|exe)$/i,
            url: '/static/${webname}/${namespace}/widget/$1',
            release: '/static/${webname}/${namespace}/widget/$1',
            useSprite: true,
            isMod: true
        }, {
            reg: /\/(.*)\.md$/i,
            url: '/static/${webname}/${namespace}/doc/$1',
            release: '/static/${webname}/${namespace}/doc/$1'
        }]
    },
    pack: {},
    settings: {
        spriter: {
            csssprites: {
                //图之间的边距
                margin: 5
            }
        },
        optimizer: {
            'png-compressor': {
                type: 'pngquant' //default is pngcrush
            }
        }
    },
    modules: {
        parser: {
            less: 'less'
        },
        optimizer: {
            tpl: 'html-compress'
        },
        spriter: 'csssprites'
    },
    deploy: {
        // 上线用
        release: [{
            from: '/WEB-INF/config',
            to: './output/static/fis-vm/'
        }, {
            from: '/WEB-INF/views',
            to: './output/static/fis-vm/'
        }, {
            from: '/static',
            to: './output/'
        }]
    }
});
