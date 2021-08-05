const BaseRepository = require('./base-repository');
const schema = require('./schema/heroes-schema');

class HeroesRepository extends BaseRepository {
  constructor() {
    super({
      schema
    });
  }
}

module.exports = HeroesRepository;