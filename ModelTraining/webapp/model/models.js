sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    function (JSONModel){
        return {
            createMyModel: function (){
                // var oModel = new sap.ui.model.json.JSONModel()
                var oModel=new JSONModel ()
                oModel.loadData("model/mockData/myMockData.json");
                return oModel
            }
        }
    }
)