const HeroesRepository = require('../repository/heroes-repository');
const HeroesService = require('../services/heroes-service');

async function createInstance() {
  const heroesRepository = new HeroesRepository();

  const heroesService = new HeroesService({
    repository: heroesRepository
  });

  return heroesService;
}

module.exports = { createInstance };