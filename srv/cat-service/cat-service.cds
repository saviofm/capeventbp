using capeventbp from '../../db/data-model';
//using cv_temp_hist as cv_temp_hist from '../../db/data-model';
//using cv_humidity_hist as cv_humidity_hist  from '../../db/data-model';


service CatalogService  {

//Ambiental IOT
    @readonly
    entity  eventBPCreated  as projection on capeventbp.eventBPCreated;
}