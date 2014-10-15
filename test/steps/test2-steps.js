module.exports = {
	using: function(library, ctx) {
		library.når("jeg starter yr2014 med $STED i søkefeltet", function(sted) {
			this.browser
			  .url('http://yr.cloudapp.net/nb/')
			  .waitForElementVisible('body', 1000)
			  .setValue('#searchInput', sted)
			  .pause(1000)
			  .click('button[type="submit"]')
			  .pause(1000);
        });
		
		library.så("skal jeg se værmeldingen for $STED", function(sted){
			this.browser
			  .waitForElementVisible('ol.list', 6000)
			  .click('#pageContent ol.list a[href*="'+sted+'"]')
			  .waitForElementVisible('div.title', 3000)
			  .assert.containsText('#pageHeader div.title h1', sted)
			  .end();
        });
	}
};
