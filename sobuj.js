var botBuilder = require(‘claudia-bot-builder’), excuse = require(‘huh’); 

module.exports = botBuilder(function (request) { 
	return 'Thank you very much for sending' + request.text; 
});