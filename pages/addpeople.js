        var addpeoplecommands = {

          addpeople: function() {
            
            return this.waitForElementVisible('body', 3000)
               .verify.visible('@Addpeople')
               .pause(5000)
              .click('@Addpeople')
              .pause(5000)
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Peoplefirstname')
              .setValue('@Peoplefirstname','amit')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@peoplesave')
              .click('@peoplesave')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Addpeople')
              .click('@Addpeople')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Peoplelastname')
              .setValue('@Peoplelastname','kumar')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@peoplesave')
              .click('@peoplesave')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Addpeople')
              .click('@Addpeople')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@phone')
              .setValue('@phone', '9779101143')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@peoplesave')
              .click('@peoplesave')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Addpeople')
              .click('@Addpeople')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@email')
              .setValue('@email', 'qa@pawlytics.com')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@peoplesave')
              .click('@peoplesave')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Addpeople')
              .click('@Addpeople')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_1')
              .setValue('@line_1', 'street 1')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_2')
              .setValue('@line_2', 'street 2')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@locality')
              .setValue('@locality', 'locality city')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@postal_code')
              .setValue('@postal_code', '121212')
              .waitForElementVisible('body', 1000)
              .pause(12000)
              .verify.visible('@peoplesave')
             .click('@peoplesave')
             .waitForElementVisible('body', 1000)
             .pause(1000)
            .verify.visible('@Addpeople')
              .click('@Addpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('@Peoplefirstname')
              .setValue('@Peoplefirstname','Ramit')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Peoplelastname')
              .setValue('@Peoplelastname', 'joshi')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@phone')
              .setValue('@phone', '9779101143')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@email')
              .setValue('@email', 'qa@pawlytics.com')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_1')
              .setValue('@line_1', 'street 1')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_2')
              .setValue('@line_2', 'street 2')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@locality')
              .setValue('@locality', 'locality city')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@postal_code')
              .setValue('@postal_code', '121212')
              .waitForElementVisible('body', 1000)
              .pause(2000)
              .verify.visible('@peoplesave')
             .click('@peoplesave')
             .waitForElementVisible('body', 1000)
             .pause(1000)
             .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 2000)
                 
              .verify.visible('@Peoplefirstname')
              .clearValue('@Peoplefirstname')
              .setValue('@Peoplefirstname','raj')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@update')
              .click('@update')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@close')
              .click('@close')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 3000)
              .verify.visible('@Peoplelastname')
              .clearValue('@Peoplelastname')
              .setValue('@Peoplelastname','rashi')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@update')
              .click('@update')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@close')
              .click('@close')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 3000)
              .verify.visible('@phone')
              .clearValue('@phone')
              .setValue('@phone', '9805051144')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@update')
              .click('@update')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@close')
              .click('@close')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 3000)
              .verify.visible('@email')
              .clearValue('@email')
              .setValue('@email', 'qaa@pawlytics.com')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@update')
              .click('@update')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@close')
              .click('@close')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 3000)
              .verify.visible('@line_1')
              .clearValue('@line_1')
              .setValue('@line_1', 'street 12')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_2')
              .clearValue('@line_2')
              .setValue('@line_2', 'street 21')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@locality')
              .clearValue('@locality')
              .setValue('@locality', 'localitycity')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .clearValue('@postal_code')
              .verify.visible('@postal_code')
              .setValue('@postal_code', '1221212')
              .waitForElementVisible('body', 1000)
              .pause(12000)
              .verify.visible('@update')
             .click('@update')
             .waitForElementVisible('body', 1000)
             .pause(1000)
            .verify.visible('@close')
              .click('@close')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('@editpeople')
              .click('@editpeople')
              .waitForElementVisible('body', 3000)
              .pause(1000)
              .verify.visible('editpeoplebutton')
              .click('@editpeoplebutton')
              .waitForElementVisible('body', 3000)
              .verify.visible('@Peoplefirstname')
              .clearValue('@Peoplefirstname')
              .setValue('@Peoplefirstname','Ramit')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@Peoplelastname')
              .clearValue('@Peoplelastname')
              .setValue('@Peoplelastname', 'joshi')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@phone')
              .clearValue('@phone')
              .setValue('@phone', '9779101143')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@email')
              .clearValue('@email')
              .setValue('@email', 'qa@pawlytics.com')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_1')
              .clearValue('@line_1')
              .setValue('@line_1', 'street 1')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@line_2')
              .clearValue('@line_2')
              .setValue('@line_2', 'street 2')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@locality')
              .clearValue('@locality')
              .setValue('@locality', 'locality city')
              .waitForElementVisible('body', 1000)
              .pause(1000)
              .verify.visible('@postal_code')
              .clearValue('@postal_code')
              .setValue('@postal_code', '121212')
              .waitForElementVisible('body', 1000)
              .pause(12000)
              .verify.visible('@update')
             .click('@peoplesave')
             .waitForElementVisible('body', 1000)
             .pause(1000)
             .verify.visible('@close')
             .click('@close')
             .pause(5000)
                         }
  };
     module.exports = {
    commands: [addpeoplecommands],
    url: function() {
      return 'https://app.test.pawlytics.com/people';

    },
              
        elements: {
          
          editpeople: {
            selector: '//*[@id="__next"]/div[3]/div[3]/div[1]',      
            locateStrategy: 'xpath'
          }, 
          editpeoplebutton: {
            selector: '//*[@id="__next"]/div[3]/div[2]/div/div[8]/div/div[3]/button',      
            locateStrategy: 'xpath'
          }, 
                   
            Addpeople: { 
              selector: '//*[@id="__next"]//div[2]//div//div//div//button',      
              locateStrategy: 'xpath'
            }, 
            Peoplefirstname:{
              selector: 'first_name',    
              locateStrategy: 'name'
            },
             Peoplelastname: {
                selector: 'last_name',      
                locateStrategy: 'name'
              },
              email: {
                selector: 'email',      
                locateStrategy: 'name'
              },
              phone: { 
                selector: 'phone',    
                locateStrategy: 'name'
              },
              line_1:{ 
                selector: 'line_1',    
                locateStrategy: 'name'
              },
              line_2:{ 
                  selector: 'line_2',    
                              
                  locateStrategy: 'name'
                },
                locality:{ 
                  selector: 'locality',    
                  locateStrategy: 'name'
                },
                postal_code:{ 
                  selector: 'postal_code',    
                  locateStrategy: 'name'
                },
                
                peoplesave:{  
                selector: '//*[@id="__next"]/div[3]/div[7]/div[3]/button',    
                locateStrategy: 'xpath'
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
            
              },
            }