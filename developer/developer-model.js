const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function insert(user) {
    user.password = await bcrypt.hash(user.password, 12)
    const id = await db("developer").insert(user)
    console.log("id", id)
        return findById(id)
}

function list() {
    return db("publicProjects")
    .select("img", "companyName", "projectName", "fundingAmount")
}


function findBy(filter) {
    return db("developer")
        .select("id", "username", "password")
        .where(filter)
}

function findById(id) {
    return db("developer")
        .where({ id })
        .first()
}

function remove(id) {
    return db("developer")
        .where({ id })
        .del()
}

function projectList() {
    return db("myProjects")
    .select("img", "projectName", "fundingAmount")
}

function findProjectById(id) {
    return db("myProjects")
        .where({ id })
        .first()
}
function insertProject(job) {
    return db('jobs')
        .insert(job,'id')
        .then(([id]) => {
            return findJobById(id)
        })
        //add message to endpoint "Created Job with id of ${id}"
};


module.exports = {
    list,
    findBy,
    findById,
    insert,
    remove,
    findProjectById,
    projectList,
    insertProject
}