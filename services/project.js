const db = require('../database')

exports.getAll = async () => {
  return await db('event_project')
    .select('*')
    .orderBy('create_at', 'desc')
}

exports.getOne = async id => {
  return await db('event_project')
    .select('*')
    .where('id', id)
}

exports.createOne = async project => {
  return await db('event_project').insert(project)
}

exports.updateOne = async (id, project) => {
  return await db('event_project')
    .where('id', id)
    .update(project)
}
