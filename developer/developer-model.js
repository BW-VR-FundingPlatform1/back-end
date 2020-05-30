const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs")


async function add(user) {
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

function findProject(projectId) {
    return db('myProjects')
        .where({developer_id: projectId})
};

function findProjectById(id) {
    return db("myProjects")
        .where({ id })
        .first()
}
async function insertProject(project) {
    // const id = await db('myProjects')
    return db('myProjects')
        .insert(project)
        .returning("id")
        .then(ids => {
            const [id] = ids
            console.log(id)
            return findProjectById(id)
        })
            
};


module.exports = {
    list,
    findBy,
    findById,
    add,
    remove,
    findProjectById,
    projectList,
    insertProject,
    findProject
}