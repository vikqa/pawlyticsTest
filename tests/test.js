module.exports = {
    'Pawlytics_pets_world' : function (browser) {
browser
  //create an object for login
  var login = browser.page.login();
  var addpet=browser.page.addpet();
 var addpets=browser.page.addpets();
 var addpeople=browser.page.addpeople();
var viewpeople=browser.page.viewpeople();

 
 login.navigate().login();
 addpet.navigate().addpet();
 addpets.navigate().addpets(browser);
 addpeople.navigate().addpeople(browser);
 viewpeople.navigate().viewpeople(browser);
  //You can continue with your tests below:
  // Also, you can use similar Page objects to increase reusability
      browser
      .pause(3000)
       .end();

    }
  };
 