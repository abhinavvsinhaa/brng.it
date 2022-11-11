const catchAsync = require('../utils/catchAsync');
const History = require('../models/history.model')
const User = require('../models/user.model');

const createHistory = catchAsync(async (req, res) => {
    const { accountId, postId, type, date, platform, userId } = req.body;
    const user = await User.findById(userId)
    if (!user)
        return res.send('Cant find user with the user id given')

    if (accountId && postId && type && date && platform) {
        const history = new History({
            accountId,
            postId,
            type,
            date,
            platform
        })
        await history.save()
        
        // update user with the newly created history
        await user.updateOne({
            $push: { history: history._id }
        })
        
        return res.send(history)
    }

    else {
        return res.send('Some field is missing while adding id to history.')
    }
})

const getHistory = catchAsync(async (req, res) => {
    const history = await History.findById(req.params.historyId)
    if (!history)
        return res.send(`No history found with: ${req.params.historyId}`)

    return res.send(history)
})

const deleteHistory = catchAsync(async (req, res) => {
    await History.findByIdAndDelete(req.params.historyId)
    return res.send(`History deleted with id: ${req.params.historyId}`)
})

const getAllHistoryFromAccount = catchAsync(async (req, res) => {
    const history = await History.find({ accountId: req.params.historyId })
    console.log(history);
    return history;
})

module.exports = { createHistory, getHistory, deleteHistory, getAllHistoryFromAccount }