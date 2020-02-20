const db = require('../database')

exports.getAll = async ({ projectId }) => {
  let query = db('event_event')
    .select('*')
    .orderBy('create_at', 'desc')
  if (projectId) {
    query.where('project_id', projectId)
  }
  return await query
}

exports.createOne = async project => {
  return await db('event_event').insert(project)
}

exports.updateOne = async (id, project) => {
  return await db('event_event')
    .where('id', id)
    .update(project)
}
