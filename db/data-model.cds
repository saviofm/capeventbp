using {
  cuid,
  managed,
  sap,
  temporal,
  Currency,
  User
} from '@sap/cds/common';

namespace capeventbp;


    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    // Events
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//

    

    //-------------------- BP Created-  --------------------//
    //------------------------------------------------------//
    //------------------------------------------------------//
    //Entity
    entity eventBPCreated: cuid, managed {
        partner: String;
        fullName: String;
        street: String;
        houseNum: String;
        city: String;
        region: String;  
        country: String;
        postalCode: String; 
    };
    //annotation
    annotate eventBPCreated with {
        partner @(
            title       : '{i18n>partner}',
            description : '{i18n>partner}',    
        );  
        fullName @(
            title        : '{i18n>fullName}',
            description  : '{i18n>fullName}'
        );
        street @(
            title        : '{i18n>street}',
            description  : '{i18n>street}'
        );
        houseNum @(
            title        : '{i18n>houseNum}',
            description  : '{i18n>houseNum}'
        );
        city @(
            title        : '{i18n>city}',
            description  : '{i18n>city}'
        );
        region @(
            title        : '{i18n>region}',
            description  : '{i18n>region}'
        );
        country @(
            title        : '{i18n>country}',
            description  : '{i18n>country}'
        );
        postalCode @(
            title        : '{i18n>postalCode}',
            description  : '{i18n>postalCode}'
        );
    };
