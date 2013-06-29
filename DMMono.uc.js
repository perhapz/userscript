// ==UserScript==
// @name        DMMono
// @include     chrome://browser/content/browser.xul
// @version     1.0.0
// @description Enable DMM mono access
// ==/UserScript==

var responseObserver = {
  observe: function(subject, topic, data)
  {
    if (topic == "http-on-examine-response") {
      var httpChannel = subject.QueryInterface(Components.interfaces.nsIHttpChannel);
      var uri = httpChannel.URI.host;
      if (uri=='www.dmm.co.jp') {
        httpChannel.setResponseHeader("Set-Cookie", "ckcy=1; path=/; domain=.dmm.co.jp", true);
      }
    }
  },

  get observerService() {
    return Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
  },

  register: function()
  {
    this.observerService.addObserver(this, "http-on-examine-response", false);
  },

  unregister: function()
  {
    this.observerService.removeObserver(this, "http-on-examine-response");
  }
};

responseObserver.register();

window.addEventListener("unload", function () {
  responseObserver.unregister();
}, false);