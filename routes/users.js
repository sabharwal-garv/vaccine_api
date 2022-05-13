var express = require('express');
var router = express.Router();
const mockData = require('../mockData/userMock.json')

/* GET users listing. */
router.get('/status', function(req, res, next) {
  console.log(mockData)
  res.send(mockData);
});

module.exports = router;
