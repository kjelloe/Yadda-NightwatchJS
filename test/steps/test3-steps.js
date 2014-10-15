module.exports = {
	using: function(library, ctx) {
		library.når('jeg søker etter stedet "$STED"', function(sted) {
			this.browser
			  .url('http://yr.cloudapp.net/nb/')
			  .waitForElementVisible('body', 1000)
			  .setValue('#searchInput', sted)
			  .pause(1000)
			  .click('#freetextSearch button[type="submit"]')
			  .pause(1000);
        });
		
		library.så('skal "$STED" vises i søkeresultat', function(sted){
			this.browser				
				.waitForElementVisible('ol.list',3000)
				.assert.containsText('#pageHeader div.title h1', sted);
        });

		library.så('jeg skal kunne velge "$STED" fra søkelisten', function(sted){
			this.browser
			  .waitForElementVisible('ol.list', 3000)
			  .click('#pageContent ol.list a[href*="'+sted+'"]')
			  .waitForElementVisible('div.title', 3000)
			  .assert.containsText('#pageHeader div.title h1', sted);
        });
	}
};
