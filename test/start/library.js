var Yadda = require('yadda');
var language = Yadda.localisation.Norwegian;
var Dictionary = Yadda.Dictionary;

module.exports.init = function() {
    var dictionary = new Dictionary();
    var library = language.library()
    return library;	
};
