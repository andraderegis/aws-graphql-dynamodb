const BaseRepository = require('./base-repository');
const schema = require('./schema/skills-schema');


class SkillsRepository extends BaseRepository {
  constructor() {
    super({
      schema
    });
  }
}

module.exports = SkillsRepository;