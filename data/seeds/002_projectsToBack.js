exports.seed = async function (knex) {
    await knex('projectsToBack')
    .insert([
        {
            img: 'https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "RiseTECH",
            projectName: "Grocery store simulator",
            fundingAmount: "$10,000",
        },

        {
            img: 'https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "FaceScreen Corp",
            projectName: "clean your room game",
            fundingAmount: "$45,000",
        },
        {
            img: 'https://images.pexels.com/photos/1261815/pexels-photo-1261815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "upIT",
            projectName: "fire your boss simulator",
            fundingAmount: "$100,000",
        },
        {
            img: 'https://images.pexels.com/photos/3831136/pexels-photo-3831136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "ClassicVR",
            projectName: "be on stage with miles davis",
            fundingAmount: "$70,000",
        },
        {
            img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "NoLIMITs",
            projectName: "meditation with mindless code",
            fundingAmount: "$20,000",
        },
        {
            img: 'https://images.pexels.com/photos/4009621/pexels-photo-4009621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "codeCORP",
            projectName: "cheap date night simulator",
            fundingAmount: "$10,000",
        },
    ])
}