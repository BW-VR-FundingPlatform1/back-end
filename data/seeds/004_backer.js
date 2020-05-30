exports.seed = async function (knex) {
    await knex('backer')
    .insert([
        {
            username: 'Bdavis',
            password: "davis",
            FirstName: "Blake",
            LastName: "Davis",
            address: "2319 Wall St. New York, NY",
            phone: 3567342685,
            email: "bd@ny.com"
        },

        {
            username: 'Awhitt',
            password: "whitt",
            FirstName: "Alex",
            LastName: "Whitt",
            address: "353 Marshall Ave. Saint Paula, MN",
            phone: 7357843210,
            email: "aw@louis.com"
        },
    ])
}