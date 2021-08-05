const BaseService = require('./base-service');

class HeroesService extends BaseService {
  constructor({ repository }) {
    super({ repository });
  }
}

module.exports = HeroesService;