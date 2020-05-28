exports.seed = async function (knex) {
    await knex('developer')
    .insert([
        {
            username: 'Cberumen',
            password: "berumen",
            firstName: "Christian",
            lastName: "Berumen",
            address: "5101 Bingle Rd. Ventura, CA",
            phone: 4325551234,
            email: "cb@cali.com"
        },

        {
            username: 'Jsarrio',
            password: "sarrio",
            firstName: "Jason",
            lastName: "Sarrio",
            address: "5150 Bourbon St New Orleans, LA",
            phone: 5437341354,
            email: "js@no.com"
        },
    ])
}