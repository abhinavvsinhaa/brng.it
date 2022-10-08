const CronJob = require('cron').CronJob
const Fulfilled = require('./models/schedule-model/fulfilled.model')
const UnFulfilled = require('./models/schedule-model/unfulfilled.model')
const Suspended = require('./models/schedule-model/suspended.model')
const axios = require('axios');
const Instagram = require('./utils/Instagram');

const getUnFulfilledRequests = async () => {
	console.log(`running search at ${new Date().getTime()}`)
	const requests = await UnFulfilled.find({})
	requests.map(async request => {
		if (request.date <= Math.floor(new Date()/1000)) {
			const instagram = new Instagram(request.pageId, request.assetURL, request.caption, request.userAccessToken);

			// single media posts
			if (request.assetURL.length == 1) {
				const id = await instagram.singleMediaPosts();
				if (id) {
					// add into fulfilled
					const fulfilled = new Fulfilled({
						apiId: request._id
					})
					await fulfilled.save();
				}
	
				else {
					// add into suspended 
					const suspended = new Suspended({
						apiId: request._id
					})
					await suspended.save();
				}
	
				// remove from unfulfilled
				await request.deleteOne();
			}
		}
	})
}

var job = new CronJob(
	'*/2 * * * *',
	getUnFulfilledRequests,
	null,
	false,
	'America/Los_Angeles'
);

module.exports = job