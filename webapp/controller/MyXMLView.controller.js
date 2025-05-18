sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("fioriapp.controller.MyXMLView", {
        pressButton: function() {
            alert("Button pressed");
        }
    });
});