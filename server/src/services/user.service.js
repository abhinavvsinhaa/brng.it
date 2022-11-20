const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const axios = require('axios');

const checkInstagramBusinessAccount = (pageId, pageToken, userToken) => {
  let config = {
    method: 'GET',
    url: `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${pageId}?fields=instagram_business_account&access_token=${pageToken}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      if (response.data.instagram_business_account) {
        return {
          found: true,
          id: response.data.instagram_business_account.id,
        };
      } else {
        return {
          found: false,
        };
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await new User(userBody)
  user.isGoogleVerifiedAtLogin = true
  user.isGoogleVerifiedAtWisestamp = true
  await user.save()
  return user
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by id populated customer
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserByIdPopulatedCustomers = async (id) => {
  return User.findById(id).populate('customers');
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * find subscription
 * @param {ObjectId} userId
 * @param {string} subId
 * @param {string} platform
 * @returns {Promise<User>}
 */
const findSubscription = async (userId, subId, platform) => {
  if (platform === 'facebook') {
    let res = await User.find({
      _id: userId,
      facebookSub: {
        id: subId,
      },
    });

    return res;
  }
};

/**
 * Update user by id and add subscription
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserByIdAndAddSubscription = async (userId, updateBody, platform) => {
  let user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // for facebook
  let mp = new Map();
  let index = 0;
  user.facebookSub.map((sub) => {
    mp.set(sub.id, index);
  });

  if (platform == 'facebook') {
    console.log(updateBody)
    updateBody.map(async (data) => {
      var config = {
        method: 'get',
        url: `${process.env.FACEBOOK_GRAPH_API_PREFIX_URL}/${data.id}?fields=instagram_business_account&access_token=${data.access_token}`,
        headers: {
          'Authorization': `Bearer ${user.facebook}`
        }
      };

      let ig =  await axios(config);
      if (ig.data.instagram_business_account.id) {
        data.instagram = ig.data.instagram_business_account;
      }

      if (!mp.has(`${data.id}`)) {
        user = await User.findByIdAndUpdate(
          userId,
          {
            $push: { facebookSub: data },
          },
          { new: true }
        );
      } else {
        let idx = mp.get(`${data.id}`);
        user.facebookSub[idx] = data;
        user.save();
      }
    });
  }

  else if (platform == 'linkedin') {
    let m = new Map();
    user.linkedinSub.map((account, i) => {
      m.set(account.id, i);
    })

    // for single personal account
    // user already exists
    if (!m.has(updateBody.id)) {
      console.log('didnt found user');
      user = await User.findByIdAndUpdate(
        userId,
        {
          $push: { linkedinSub: updateBody }
        },
        {
          new: true
        }
      )
    } else {
      console.log('found user');
      const i = m.get(updateBody.id)
      user.linkedinSub[i] = updateBody
      user.save()
    }
  }

  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  getUserByIdPopulatedCustomers,
  updateUserByIdAndAddSubscription,
  findSubscription,
};
