module.exports = {
	using: function(library, ctx) {
		library.når("jeg åpner $URL", function(url) {
            this.browser.url(url, function() {
				this.waitForElementVisible('body', 3000)
			});
        });
		
		library.så("skal jeg finne $SELECTOR", function(selector){
			this.browser.waitForElementVisible(selector, 1000)
            this.browser.assert.visible(selector);
        });
	}
};
