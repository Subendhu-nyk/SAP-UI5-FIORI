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

            //Binding the model in programmatical way by getting the control object
            //1 way - through by binding the value            
            const oCur= this.getView().byId('idCur');
            oCur.bindValue("/empStr/currency")

            //2 way -- through property binding
            const oSal=this.getView().byId('idSal');
            oSal.bindProperty("value","/empStr/salary")
        }
        
    });
});