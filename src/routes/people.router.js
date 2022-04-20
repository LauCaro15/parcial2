const express = require('express');
const Boom = require('@hapi/boom');
const PersonService = require('../services/people.services');
const PersonModel = require('../models/person.model');
const PersonRouter = express.Router();
const service = new PersonService();
/* JSON status code */
/* 201 Created */
/* 200 Lists */
/* 302 Found */
/* 304 Not modified  */
/* 404 Not Found */
PersonRouter.post('/person', async (req, res) => {
  try {
    const person = PersonModel(req.body);
    const data = await service.createPersona(person);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
PersonRouter.get('/', async (req, res, next) => {
  try {
    const data = await service.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
    /* res.status(404).json({ message: error }); */
  }
});
PersonRouter.get('/:personId', async (req, res, next) => {
  try {
    const { personId } = req.params;
    const data = await service.showPersona(personId);
    res.status(302).json(data);
  } catch (error) {
    next(error);
  }
});
PersonRouter.put('/:personId', async (req, res, next) => {
  try {
    const { personId } = req.params;
    const { name, lastname, address, pets } = req.body;
    const data = await service.editPersona(
      personId, name, lastname, address, pets
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

PersonRouter.delete('/:personId', async (req, res, next) => {
  try {
    const { personId } = req.params;
    const data = await service.removePersona(personId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});
module.exports = PersonRouter;