Ext.define('app.store.Demo', {
    extend: 'Ext.data.Store',
    model: 'app.mode.Demo',
    data: [{
        title: 'The Matrix',
        year: '1999'
    }, {
        title: 'Star Wars: Return of the Jedi',
        year: '1983'
    }]
});
