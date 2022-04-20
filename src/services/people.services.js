const Boom = require('@hapi/boom');
const PersonModel = require('../models/person.model');
class PersonaService {
  /* Promesas y funciones asicronicas */
  /* Una función asincronica devuelve una promesa */
  /* JS es un lenguaje subproceso (un hilo) -> sólo hace uan cosa a la vez */
  async createPersona(person) {
    person.save();
    return person;
  }
  async listPersona() {
    return PersonModel.find();
  }
  /* Función que nos devuelve una promesa */
  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PersonModel.find());
      }, 3000);
    });
  }
  async showPersona(personId) {
    return PersonModel.findById({ _id: personId }).then(
      (personFind) => {
        if (!personFind) throw Boom.notFound('No se econtró la persona');
        return personFind;
      }
    );
  }
  async editPersona(personId, name, lastname, address, pets) {
    return PersonModel.findById({ _id: personId }).then(
      (personFind) => {
        if (!personFind) throw Boom.notFound('No se econtró la persona');
        return PersonModel.updateOne(
          { _id: personId },
          {name, lastname, address, pets}
        );
      }
    );
  }
  async removePersona(personId) {
    return PersonModel.findById({ _id: personId }).then(
      (personFind) => {
        if (!personFind) throw Boom.notFound('No se econtró la persona');
        return PersonModel.deleteOne(personFind);
      }
    );
  }
}
module.exports = PersonaService;
