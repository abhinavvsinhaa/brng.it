const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  let user = {}

  if (req.query.customers) {
    console.log('req.query.customers')
    user = await userService.getUserByIdPopulatedCustomers(req.params.userId);
  } else {
    user = await userService.getUserById(req.params.userId);
  }

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const addSubscription = catchAsync(async (req, res) => {
  if (req.query.f === 'true') {
    const user = await userService.updateUserByIdAndAddSubscription(req.params.userId, req.body, 'facebook')
    res.send(user);
  }

  // todo: for linkedin
  if (req.query.linkedin === 'true') {
    console.log('calling linkedin subs add');
    const user = await userService.updateUserByIdAndAddSubscription(req.params.userId, req.body, 'linkedin')
    res.send(user)
  }
})

const searchSubscriptionData = catchAsync(async (req, res) => {
  if (req.query.f === 'true') {
    const ans = await userService.findSubscription(req.params.userId, req.body.pageId, 'facebook')
    return ans;
  }
})

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addSubscription,
  searchSubscriptionData,
};
