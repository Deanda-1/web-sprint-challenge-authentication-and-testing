const db = require('../../data/dbConfig')

function findById(id) {
    return db('users as u').select(
        'u.id',
        'u.username',
        'u.password',
    ).where('u.id', id).first()
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findBy(filter) {
    return db('users').where(filter)
}

module.exports = {
    add,
    findById,
    findBy,
};