sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("fioriapp.controller.Main", {
        // Controller logic (if any)
        onInit :function (){

        },
        fioriController: function(){
            alert ("fiori first controller in mvc")
        }
    });
});

//Scaffolding template
// sap.ui.define([
    
// ], function() {
//     "use strict";

//     return  {
//         // Controller logic (if any)
//     };
// });  