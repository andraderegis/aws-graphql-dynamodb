const BaseService = require('./base-service');

class SkillsService extends BaseService {
  constructor({ repository }) {
    super({ repository });
  }
}

module.exports = SkillsService;