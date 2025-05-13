// //Defines a SAPUI5 module. sap.ui.define takes an array of dependencies (e.g., ["sap/m/Button"]) and a callback function. This module is loaded via data-sap-ui-onInit in index.html.
// sap.ui.define([
// //first we need to pull of our text control and pass it to the function
// "sap/ui/core/mvc/XMLView"
// ],function (XMLView){
//     "use strict"
// //second create a new object or control
// //  new Text({
// //     text:"Hello Ui5!"
// //  }).placeAt('content')
// XMLView.create({
//     viewName:"sap.ui.demo.SAP-UI5-FIORI.view.App"
// }).then(function(oView){
//     oView.placeAt('content')
// })

// })