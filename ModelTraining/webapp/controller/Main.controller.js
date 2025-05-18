sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("fioriapp.controller.Main", {
        onInit: function(){
            //creating models
            //step1 : create a model object
            var oModel = new sap.ui.model.json.JSONModel();

            //step2 : set the data to model
            oModel.setData({
                "empStr":{
                    "empNo":999,
                    "empName":"Sam",
                    "salary":9000,
                    "currency":"EUR"
                }
            })
            
            //step3 : make the model known to the application
            sap.ui.getCore().setModel(oModel)
        }
        
    });
});