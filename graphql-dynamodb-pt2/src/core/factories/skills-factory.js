const SkillsRepository = require('../repository/skills-repository');
const SkillsService = require('../services/skills-service');

async function createInstance() {
  const skillsRepository = new SkillsRepository();

  const skillsService = new SkillsService({
    repository: skillsRepository
  });

  return skillsService;
}

module.exports = { createInstance };