const { v4: uuid } = require('uuid');
class BaseService {
  constructor({ repository }) {
    this.repository = repository;
  }

  async create(item) {
    const id = uuid();

    return this.repository.create({
      ...item,
      id
    });
  }

  async findOne(id) {
    return this.repository.findOne(id);
  }

  async findAll(query) {
    return this.repository.findAll(query);
  }
}

module.exports = BaseService;