exports.seed = async function (knex) {
    await knex('myProjects')
    .insert([
        {
            developer_id: 1,
            img: 'https://images.pexels.com/photos/3831136/pexels-photo-3831136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "be on stage with miles davis",
            fundingAmount: "$70,000",
        },
        {
            developer_id: 2,
            img: 'https://images.pexels.com/photos/1261815/pexels-photo-1261815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "fire your boss simulator",
            fundingAmount: "$100,000",
        },
        {
            developer_id: 1,
            img: 'https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "clean your room game",
            fundingAmount: "$45,000",
        },
        {
            developer_id: 2,
            img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "meditation with mindless code",
            fundingAmount: "$20,000",
        },
        {
            developer_id: 1,
            img: 'https://images.pexels.com/photos/4009621/pexels-photo-4009621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            projectName: "cheap date night simulator",
            fundingAmount: "$10,000",
        },
    ])
}