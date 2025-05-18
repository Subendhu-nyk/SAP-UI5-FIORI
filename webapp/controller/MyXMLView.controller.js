sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("fioriapp.controller.MyXMLView", {
        pressButton: function() {            
            var oUser = this.getView().byId('username')
            var oPwd =this.getView().byId('idPwd')
            // oUser and oPwd will return an object not a value
            // within the controller event handler "this" object is pointing to the controller object.
            if (oUser.getValue()==="Admin" && oPwd.getValue()=='admin')
            {
              alert("Login successfull");  
            }
            else{
                alert("Login Unsuccessfull");  
            }
            
        }
    });
});