var fs = require('fs');
var utils = require('utils');
var Yadda = require('yadda');
var glob = require('glob');
// Set up yadda config
var featureParser = new Yadda.parsers.FeatureParser();
// TODO: Set up language chooser pr language in file
var library = require('./library').init();
var steps = {};
var context = {};
// Import all step definitions
stepDefs().forEach(importStepDef);
// Define Yadda with library filled up with step-expressions
var yadda = new Yadda.Yadda(library);
// Execute each feature and try to match them against defined library of Yadda-expression
featureFiles().forEach(executeFeature);
addDefaultSteps(); // Add needed actions such as close session
  
function featureFiles() {
	return glob.sync("test/features/**/*.feature");
};

function stepDefs() {
	return glob.sync("test/steps/**/*-steps.js")
};

function importStepDef(stepdef) {
	var fileName = stepdef.replace('.js', '');
	require('../../' + fileName).using(library, context);
};

function printProperties(someArray) {
	for (var key in someArray) {
		if (someArray.hasOwnProperty(key)) { 
			console.log(' @ '+key + ' -> ' + someArray[key]); 
		}
	}
}

function executeFeature(featureFile) {
	var text = fs.readFileSync(featureFile, 'utf8');
	var feature = featureParser.parse(text);
	console.log('\nFeature loading: "' + feature.title+'"');
	printProperties(feature.annotations);
		
	feature.scenarios.forEach(function(scenario) {
		console.log(' - ' + scenario.title);
		steps[scenario.title] = function(browser) {
			// TODO: remove step-duplication across features
			yadda.yadda(scenario.steps, { browser: browser });
		};
	});
};

function addDefaultSteps() {
    // Add a final step to Close the session when done
    steps['Close Session'] = function(browser){
		browser.end();
    };
}
 
// Finally export all the steps for nightwatch to execute in sequence
module.exports = steps;
