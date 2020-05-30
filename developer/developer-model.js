const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function insert(user) {
    user.password = await bcrypt.hash(user.password, 12)
    return db('developer')
        .insert(user, 'id')
        .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function list() {
    return db("publicProjects")
    .select("img", "companyName", "projectName", "fundingAmount")
}

function findBy(filter) {
    return db("developer")
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

function findProject(projectId) {
    return db('myProjects')
        .where({developer_id: projectId})
};

function findProjectById(id) {
    return db("myProjects")
        .where({ id })
        .first()
}
 function insertProject(project) {
    return db('myProjects')
        .insert(project, "id")
        .then(([id]) => {
            return findProjectById(id)
        })
}
async function updateProject(id, changes) {
    await db("myProjects")
        .where({ id })
        .update(changes)
        .returning("id")
        return findById(id)
}
function removeProject(id) {
return db("myProjects")
    .where({id})
    .del();
}


module.exports = {
    list,
    findBy,
    findById,
    insert,
    remove,
    findProjectById,
    projectList,
    insertProject,
    findProject,
    updateProject,
    removeProject
}