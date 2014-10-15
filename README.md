***How to set up Yadda-Nightwatch(JS)-Webdriverjs/Selenium-[Browserstack|SauceLabs|PhantomJS]***

**INSTALL**
 1. node.js                                        -> http://nodejs.org/download/
 2. npm install nightwatch --save-dev              -> http://nightwatchjs.org/guide#installation
 3. INSTALL selenium-server-standalone-2.42.2.jar  -> http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
 4. INSTALL phantomjs                              -> http://phantomjs.org/download.html
 5. npm install yadda --save-dev                   -> https://github.com/acuminous/yadda
 6. npm install utils --save-dev
 7. npm install glob --save-dev

**EDIT SAMPLE TESTS**
* test/features/test.feature
* test/steps/test1-steps.js

**RUN REMOTE YADDA-BDD (BROWSERSTACK|SAUCELABS)**
* nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e someBrowserProfileForTest

**RUN LOCAL YADDA-BDD (PHANTOMJS)**
 * java -jar c:\GIT\devops\utils\selenium\selenium-server-standalone-2.42.2.jar -role hub -port 4433
 * phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4433
 * nightwatch -c ./nightwatch.json  -t test/start/yadda-runner.js -e phantomjs

