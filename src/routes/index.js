const express = require('express');
const personBillRouter = require('./people.router');
function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:5000/api/v1 */
  app.use('/api/v1', router);
  /* Endpoint estático: http://localhost:5000/api/v1/people */
  router.use('/people', personBillRouter);
}
module.exports = routerApi;
