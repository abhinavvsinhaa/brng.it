const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');

const createClient = catchAsync(async (req, res) => {
  const client = await clientService.createClient(req.body);
  res.status(httpStatus.CREATED).send(client);
});

const getClients = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await clientService.queryClients(filter, options);
  res.send(result);
});

const getClient = catchAsync(async (req, res) => {
  const client = await clientService.getClientById(req.params.clientId);
  if (!client) {
    throw new ApiError(httpStatus.NOT_FOUND, 'client not found');
  }
  res.send(client);
});

// const findClientLinkedIn = catchAsync(async (req, res) => {
//   const { id } = req.body;
//   console.log(id);
//   const client = await clientService.getClientByLinkedInId(id);
//   res.send(client);
// })

const updateClientById = catchAsync(async (req, res) => {
  const client = await clientService.updateClientById(req.params.clientId, req.body);
  res.status(httpStatus.OK).send(client);
});

const deleteClient = catchAsync(async (req, res) => {
  await clientService.deleteClientById(req.params.clientId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createClient,
  getClients,
  getClient,
  updateClientById,
  deleteClient,
};
