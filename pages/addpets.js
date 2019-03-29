var addpetscommands = {

  addpets: function(browser) {
    browser
    
    return this.waitForElementVisible('body', 2000)
   
      .maximizeWindow()
      .pause(2000)
      .verify.visible('@Addpet')
      .click('@Addpet')
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .useXpath() 
        //.verify.visible('//*[@id="react-select-9-input"]')  
        .setValue('//*[@id="react-select-9-input"]', ['black', browser.Keys.ENTER])
        .pause(2000)
        .verify.visible('@CreatePetbutton')
        .click('@CreatePetbutton')  
         .pause(10000)
                        
       }
};

 module.exports = {
  commands: [addpetscommands],
  url: function() {
        return 'https://app.test.pawlytics.com/pets';

  },
            
      elements: {
        headersPetsmenu: {
          
          selector: '//*[@id="__next"]//div[1]//div//div[2]//menu//div[1]/a',      
          locateStrategy: 'xpath'
        },
        Addpetname:{
          selector: '//*[@id="__next"]//div[4]//div//div[1]//div[1]//div[1]//div[1]//div[1]//div//input',    
          locateStrategy: 'xpath'
        },
        Addpet: {
          selector: '//*[@id="__next"]//div[2]//div//div//div//button',      
          locateStrategy: 'xpath'
        }, 
        CreatePetbutton:{   
          selector: '//*[@id="__next"]/div[4]/div/div[5]/div/div[3]/button',    
          locateStrategy: 'xpath'
        },
         close:{ 
          selector: '//*[@id="__next"]/div[3]/div[2]/div/div[8]/div/div[1]/button',    
          locateStrategy: 'xpath'
        },
        
          },
        }

       

             
        