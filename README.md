How to set up Yadda-Nightwatch(JS)-Webdriverjs/Selenium-[Browserstack|SauceLabs|PhantomJS]

INSTALL:
 node.js                                        ## http://nodejs.org/download/
 npm install nightwatch --save-dev              ## http://nightwatchjs.org/guide#installation
 INSTALL selenium-server-standalone-2.42.2.jar  ## http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
 INSTALL phantomjs                              ## http://phantomjs.org/download.html
 npm install yadda --save-dev                   ## https://github.com/acuminous/yadda
 npm install utils --save-dev
 npm install glob --save-dev
 (default run mode for nightwatch) nightwatch -c ./nightwatch.json -t somenightwatchtest.js -e windows8IEOnBrowserStack

MAKE SAMPLE TESTS:
 *** test.feature *** 
 *** test-steps.js ***

RUN REMOTE YADDA-BDD (BROWSERSTACK|SAUCELABS)
 nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e windows8IEOnBrowserStack

RUN LOCAL YADDA-BDD (PHANTOMJS)
 java -jar c:\GIT\devops\utils\selenium\selenium-server-standalone-2.42.2.jar -role hub -port 4433
 phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4433
 nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e phantomjs


