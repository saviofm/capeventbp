const cds = require('@sap/cds');
const xsenv = require("@sap/xsenv");
const  {workflowPOST}  = require("../common/destination-service")
const { getBundle } = require('../common/i18n');

//class CatalogService extends cds.ApplicationService { 
module.exports = cds.service.impl ( async function(){

   // init() {
        
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // INIT - Instanciando                                                              //
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//

        xsenv.loadEnv();
        

        const bpCreated = await cds.connect.to("bpCreated");



        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        // IOT - Ambiental
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------//
        bpCreated.on('sappsbr/eventmesh/us10/businesspartner/created', async (msg) => {  
            const { eventBPCreated } = cds.entities;  
            

            // IOT Ambiental
            let rowsInsert_eventBPCreated = await INSERT(
                { 
                    partner: msg.data.BUT000[0].PARTNER, 
                    fullName: msg.data.BUT000[0].NAME1_TEXT, 
                    street: msg.data.BUT000[0].ADRC[0].STREET, 
                    houseNum: msg.data.BUT000[0].ADRC[0].HOUSE_NUM1, 
                    city: msg.data.BUT000[0].ADRC[0].CITY1, 
                    region: msg.data.BUT000[0].ADRC[0].REGION, 
                    country: msg.data.BUT000[0].ADRC[0].COUNTY_CODE, 
                    postalCode: msg.data.BUT000[0].ADRC[0].POST_CODE1, 
                }).into(eventBPCreated);
           
            console.log(`EVENT BP Created occurs`);
            
            /*
                //Preenche o contexto  
                let t = new Date(msg.data.timestamp);  
                let hr = ("0" + t.getHours()).slice(-2);
                let min = ("0" + t.getMinutes()).slice(-2);
                let sec = ("0" + t.getSeconds()).slice(-2);
                let date = ("0" + t.getDate()).slice(-2);
                let month = (t.getMonth()+1)
                month = ("0" + month).slice(-2);

                let time =date+ "/" + month + "/" + t.getFullYear() + " "+hr+":"+min+":"+sec
                let body = {
                    definitionId: "us10.sap-presales-br-usa.avisodeiluminaoiot.avisoIluminacaoIOT",
                    context: {
                        dataRegistro: time,
                        valorRegistrado: msg.data.lux
                    }
                }
              
            const response = await workflowPOST('sap_processautomation', '/workflow/rest/v1/workflow-instances', null, JSON.stringify(body));

            //response.ID 
            console.log(response);
        
            }
            */
            });
        ////return super.init();
})
//}

//module.exports = { CatalogService };
