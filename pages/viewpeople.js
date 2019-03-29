var viewpeoplecommands = {

    viewpeople: function(browser) {
      browser
      return this.waitForElementVisible('body', 2000)
        .maximizeWindow()
        .pause(2000)
        .verify.visible('@Addpeople')
        .click('@Addpeople')
        .waitForElementVisible('body', 3000)
        .pause(1000)
        .verify.visible('@Peoplefirstname')
        .setValue('@Peoplefirstname','raj')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@peoplesave')
        .click('@peoplesave')
        .waitForElementVisible('body', 1000)
        .pause(1000)
         .verify.visible('@search')
            .setValue('@search','vikas')
            .waitForElementVisible('body', 1000)
            .pause(5000)
            .verify.visible('@view')
            .click('@view')
            .waitForElementVisible('body', 1000)
            .pause(5000)
            .verify.visible('@close')
            .click('@close')
            .waitForElementVisible('body', 2000)
                    }
};
module.exports = {
commands: [viewpeoplecommands],
url: function() {
return 'https://app.test.pawlytics.com/people';

},
        
  elements: {
   
      Addpeople: {
        selector: '//*[@id="__next"]//div[2]//div//div//div//button',      
        locateStrategy: 'xpath'
      }, 
      Peoplefirstname:{
        selector: 'first_name',    
        locateStrategy: 'name'
      },
       close:{ 
          selector: '//*[@id="__next"]/div[3]/div[2]/div/div[8]/div/div[1]/button',    
          locateStrategy: 'xpath'
        },
        update:{ 
          selector: '//*[@id="__next"]/div[3]/div[2]/div/div[8]/div/div[3]/button',    
          locateStrategy: 'xpath'
        },
        search:{ 
          selector: 'search',    
          locateStrategy: 'name'
        },
        view:{ 
        selector: '//*[@id="__next"]/div[3]/div[2]/div[1]',    
        locateStrategy: 'xpath'
      },       
      peoplesave:{  
        selector: '//*[@id="__next"]/div[3]/div[7]/div[3]/button',    
        locateStrategy: 'xpath'
      },                                
      
        },
      }