const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "minecraft2408",
    port: 5432,
})

const updateValues = (request,response) => {
    const {sum, currency} = request.body
    if (typeof sum === 'number') {


        pool.query("UPDATE user_information SET sum = $1, course  = $2, currency = $3, email = $4", [sum, currency], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Values is updated`)
        })

    } else {
        response.status(400).send(`Not valid raw`)
    }}

    const addValues = (request, response) => {
        const {sum, course, currency, email} = request.body
        if (typeof sum === 'number' && typeof course === 'number' && typeof currency === "string" && typeof email === "string")
        {


            pool.query("INSERT INTO user_information (sum, course, currency, email) VALUES ($1, $2, $3, $4)", [sum, course, currency, email], (error, results) => {

                if (error) {
                    throw error
                }
                response.status(200).send(`Add values`)
            })
        }

        else {
            response.status(400).send(`Not valid raw`)
        }
    }



        const deleteValues = (request, response) => {
            const id = parseInt(request.params.id)
            if (typeof id  === 'number') {
                pool.query("DELETE FORM user_information WHERE id = $1", [id], (error, results) => {
                    if (error) {
                        throw error
                    }
                    response.status(200).send(`Application successfully deleted`)
                })
            }
            else {
                response.status(400).send(`Not valid raw`)
            }
    }


module.exports = {
    updateValues,
    addValues,
    deleteValues
}