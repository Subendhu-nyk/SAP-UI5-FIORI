sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("fioriapp.controller.MyXMLView", {
        
        //reusable function
        // oUser and oPwd will return an object not a value
            // within the controller event handler "this" object is pointing to the controller object.
        validateData: function (userName,password){
            if (userName =="Admin" && password =='admin')
                {
                    return true
                  
                }
                else{
                    return false
                      
                }
        },
        
        pressButton: function() {            
            var oUser = this.getView().byId('username')
            var oPwd =this.getView().byId('idPwd')
            if (this.validateData(oUser.getValue(),oPwd.getValue())== true){
                alert("Login successfull");  
            }
            else {
                alert("Login Unsuccessfull ! try again");
            }
            
            
        }
    });
});