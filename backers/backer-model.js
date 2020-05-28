const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function insert(user) {
    user.password = await bcrypt.hash(user.password, 12)
    const [ id ] = await db("backer").insert(user)
        return findById(id)
}

function list() {
    return db("backer")
    .select("id", "firstname", "lastname")
}

function findBy(filter) {
    return db("backer")
        .where(filter)
}

function findById(id) {
    return db("backer")
        .where({ id })
        .first()
}

function remove(id) {
    return db("backer")
        .where({ id })
        .del()
}

function projectList() {
    return db("projectsToBack")
    .select("img", "companyName", "projectName", "fundingAmount")
}

function findProjectById(id) {
    return db("projectsToBack")
        .where({ id })
        .first()
}

module.exports = {
    list,
    findBy,
    findById,
    insert,
    remove,
    projectList,
    findProjectById
}