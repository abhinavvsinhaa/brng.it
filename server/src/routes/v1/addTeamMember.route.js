const express = require('express');
const addTeamMemberController = require('../../controllers/addTeamMember.controller');

const router = express.Router();

router
  .route('/')
  .post(addTeamMemberController.addTeamMember)

module.exports = router;