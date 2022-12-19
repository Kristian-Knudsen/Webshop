import { Router, Request, Response } from "express";
import { ErrorMessage, SuccessMessage, ValidateTokenMiddleWare } from "../utils";
import { getOrderById, getOrdersByAmount } from "./Controller";

// /orders
const r: Router = Router();

r.get(['/count', '/count/:amount'], ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    if (!req.params || !req.params.amount) {
        return ErrorMessage(res, 400, "Missing paramters! Please supply a amount in the URL params")
    } else if (isNaN(parseInt(req.params.amount))) {
        return ErrorMessage(res, 400, "Please supply a number as amount in the URL parameters");
    }

    await getOrdersByAmount(parseInt(req.params.amount))
        .then(d => SuccessMessage(res, 200, d))
        .catch(e => ErrorMessage(res, 400, e));
});

r.get(['/id', '/id/:id'], ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    if (!req.params || !req.params.id) {
        return ErrorMessage(res, 400, "Missing paramters! Please supply a id in the URL params")
    } else if (isNaN(parseInt(req.params.id))) {
        return ErrorMessage(res, 400, "Please supply a number as id in the URL parameters");
    }

    await getOrderById(parseInt(req.params.id))
        .then(d => SuccessMessage(res, 200, d))
        .catch(e => ErrorMessage(res, 400, e));
});

r.post('/', ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    if (!req.body) {
        return ErrorMessage(res, 400, "Missing body! Please supply data in JSON format");
    } else if (!req.body.username) {
        return ErrorMessage(res, 400, "Missing input: Username! Please supply this in the body")
    } else if (!req.body.password) {
        return ErrorMessage(res, 400, "Missing input: Password! Please supply this in the body")
    }
});


module.exports = r;