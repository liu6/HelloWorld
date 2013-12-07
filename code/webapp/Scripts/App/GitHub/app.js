//Ext.Loader.setConfig({
//    enabled: true,
//    disableCaching: false
//});
//Ext.Loader.setPath('Ext.ux', '..\\Scripts\\External\\ExtJS\\ux');

Ext.application({
    name: "App",
    appFolder: "..\\Scripts\\App\\GitHub",
    requires: [

    ],
    controllers: [

    ],
    autoCreateViewport: true,

    init: function () {
        // ...
    },

    launch: function () {
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: [{
//                xtype: 'panel',
//                title: 'Top Geek Flicks of All Time',
//                items: [{
//                    xtype: 'movieseditor'
//                }]
//            }]
//        });

        console.log('Application launch function is called... ...');
    }

});
