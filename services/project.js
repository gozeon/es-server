const db = require('../database')

exports.getAll = async () => {
  return await db('event_project').select('*')
}

exports.createOne = async project => {
  return await db('event_project').insert(project)
}

exports.updateOne = async (id, project) => {
  return await db('event_project')
    .where('id', id)
    .update(project)
}
