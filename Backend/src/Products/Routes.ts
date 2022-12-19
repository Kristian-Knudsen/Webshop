import { Router, Request, Response } from "express";
import { ErrorMessage, SuccessMessage, generateToken, validateToken, ValidateTokenMiddleWare } from "../utils";
import { createProduct, getProductById, getProducts } from "./Controller";
import { ProductData } from "./types";

// /products
const r: Router = Router();

r.get('/', ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    await getProducts()
    .then(d => SuccessMessage(res, 200, d))
    .catch(e => ErrorMessage(res, 400, e));
});

r.get('/:id', ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    if(!req.params || !req.params.id) {
        return ErrorMessage(res, 400, "Missing paramters! Please supply a amount in the URL params");
    } else if (isNaN(parseInt(req.params.id))) {
        return ErrorMessage(res, 400, "Please supply a number as id in the URL parameters");
    }
    
    await getProductById(parseInt(req.params.id))
    .then(d => SuccessMessage(res, 200, d))
    .catch(e => ErrorMessage(res, 400, e));
});


r.post('/', ValidateTokenMiddleWare, async (req: Request, res: Response) => {
    if (!req.body) {
        return ErrorMessage(res, 400, "Missing body! Please supply data in JSON format");
    } else if (!req.body.name) {
        return ErrorMessage(res, 400, "Missing input: name! Please supply this in the body" )
    } else if (!req.body.price) {
        return ErrorMessage(res, 400, "Missing input: price! Please supply this in the body" )
    } else if (!req.body.currency) {
        return ErrorMessage(res, 400, "Missing input: currency! Please supply this in the body" )
    } else if (!req.body.image) {
        return ErrorMessage(res, 400, "Missing input: image! Please supply this in the body" )
    } else if (!req.body.current_inventory) {
        return ErrorMessage(res, 400, "Missing input: current_inventory! Please supply this in the body" )
    } else if (!req.body.description) {
        return ErrorMessage(res, 400, "Missing input: description! Please supply this in the body" )
    } else if (isNaN(parseFloat(req.body.price))) {
        return ErrorMessage(res, 400, "Please supply a decimal number as price in the body");
    } else if (isNaN(parseInt(req.body.current_inventory))) {
        return ErrorMessage(res, 400, "Please supply a number as current_inventory in the body");
    }

    const productData : ProductData = {
        "name": req.body.name,
        "price": parseFloat(req.body.price),
        "currency": req.body.currency,
        "image": req.body.image,
        "current_inventory": parseInt(req.body.current_inventory),
        "description": req.body.description
    };

    await createProduct(productData)
    .then(d => SuccessMessage(res, 200, d))
    .catch(e => ErrorMessage(res, 400, e));

});



module.exports = r;