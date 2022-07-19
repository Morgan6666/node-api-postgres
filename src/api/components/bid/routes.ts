
import {json, Request, Response} from "express";
const controller = new(require("./controller").FormsCtrl)()
const express = require("express")
const router = express.Router();
import {APIResponse} from "../../interface/api";

// host/api/bid/update
router.post(
    "/update",

    async (req: Request, res: Response) => {
        const sum:number = req.body.sum;
        const currency:string = req.body.currency;

        const result:APIResponse = await controller.updateValues(sum, currency)
        return res.status(result.code).send(result)

})


router.post(
    "/delete",
        async (req: Request, res: Response) => {
            const id:number = req.body.id;
            let del = await controller.deleteValues(id)
            return del
        }
)

router.post(
    //        sum, course, currency, email
    "/add",
    async (req: Request, resResponse) => {
        const sum: number = req.body.sum;
        const course: number = req.body.course;
        const currency: number = req.body.currency;
        const email: number = req.body.email;

        let add  = await controller.addValues(sum, course, currency, email)
        return add
    }
)


export = router




