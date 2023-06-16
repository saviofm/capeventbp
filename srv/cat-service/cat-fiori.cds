using CatalogService from './cat-service';

//----------------- IOT Ambiental  ---------------------//
//------------------------------------------------------//
//------------------------------------------------------//
annotate CatalogService.eventBPCreated with @( 
   	UI: {
        HeaderInfo: {          
            Title : { 
                Value: '{i18n>eventBPCreated}'
            },
            TypeName: '{i18n>event}',
            TypeNamePlural: '{i18n>events}',
            Description: { 
                Value: '{i18n>eventBPCreated}'
            }, 
        },
    	TextArrangement     : #TextOnly,
        LineItem: [           
            {
                $Type             : 'UI.DataField',
                Value             : createdAt,
                
                ![@UI.Importance] : #High
            },    
			{
                $Type             : 'UI.DataField',
                Value             : partner,
                
                ![@UI.Importance] : #High
            },         
            {   
                $Type             : 'UI.DataField',
                Value             : fullName,    
                ![@UI.Importance] : #Medium
            },
            {   
                $Type             : 'UI.DataField',
                Value             : street,
                
                ![@UI.Importance] : #Medium
            },        
            {   
                $Type             : 'UI.DataField',
                Value             : houseNum,    
                ![@UI.Importance] : #Medium
            },
            {   
                $Type             : 'UI.DataField',
                Value             : city,
                
                ![@UI.Importance] : #Medium
            },
            {   
                $Type             : 'UI.DataField',
                Value             : region,    
                ![@UI.Importance] : #Medium
            },
            {   
                $Type             : 'UI.DataField',
                Value             : country,
                
                ![@UI.Importance] : #Medium
            }, 
            {   
                $Type             : 'UI.DataField',
                Value             : postalCode,    
                ![@UI.Importance] : #Medium
            },                       
		],
        
        PresentationVariant : {
            $Type     : 'UI.PresentationVariantType',
            SortOrder : [
                {
                    Property : createdAt,
                    Descending : true
                }
            ]
        },
        SelectionFields: [ 
            partner,
            fullName,
            street,
            houseNum,
            city,
            region,
            country,
            postalCode
        ],
    }  
); 
