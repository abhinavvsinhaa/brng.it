const catchAsync = require('../utils/catchAsync')
const ScheduleApi = require('../models/schedule-model/scheduleApi.model')
const Unfulfilled = require('../models/schedule-model/unfulfilled.model')

const createApi = catchAsync(async (req, res) => {
    const { headers, url, method, userId, date } = req.body;

    if (headers.length != 0 && url && method && userId && date) {
        const api = new ScheduleApi({
            headers,
            url,
            method,
            userId,
            date
        })

        await api.save();
        
        const unfulfilled = new Unfulfilled({ id: api._id })
        unfulfilled.save()

        return res.send(api);
    }

    else 
        return res.send('Some parameter is missing in creating scheduled API')

})

const updateApi = catchAsync(async (req, res) => {
    const api = await ScheduleApi.findById(req.params.id)
    if (!api)
        return res.send(`No api details exists with given id ${req.params.id}`)


    api.updateOne(req.body)
    return res.send('API updated')
})

const getApi = catchAsync(async (req, res) => {
    const api = await ScheduleApi.findById(req.params.id)
    if (!api)
        return res.send(`No api details exists with given id ${req.params.id}`)

    return res.send(api)
})

const deleteApi = catchAsync(async (req, res) => {
    const api = await ScheduleApi.findById(req.params.id)
    if (!api)
        return res.send(`No api details exists with given id ${req.params.id}`)

    api.deleteOne(req.body)
    return res.send('API deleted')
})

module.exports = { createApi, deleteApi, updateApi, getApi }