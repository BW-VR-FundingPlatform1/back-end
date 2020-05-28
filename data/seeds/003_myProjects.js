exports.seed = async function (knex) {
    await knex('myProjects')
    .insert([
        {
            img: 'https://images.pexels.com/photos/3831136/pexels-photo-3831136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "be on stage with miles davis",
            fundingAmount: "$70,000",
        },
    ])
}