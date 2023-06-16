sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capeventbp/app/eventlog/test/integration/FirstJourney',
		'capeventbp/app/eventlog/test/integration/pages/eventBPCreatedList',
		'capeventbp/app/eventlog/test/integration/pages/eventBPCreatedObjectPage'
    ],
    function(JourneyRunner, opaJourney, eventBPCreatedList, eventBPCreatedObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capeventbp/app/eventlog') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheeventBPCreatedList: eventBPCreatedList,
					onTheeventBPCreatedObjectPage: eventBPCreatedObjectPage
                }
            },
            opaJourney.run
        );
    }
);