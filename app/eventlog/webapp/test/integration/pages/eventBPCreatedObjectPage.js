sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'capeventbp.app.eventlog',
            componentId: 'eventBPCreatedObjectPage',
            entitySet: 'eventBPCreated'
        },
        CustomPageDefinitions
    );
});