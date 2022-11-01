const httpStatus = require('http-status');
const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const binarySearch = require('../utils/binarySearch')

const addTeamMember = catchAsync(async(req, res) => {
    const { userEmail, teamMemberEmail, facebookAccounts, linkedinAccounts } = req.body;
    let teamMember = await User.findOne({
        email: teamMemberEmail
    })

    if (!teamMember) {
        return res.send(new ApiError(httpStatus.NOT_FOUND, "Cant find user with given team member email address."));
    }

    const user = await User.findOne({
        email: userEmail
    })

    if (user) {
        if (user.facebookSub.length > 0) {
            user.facebookSub.map(async sub => {
                const found = binarySearch(sub.id, facebookAccounts);
                if (found) {
                    console.log('pushing into facebookSubs: ', sub);
                    teamMember.facebookSub.push(sub);
                }
            })
        }

        // TODO: for linkedin
        if (user.linkedinSub.length > 0) {
            user.linkedinSub.map(async sub => {
                const found = binarySearch(sub.id, linkedinAccounts)
                if (found) {
                    console.log('pushing into linkedinSubs: ', sub)
                    teamMember.linkedinSub.push(sub);
                }
            })
        }

        await teamMember.save();

        // cross check
        res.send(true);
    }

    else if (!user)
        return res.send(new ApiError(httpStatus.NOT_FOUND, "Cant find root user."))

})

module.exports = { addTeamMember }