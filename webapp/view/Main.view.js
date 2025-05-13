sap.ui.jsview("fioriapp.view.Main", {
  /** Specifies the Controller belonging to this View.
   * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
   * @memberOf fioriapp.view.Main
   */
  getControllerName: function () {
    return "fioriapp.controller.Main";
  },

  /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
   * Since the Controller is given to this method, its event handlers can be attached right away.
   * @memberOf fioriapp.view.Main
   */
  createContent: function (oController) {
    var oPage = new sap.m.Page({
      id: "oPage",
      title: "Title",
      content: [new sap.m.Text({ text: "This is a JS view." })],
    });

    var app = new sap.m.App("myApp");
    app.addPage(oPage);
    app.setInitialPage("oPage");
    return app;
  },
});

//   sap.ui.jsview("fioriapp.view.Main", {
//     /** Specifies the Controller belonging to this View.
//      * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
//      * @memberOf fioriapp.view.Main
//      *///

//     getControllerName: function() {
//     return "fioriapp.controller.Main"; it returns the name of the controller
//     },

//     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
//      * Since the Controller is given to this method, its event handlers can be attached right away.
//      * @memberOf fioriapp.view.Main
//      */
//     createContent: function(oController) { }
// return new sap.m.Button("idBtn",{
//  text :"Click me",
//  press: function(){
// alert("hello")
// }
// })
//   });
