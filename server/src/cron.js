const CronJob = require('cron').CronJob
const Fulfilled = require('./models/schedule-model/fulfilled.model')
const UnFulfilled = require('./models/schedule-model/unfulfilled.model')

var job = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	false,
	'America/Los_Angeles'
);

module.exports = job