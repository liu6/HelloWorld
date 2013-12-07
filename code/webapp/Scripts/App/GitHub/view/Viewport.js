/**
 * 需求未拟定
 */
Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [

    ],
    initComponent: function () {
        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border'
            },
            items: [
                // 根据方位来布局frame
                {
                    region: 'north',
                    items: [
                        {
                        id: '',
                        xtype: ''
                        },
                        {
                        id: 'mainBar',
                        xtype: 'mainbar'
                        }
                    ]
                },
                {
                    region: 'west',
                    header: false,
                    title: 'Studies ...',
                    collapsible: true,
                    split: true,
                    hideCollapseTool: true,
                    width: 200,
                    minHeight: 57,
                    minWidth: 50,
                    shrinkWrap: true,
                    reserveScrollbar: true,
                    layout: 'fit',
                    items: [
                        {
    //                    xtype: 'alias'
                        }
                    ]
                },
                {
                    id: 'centerRegion',
                    region: 'center',
                    layout: 'fit',
                    items: [
                        {
                        xtype: 'basecontainer',
                        items: [
                            {
    //                        xtype: 'alias'
                            }
                        ]
                        }
                    ]
                }
            ]
        });
        this.callParent(arguments);
    },

    beforeDestroy: function () {
        var me = this;
        me.removeAll();
        me.callParent(arguments);
    }
});
