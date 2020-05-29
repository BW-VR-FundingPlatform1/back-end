exports.seed = async function (knex) {
    await knex('projectsToBack')
    .insert([
        {
            img: 'https://images.pexels.com/photos/3183143/pexels-photo-3183143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            companyName: "DystopiaTech",
            style: "Fun! Learn tax regulations in VR.",
            fundingAmount: "$40,000",
        },

        {
            img: "https://images.pexels.com/photos/1261824/pexels-photo-1261824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            companyName: "Nature Life TM",
            style: "Live the life of a bear and terrorize the neigborhood!",
            fundingAmount: "$1,000,000",
        },

        {
            img: "https://images.pexels.com/photos/373905/pexels-photo-373905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            companyName: "IndieBread",
            style: "Watch people eat sandwiches in real time.",
            fundingAmount: "$300,000 ",
        },
        {
            img: "https://images.pexels.com/photos/166055/pexels-photo-166055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            companyName: "DriveTech",
            style: "‘Endanger the lives of others’ game!",
            fundingAmount: "$400,000",
        },
        {
            img: "https://images.pexels.com/photos/3761308/pexels-photo-3761308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            companyName: "lifeEdge Inc.",
            style: "Get Boo’d off stage with this heckler simulator.",
            fundingAmount: "$4,000",
        },
        {
            img: "https://images.pexels.com/photos/911682/pexels-photo-911682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            companyName: "Y Tho Inc.",
            style: "Stare at the Sun in VR!",
            fundingAmount: "$1,000",
        }
    ])
}