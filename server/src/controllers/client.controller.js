const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');

const createClient = catchAsync(async (req, res) => {
  const client = await clientService.createClient(req.body);
  if (client.status === false) 
    return res.status(httpStatus.CONFLICT).send(client.client)

  return res.status(httpStatus.CREATED).send(client.newClient);
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

const findClientByName = catchAsync(async (req, res) => {
  const { name } = req.query;
  console.log(req.query.name);
  const client = await clientService.getClientByName(name);
  res.send(client);
})

const findClientByEmailAndUpdate = catchAsync(async (req, res) => {
  console.log(req.body.email);
  const client = await clientService.updateClientByEmail(req.body.email, req.body.updateBody);
  res.send(client);
})


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
  findClientByName,
  findClientByEmailAndUpdate
};
