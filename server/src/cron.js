const CronJob = require('cron').CronJob
const Fulfilled = require('./models/schedule-model/fulfilled.model')
const UnFulfilled = require('./models/schedule-model/unfulfilled.model')
const ScheduleApi = require('./models/schedule-model/scheduleApi.model')
const Suspended = require('./models/schedule-model/suspended.model')
const { Instagram } = require('./utils/Instagram')

const getUnFulfilledRequests = async () => {
	console.log(`running search at ${new Date().getTime()}`)
	const requests = await UnFulfilled.find({}).populate("apiId")
	requests.map(async request => {
		if (request.apiId.date <= Math.floor(new Date()/1000)) {
			const { pageId, assetURL, caption, accessToken } = request.apiId
			const instagram = new Instagram(pageId, assetURL, caption, accessToken);

			// single media posts
			if (assetURL.length == 1) {
				const id = await instagram.singleMediaPosts();
				if (id) {
					// add into fulfilled
					const fulfilled = new Fulfilled({
						apiId: request.apiId
					})
					await fulfilled.save();
					await ScheduleApi.findByIdAndUpdate(request.apiId, {
						status: 'fulfilled'
					})
				}
	
				else {
					// add into suspended 
					const suspended = new Suspended({
						apiId: request.apiId
					})
					await suspended.save();
					await ScheduleApi.findByIdAndUpdate(request.apiId, {
						status: 'suspended'
					})
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