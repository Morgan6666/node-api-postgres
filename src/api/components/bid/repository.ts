const {PostgresORM} = require("../../services/Database")
const postgres = new PostgresORM()


export class Controller {

    async addValue(sum:number, course:number, currency:string, email:string) {

        const add = await postgres.request(`INSERT INTO user_information (sum, course, currency, email) VALUES (${sum}, ${course}, ${currency}, ${email})`)
        return add
    }
    async deleteValue(id:number) {
        const del = await postgres.request(`DELETE FROM user_information WHERE id = ${id}`)
        return del
    }

    async updateValue(sum:number, currency:string){
        const result = await postgres.request(`UPDATE user_information SET sum = ${sum}, curency = ${currency} `)
        return result
    }

}


