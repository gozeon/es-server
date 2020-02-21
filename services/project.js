const db = require('../database')

exports.getAll = async ({ id, name }) => {
  const query = db('event_project')
    .select('*')
    .orderBy('create_at', 'desc')

  if (id) {
    query.where('id', 'like', `%${id}%`)
  }

  if (name) {
    query.where('name', 'like', `%${name}%`)
  }

  return query
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
