
const controller = new(require("./repository").Controller)()
import {APIResponse} from "../../interface/api";

export class FormsCtrl {
    constructor() { }


    async updateValues(sum:number, currency:string): Promise<APIResponse> {
        try {

            if  (!(typeof sum  === "number" && typeof currency === "string")){

                return {success: false, content: {}, message: "Bad data", code: 400}

            }
            const result = controller.updateValue(sum, currency)
            if(!result){
                return {success: false, content: {}, message: "Internal server error", code: 500}
            }
            return  {success: true, content: {}, message: "ok", code: 200}


        } catch (error) {
            return {success: false, content: {}, message: `${error}`, code: 500}

        }
    }

    async deleteValues(id:number): Promise<APIResponse> {
        try {
            if (!(typeof id === "number")) {
                return {success: false, content: {}, message: "Bad data", code: 500}
            }
            const del = controller.deleteValue(id)
            if(!del) {
                return {success: false, content: {}, message: "Internal server error", code: 500}
            }
            return {success: true, content: {}, message: "ok", code: 200}

        } catch (error) {
            return {success: false, content: {}, message: `${error}`, code: 500}

        }
    }


    async addValues(sum, course, currency, email): Promise<APIResponse> {
        try {

            if (!(typeof sum === "number" && typeof  course === "number" && typeof currency === "string" && typeof email === "string")){
                return {success: false, content: {}, message: "Bad data", code: 500}
            }
            const add = controller.addValue(sum, course, currency, email)
            if(!add){
                return {success: false, content: {}, message: "Internal server error", code: 500}
            }
            return {success: true, content: {}, message: "ok", code: 200}
        }
        catch (error) {
            return {success: false, content: {}, message: `${error}`, code: 500}
        }
    }
}
